import * as vscode from 'vscode';
import * as path from 'path';
//import * as os from 'os';
import { setHtmlForWebview} from './pawDrawEditor';
import {startWebSocketServer,WSSendUpdate,httpServer,clientwsMap,startHttpServer,createHttpServer,getLocalIp} from './httpServer';

//import {postTypeTag} from './util';
let panel:vscode.WebviewPanel|null = null;
//const encoder = new TextEncoder();
//const decoder = new TextDecoder();
let httpPort = 3000;
//let _tmpDate = Date.now();
const TypeTag = new Map<string,number>();
let Server:httpServer|null = null;
export const stopHttpServer = ()=>{
    if (Server) {
        Server.close();
        Server = null;
        vscode.window.showInformationMessage('服务器已停止');
    }
};
const RunHttpServer = (config:{port?:number,name:string,index:string,main:string,watchPath:vscode.Uri,extensionUri: vscode.Uri})=>{
    if (!Server){
        Server = createHttpServer(config);
    }
    httpPort = config.port||3000;
    let errNumber = 10;
    const runHttp = ()=>{
        startHttpServer(Server!,()=>{
            startWebSocketServer(Server!,config.watchPath);
        },err=>{
            if (err.message.startsWith("listen EADDRINUSE:")){
                httpPort++;
                errNumber--;
                if (errNumber===0){
                    return;
                }
                runHttp();
            }
        },httpPort);
    };
    runHttp();
    return Server;
};
const createPanel  = ( config:{webview:boolean,name:string,index:string,main:string,watchPath:vscode.Uri,extensionUri: vscode.Uri})=>{
    if (!config.webview){
        return;
    }
    if (panel){return panel;}

 

    if (!config.index){
        config.index = "index.js";
    }else if (!config.index.endsWith(".js")){
        config.index+=".js";
    }
    panel =  vscode.window.createWebviewPanel(
        'View',
        config.name||"mgtoy",
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
    //panel.options=
    //initPanelTmpDir(watchPath,outPath,context);
    panel.onDidDispose(e=>{
        console.log(e);
        panel=null;
    });
    
    setHtmlForWebview(
        panel.webview,config,
        workerspaceMessageHandMap(config.watchPath,TypeTag,(db:any)=>{
           if (panel) {panel.webview.postMessage(db);}
           else {
            console.log(db);
           }
        })
    );
    
    return panel;
};

 
export const workerspaceMessageHandMap = (
    workerspacePath:vscode.Uri,
    //setTmpDate:(d:number)=>void,
    postTypeTag:Map<string,number>,postMessage:(db:{
    type:number,
    msg:{db?:string|ArrayBuffer,name?:string,open?:boolean}})=>void)=>{
    const handMap = new Map();
    let tmpDate = Date.now();
    handMap.set('req',(e:{path:string})=>{ 
        console.log(e);
        const fn = async ()=>{
            try{
               const t = await vscode.workspace.fs.readFile(
                    vscode.Uri.joinPath(
                        workerspacePath,e.path
                    )); 
                postMessage({type:postTypeTag.get("init")|| 0,msg:{db:t.buffer as ArrayBuffer,name:e.path }});
                // postMessage({                         
                //    init:{db:t.buffer,name:e.path } ,                                  
                //});
                    
            }catch(err:any){
                //console.log(err);
                //vscode.window.showErrorMessage(err);
                postMessage({type:postTypeTag.get("init")||0,msg:{ name:e.path }});
                //postMessage({                         
                //    init:{name:e.path } ,                                  
                //});
            }
        };
        fn();        
    }); 
    handMap.set('initError',(message:{msg:string})=>{
        vscode.window.showErrorMessage(message.msg);
        if (Server){
            const addr = Server.address();
            console.log(addr);
            if (!addr || typeof addr ==="string" ){
                return;
            }
            const port  = addr.port;
            vscode.window.showInformationMessage("info" ,{modal:true,detail:`Remote browsing address:http://${getLocalIp()}:${port}` },"Browser view").then(v=>{
                if (v==="Browser view"){
                     vscode.env.openExternal(vscode.Uri.parse(`http://${getLocalIp()}:${port}`));
                }
            });
        } 
           
        
		
    });
    handMap.set('loaded',(e:any)=>{
        tmpDate = Date.now();
        //console.log(e);
        (e.msg as string).split("|").forEach((v,i)=>{
            postTypeTag.set(v,1<<i);
        });
        console.log(postTypeTag);
        postMessage({                    
            msg:{open:true},
            type:postTypeTag.get("run")||0             
        });       
    });    
    handMap.set('start',()=>{tmpDate = Date.now();});
    handMap.set('end',()=>{
        vscode.window.showInformationMessage(`time taken:${String((Date.now()-tmpDate)/1000)} second`);
        if (Server && clientwsMap.size===0){
            const addr = Server.address();
            console.log(addr);
            if (!addr || typeof addr ==="string"  ){
                return;
            }
            //console.log(clientwsMap.size);

            const port  = addr.port;
            vscode.window.showInformationMessage( `Remote address: http://${getLocalIp()}:${port}`,"Browser view").then(v=>{
                if (v==="Browser view"){
                    vscode.env.openExternal(vscode.Uri.parse(`http://${getLocalIp()}:${port}`));
                }
            });
        }
        
   });
    return handMap;
};
export const reload = ()=>{
    console.log(vscode.workspace.getConfiguration().get("title"));
    /*
    if (!vscode.workspace.workspaceFolders){
        return;
    }
    for (const f of vscode.workspace.workspaceFolders){
        vscode.Uri.joinPath(f.uri,"mgtoy.json")
    }
        */
    //vscode.workspace.workspaceFolders?[0]
};
 
export const watcherServer = (context: vscode.ExtensionContext)=>{
    vscode.workspace.findFiles('mgtoy.json', null, 1).then(files=>{
        if (files.length === 0) {
            return;
        }
        //console.log(files);
        const u = files[0];
        vscode.workspace.fs.readFile(u).then(v=>{
            const conf:{
                src:string,
                name: string,
                index: string,
                main: string,
                port:number,
                webview:boolean,
                } = JSON.parse(v.toString());
            if (!conf.src){
                return;
            }  
            //console.log(config);  
            const workspacePath = vscode.workspace.getWorkspaceFolder(u)!.uri;
            const config:{
                name: string;
                index: string;
                main: string;
                watchPath: vscode.Uri;
                extensionUri: vscode.Uri;
                port:number,
                webview:boolean,
            } = {
                watchPath : vscode.Uri.joinPath(
                    workspacePath,
                    conf.src),
                extensionUri : context.extensionUri,
                ...conf
            };
          
            createPanel(config);
            RunHttpServer(config);
            //Server = createHttpServer({...config,port:3000});
            const watcher = vscode.workspace.createFileSystemWatcher(
                new vscode.RelativePattern(config.watchPath, '**/*.js')
            );
            //bundleConfig.in = vscode.Uri.joinPath(bundleConfig.in,"index.js");
            context.subscriptions.push(watcher);
            // 监听文件更改事件
            watcher.onDidChange(uri => { 
                let name = path.relative(
                    vscode.workspace.asRelativePath(config.watchPath),
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
                    clientwsMap.forEach(ws=>{
                        WSSendUpdate(["init","run"],msg,ws);
                        //ws.send(JSON.stringify({run:true}));
                    });
                    createPanel(config)?.webview.postMessage( {  
                        type:(TypeTag.get("init")||0)|(TypeTag.get("run") ||0 ),
                        msg                   
                    });
                });                
            });        
            // 监听文件删除事件
            watcher.onDidDelete(uri => {
                let name = path.relative(
                    vscode.workspace.asRelativePath(config.watchPath),
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
        }); 
        
    });
};