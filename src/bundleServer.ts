import * as vscode from 'vscode';
import * as path from 'path';
import * as WS from 'ws';
import * as http from 'http'; 
//import * as os from 'os';
import { setHtmlForWebview} from './pawDrawEditor';
import {WSSendUpdate,RunHttpServer,WSSend,startWebSocketServer, httpindexHtml} from './httpServer';
import type {SerConfig} from './httpServer';
import {downSrcHandMap} from './gzEditorProvider';
 
let panel:vscode.WebviewPanel|null = null;
//const encoder = new TextEncoder();
//const decoder = new TextDecoder();
//let httpPort = 3000;
//let _tmpDate = Date.now();

const TypeTag = new Map<postTypeStr,number>();

let config:{
    //pageName:string,
    //pageType:"run" | "gzData" | "stlData",
    name: string;
    in: string;
    func: string;
    watchPath: vscode.Uri;
    extensionUri: vscode.Uri;
    port:number,
    //webview:boolean,
    hook?:(ws:WS.WebSocket,listenMap: Map<string, (e: any) => void>)=>void,
}|null = null ;
/*
export const stopHttpServer = ()=>{
    if (Server) {
        Server.close();
        Server = null;
        vscode.window.showInformationMessage('服务器已停止');
    }
};
*/
 
const createPanel  = ( config:{
    //webview:boolean,
    name:string,
    in:string,
    func:string,
    //watchPath:vscode.Uri,
    extensionUri: vscode.Uri},handMap:Map<string,(e:any)=>void>,Serv?:SerConfig)=>{
 
    if (panel){return panel;}
    if (!config.in){
        config.in = "index.js";
    }else if (!config.in.endsWith(".js")){
        config.in+=".js";
    }
    panel =  vscode.window.createWebviewPanel(
        'View',
        config.name||"solidJScad",
        vscode.ViewColumn.One,
        {
            enableScripts: true,
            retainContextWhenHidden: true,
 
            localResourceRoots: [ 
                //outPath,
                //vscode.Uri.file(path.join(userWorkspace,"modeling","src")),
                vscode.Uri.joinPath (config.extensionUri, 'myModule'),
                vscode.Uri.joinPath( config.extensionUri, 'webviewCode'),
            ]
        }
    );
    //panel
    //panel.options=
    //initPanelTmpDir(watchPath,outPath,context);
    panel.onDidDispose(e=>{
        console.log("close",e);
        //Serv?.Server?.
        Serv?.Bar.hide();
        //Serv?.Server?.close();
        panel=null;
    });
    panel.onDidChangeViewState(e=>{
        if (panel?.visible) {
            // 面板变为可见，可以恢复更新等操作
            Serv?.Bar.show();
            //console.log('面板可见');
        } else {
            // 面板隐藏，暂停一些操作以节省资源
            Serv?.Bar.hide();
            //console.log('面板隐藏');
        }
 
    });
 
    
    setHtmlForWebview(
        panel.webview,{pageType:"run",...config},
        handMap
    );
    Serv?.Bar.show();
    return panel;
};


