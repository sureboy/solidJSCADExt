import * as vscode from 'vscode';
import * as path from 'path';
//import * as WS from 'ws';
//import * as http from 'http'; 
//import * as os from 'os';
import { setHtmlForWebview,newWorkspacePackage} from './pawDrawEditor';
import { RunHttpServer } from './nodeServer';
//import {ServPool} from './httpLib';
//import {httpindexHtml,WSSend} from "./httpLib";
//import type {SerConfig} from './nodeServer';
import {downSrcHandMap} from './gzEditorProvider';
import {getLocalIp} from './util';
 
//let panel:vscode.WebviewPanel|null = null;
//const encoder = new TextEncoder();
//const decoder = new TextDecoder();
//let httpPort = 3000;
//let _tmpDate = Date.now();


/*
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

export const stopHttpServer = ()=>{
    if (Server) {
        Server.close();
        Server = null;
        vscode.window.showInformationMessage('服务器已停止');
    }
};
*/
//let httpServerPort: number=0;
const Bar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right);
const createPanel  = ( config:{
    webview:boolean,
    name:string,
    in:string,
    func:string,
    //watchPath:vscode.Uri,
    extensionUri: vscode.Uri} 
   )=>{
    if (!config.webview){
        return ;
    }
 
    console.log("new panel");
    if (!config.in){
        config.in = "index.js";
    }else if (!config.in.endsWith(".js")){
        config.in+=".js";
    }
    return vscode.window.createWebviewPanel(
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
    //panel.webview.options
    //panel
    //panel.options=
    //initPanelTmpDir(watchPath,outPath,context);
  

   
    //return panel;
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
        vscode.window.showInformationMessage(`${String((Date.now()-tmpDate)/1000)}s`);
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
const loadConfig =async (u:vscode.Uri)=>{
    //console.log(vscode.workspace.getConfiguration().get("title"));
    const v = await vscode.workspace.fs.readFile(u) ;
    const conf:{
        src:string,
        name: string,
        func: string,
        in: string,
        port:number,
        webview:boolean,
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
    TypeTag:Map<postTypeStr,number>
    //webview:boolean,
}, panelFun:()=>vscode.WebviewPanel|undefined)=>{
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
            //serv?.wss?.clients.forEach(ws=>{
            //    WSSendUpdate(["init","run"],TypeTag,msg,ws);
                //ws.send(JSON.stringify({run:true}));
            //});
            panelFun()?.webview.postMessage( {  
                type:(conf.TypeTag.get("init")||0)|(conf.TypeTag.get("run") ||0 ),
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
       
        
        panelFun()?.webview.postMessage({
            type:conf.TypeTag.get("del"),
            msg:{
                name:path.basename(uri.fsPath)
            }
        });
       
        vscode.window.showInformationMessage(`Delete: ${name}`); 
    });

    return watcher;
};
export const watcherServer = (context: vscode.ExtensionContext)=>{
    vscode.workspace.findFiles('solidjscad.json', null, 1).then(files=>{
        if (files.length === 0) {
            if (!vscode.workspace.workspaceFolders){
                return;
            }
            const uri = vscode.workspace.workspaceFolders[0].uri;
            const conf = vscode.workspace.getConfiguration("init");
            newWorkspacePackage(
            uri,
            context.extensionUri,
            {
                name:path.basename(uri.fsPath),
                in:conf.get("in")||"index.js",
                func:conf.get("func")||"main",
                date:"",
                src:conf.get("src")||"src",
                port:conf.get("port")||3000,
                webview:conf.get("webview")||true,
            },
            ()=>{
                vscode.workspace.fs.copy(
                    vscode.Uri.joinPath(context.extensionUri,"myModule","csgChange.js"),
                    vscode.Uri.joinPath(uri,"src","lib","csgChange.js")
                );
                vscode.workspace.fs.copy(
                    vscode.Uri.joinPath(context.extensionUri,"myModule","modeling.esm.js"),
                    vscode.Uri.joinPath(uri,"src","lib","modeling.esm.js")
                );
                vscode.workspace.fs.writeFile(
                    vscode.Uri.joinPath(uri,"src","index.js"),
                new TextEncoder().encode(
                    "import modeling from '@jscad/modeling';\nexport const main=()=>{\n  return modeling.primitives.cube()\n}")
                ).then(()=>{
                    watcherServer(context);
                    //vscode.commands.executeCommand('vscode.openFolder', uri); 
                });
            }
        );
            
            //vscode.commands.executeCommand('solidJScad.create').;
            return;
        }
        const u = files[0];
        loadConfig(u).then(conf=>{
            const TypeTag = new Map<postTypeStr,number>();
            const config =  Object.assign( {},conf,{ 
                //pageType:"run",
                extensionUri : context.extensionUri,
            });
            console.log("get",config.name);
            //const serv = ServPool.get(config.name);
            
            if (!Bar.text){
                 
                RunHttpServer({
                    rootPath:path.join(context.extensionUri.fsPath,"myModule","node"),
                    srcPath:config.watchPath.fsPath,
                    indexHtml:"",
                    ...config},(ser)=>{ 
                       // httpServerPort = ser.httpPort;
                    //    console.log("set",ser.config?.name);
                    //ServPool.set(ser);

                    //if (serv.Bar){
                    Bar.text = `http://${getLocalIp()}:${ser.httpPort.toString()}`;
                    Bar.show();
                    //}
                        //const s:SerConfig = ser;
                });
            }
            
            
            /*
            const  Serv = RunHttpServer( {name:config.name,extensionUri:context.extensionUri,
                indexHtml:httpindexHtml({pageType:"run",src:conf.src,...config})},serv=>{
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
                        },listenMessage,
                        //config.watchPath
                    );
                },config.port);
            */
            const handMap = workerspaceMessageHandMap(TypeTag,(db:any)=>{
                if (panel) {panel.webview.postMessage(db);}
                else {
                 console.log(db);
                }
            },config.watchPath);          
            downSrcHandMap(handMap,
                (db:any)=>{
                if (panel) {panel.webview.postMessage(db);}
                else {
                    console.log(db);
                }
            },{ TypeTag, ...config});  
            //console.log(1,config);
            const panel = createPanel(config);
            //Bar.show();
            if (panel){
                const watcher = watchInit({TypeTag,...config},()=>{
                    //console.log(2,config);
                    return createPanel(config);
                });
                context.subscriptions.push(watcher); 
                panel.onDidDispose((e)=>{
                    console.log("close",e);
                    //panel?.dispose()
                    //Serv?.Server?.
                    //Bar?.hide();
                    //Serv?.Server?.close();
                    //panel=null;
                    //config.webview=false;
                    //Bar.dispose();
                    watcher.dispose();
                });
               
                setHtmlForWebview(
                    panel.webview,{pageType:"run",...config},
                    handMap
                );
            }          
            
            //bundleConfig.in = vscode.Uri.joinPath(bundleConfig.in,"index.js");
                      
        });         
    });
};