export type postTypeStr = 'init'|'del'|'run'|'getSrc'|'gzData'|'stlData'
export const initLoad = (db:string,postTypeTag:Map<postTypeStr,number>,hand:(pageType:'run'|'gzData'|'stlData')=>void)=>{
    const msg:{direction:postTypeStr[],pageType:'run'|'gzData'|'stlData'}  = JSON.parse(db);
    msg.direction.forEach((v,i)=>{
        postTypeTag.set(v,1<<i);
    });
    hand(msg.pageType);
};
export const workerspaceMessageHandMap = (
    
    //setTmpDate:(d:number)=>void,
    postTypeTag:Map<postTypeStr,number>,postMessage:(db:{
    type:number,
    msg:{db?:string|ArrayBuffer,name?:string,open?:boolean}})=>void,
    workerspacePath?:vscode.Uri,
    //serv?:SerConfig,
)=>{
    const handListenMsg = new Map<string,(e:any)=>void>();
    let tmpDate = Date.now();
    handListenMsg.set('req',(e:{path:string})=>{ 
        //console.log(e);
        if (!workerspacePath){
            postMessage({type:postTypeTag.get("init")||0,msg:{ name:e.path }});
            return;
        }
        const fn = async ()=>{
            try{
               const t = await vscode.workspace.fs.readFile(
                    vscode.Uri.joinPath(
                        workerspacePath,e.path
                    )); 
                postMessage({type:postTypeTag.get("init")|| 0,msg:{db:t.buffer as ArrayBuffer,name:e.path }});                    
            }catch(err:any){
                postMessage({type:postTypeTag.get("init")||0,msg:{ name:e.path }});
            }
        };
        fn();        
    }); 
    handListenMsg.set('initError',(message:{msg:string})=>{
        vscode.window.showErrorMessage(message.msg);
    });
    handListenMsg.set('loaded',(e:any)=>{
        //tmpDate = Date.now();
        //console.log(e);
        initLoad(e.msg,postTypeTag,t=>{
            postMessage({                    
                msg:{open:true},
                type:postTypeTag.get(t)||0             
            });
        });    
    });    
    handListenMsg.set('start',()=>{tmpDate = Date.now();});
    handListenMsg.set('end',()=>{
        vscode.window.showInformationMessage(`time taken:${String((Date.now()-tmpDate)/1000)} second`);
        /*
        if (serv && serv.Server && serv.clientwsMap.size===0){
 
            const port  = serv.httpPort;
            vscode.window.showInformationMessage( `Remote address: http://${getLocalIp()}:${port}`,"Browser view").then(v=>{
                if (v==="Browser view"){
                    vscode.env.openExternal(vscode.Uri.parse(`http://localhost:${port}`));
                }
            });
        }   */     
    });


    return handListenMsg;
};
export const reload = ()=>{
    console.log(vscode.workspace.getConfiguration().get("title"));
 
};
const loadConfig =async (u:vscode.Uri)=>{
    //console.log(vscode.workspace.getConfiguration().get("title"));
    const v = await vscode.workspace.fs.readFile(u) ;
        const conf:{
            src:string,
            name: string,
            func: string,
            in: string,
            port:number,
            //webview:boolean,
            } = JSON.parse(v.toString());
        if (!conf.src){
            //return;
            conf.src = vscode.workspace.getConfiguration("init").get("src") || "src";
        }  
        //console.log(config);  
        const workspacePath = vscode.workspace.getWorkspaceFolder(u)!.uri;
        return {
            watchPath : vscode.Uri.joinPath(
                workspacePath,
                conf.src),
            //extensionUri : context.extensionUri,
            ...conf
        }; 
};
const watchInit = (conf:{
    name: string;
    in: string;
    func: string;
    watchPath: vscode.Uri;
    extensionUri: vscode.Uri;
    port:number,
    //webview:boolean,
},handMap:Map<string,(e:any)=>void>,serv?:SerConfig)=>{
    const watcher = vscode.workspace.createFileSystemWatcher(
        new vscode.RelativePattern(conf.watchPath, '**/*.js')
    );
    watcher.onDidChange(uri => { 
        let name = path.relative(
            vscode.workspace.asRelativePath(conf.watchPath),
            vscode.workspace.asRelativePath(uri)
        );
        if (!name.startsWith("./")){
            name = "./"+name;
        }
        vscode.window.showInformationMessage(`Change: ${name}`);
        //console.log('文件更改:', uri.fsPath);
        
        //tmpDate = Date.now();
        vscode.workspace.fs.readFile(uri).then(db=>{      
            const msg={
                db:  db.buffer as ArrayBuffer,
                name 
            };
            serv?.wss?.clients.forEach(ws=>{
                WSSendUpdate(["init","run"],TypeTag,msg,ws);
                //ws.send(JSON.stringify({run:true}));
            });
            createPanel(conf,handMap,serv)?.webview.postMessage( {  
                type:(TypeTag.get("init")||0)|(TypeTag.get("run") ||0 ),
                msg                   
            },);
        });                
    });        
    // 监听文件删除事件
    watcher.onDidDelete(uri => {
        let name = path.relative(
            vscode.workspace.asRelativePath(conf.watchPath),
            vscode.workspace.asRelativePath(uri)
        );
        if (!name.startsWith("./")){
            name = "./"+name;
        }
        //const name = path.relative(config.watchPath.fsPath,uri.fsPath);
       
        if (panel){
            panel.webview.postMessage({
                type:TypeTag.get("del"),
                msg:{
                    name:path.basename(uri.fsPath)
                }
            });
        }
        vscode.window.showInformationMessage(`Delete: ${name}`); 
    });

    return watcher;
};

export const watcherServer = (context: vscode.ExtensionContext)=>{
    
    vscode.workspace.findFiles('solidjscad.json', null, 1).then(files=>{
        if (files.length === 0) {
            return;
        }
        
        //console.log(files);
        const u = files[0];
        loadConfig(u).then(conf=>{
            
            config =  Object.assign(config?config:{},conf,{
                //pageType:"run",
                extensionUri : context.extensionUri,
            });
            const  Serv = RunHttpServer( {name:config.name,extensionUri:context.extensionUri,
                indexHtml:httpindexHtml({pageType:"run",...config})},serv=>{
                    //Serv =  serv;
                    startWebSocketServer(
                        serv,ws=>{
                            return workerspaceMessageHandMap(
                                TypeTag,
                                (e: {
                                    type: number;
                                    msg: {
                                        db?: string | ArrayBuffer;
                                        name?: string;
                                        open?: boolean;
                                    }})=>{
                                    WSSend(e,ws);                
                                },config?.watchPath,
                            );
                            //return handListenMap;
                        }
                        //config.watchPath
                    );
                },config.port);
            
            const handMap = workerspaceMessageHandMap(TypeTag,(db:any)=>{
                if (panel) {panel.webview.postMessage(db);}
                else {
                 console.log(db);
                }
            },config.watchPath);          
          
            createPanel(config,handMap,Serv );
            //let NewWorkspace : vscode.Uri|null = null;
            //const downSrc = {src:conf!.src, ...config};
            downSrcHandMap(handMap,
                (db:any)=>{
                if (panel) {panel.webview.postMessage(db);}
                else {
                 console.log(db);
                }
            },
                {src:conf.src,
                    
                    TypeTag, ...config});
            /*
            handMap.set('downSrc',(e:any)=>{
                vscode.window.showOpenDialog({
                    canSelectFolders:true,
                    canSelectFiles:false,
                    canSelectMany:false,
                }).then(u=>{
                    if (!u){
                        return;
                    }
                    NewWorkspace = u[0];
                    newWorkspacePackage(NewWorkspace,
                        //vscode.Uri.joinPath(NewWorkspace,myWorkspaceConfig.name),
                        config!.extensionUri,  {
                            in:config!.in,
                            func:config!.func,
                            port:config!.port,
                            date:Date().toString(),
                            src:conf!.src,
                            name:path.basename(NewWorkspace.fsPath)
                        }, ()=>{
                            //console.log("begin get src",panel,TypeTag);
                            panel?.webview.postMessage({
                                type:TypeTag.get("getSrc") ,
                                //msg:{name:config!.in}
                            });
                    });  
                             
                });            
            });
              handMap.set('src',(message:{name:string,code:string,start?:boolean,end?:boolean})=>{
                        console.log(message);
                        if (!NewWorkspace){
                            return;
                        }
                        if (!message.name){
                            vscode.window.showWarningMessage("Workspace change",{
                                modal:true,
                                detail: `Do you need to move the workspace to the ${NewWorkspace} Folder`
                            },                   
                            "OK").then(v=>{
                                if (v!=="OK"){return;}
                                vscode.commands.executeCommand('vscode.openFolder', NewWorkspace);
                            });
                            return;
                        }
                        if (message.start){
                            return;
                        }
                       // vscode.workspace.fs.delete(vscode.Uri.joinPath(NewWorkspace,myWorkspaceConfig.src)).then(()=>{
                            vscode.workspace.fs.writeFile(
                                vscode.Uri.joinPath(NewWorkspace,conf!.src,message.name),
                                new TextEncoder().encode(message.code)).then(res=>{
                                    console.log(res);
                            }); 
                        //});
                      
                    });*/
            //Server = createHttpServer({...config,port:3000});
            const watcher = watchInit(config,handMap,Serv);
            //bundleConfig.in = vscode.Uri.joinPath(bundleConfig.in,"index.js");
            context.subscriptions.push(watcher);
           
        }); 
        
    });
};