import * as vscode from 'vscode';
import * as path from 'path';
//import * as os from 'os';
import { setHtmlForWebview} from './pawDrawEditor';
import {startHttpServer,port,getLocalIp} from './httpServer';
//import {postTypeTag} from './util';
let panel:vscode.WebviewPanel|null = null;
//const encoder = new TextEncoder();
//const decoder = new TextDecoder();
let tmpDate = Date.now();
const TypeTag = new Map<string,number>();
 
const createPanel  = ( config:{name:string,index:string,main:string,watchPath:vscode.Uri,extensionUri: vscode.Uri})=>{
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
        workerspaceMessageHandMap(config.watchPath,tmpDate,TypeTag,(db:any)=>{
           if (panel) {panel.webview.postMessage(db);}
           else {
            console.log(db);
           }
        })
    );
    
    return panel;
};

 
export const workerspaceMessageHandMap = (workerspacePath:vscode.Uri,tmpDate:number,postTypeTag:Map<string,number>,postMessage:(db:{
    type:number,
    msg:{db?:string|ArrayBuffer,name?:string,open?:boolean}})=>void)=>{
    const handMap = new Map();
    handMap.set('req',(e:{path:string})=>{ 
        console.log(e);
        const fn = async ()=>{
            try{
               const t = await vscode.workspace.fs.readFile(
                    vscode.Uri.joinPath(
                        workerspacePath,e.path
                    )); 
                postMessage({type:postTypeTag.get("init")|| 0,msg:{db:t.buffer,name:e.path }});
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
		vscode.window.showErrorMessage("err" ,{modal:true,detail:`Remote browsing address:http://${getLocalIp()}:${port}` },"Browser view").then(v=>{
		    if (v==="Browser view"){
                 vscode.env.openExternal(vscode.Uri.parse(`http://${getLocalIp()}:${port}`));
			}
		});
    });
    handMap.set('loaded',(e:any)=>{
        tmpDate = Date.now();
        //console.log(e.msg.split("|"));
        (e.msg as string).split("|").forEach((v,i)=>{
            postTypeTag.set(v,1<<i);
        });
        postMessage({                    
            msg:{open:true},
            type:postTypeTag.get("run")||0             
        });       
    });    
    handMap.set('start',()=>{tmpDate = Date.now();});
    handMap.set('end',()=>{vscode.window.showInformationMessage(`time taken:${String((Date.now()-tmpDate)/1000)} second. Remote address: http://${getLocalIp()}:${port}`,"Browser view").then(v=>{
        if (v==="Browser view"){
            vscode.env.openExternal(vscode.Uri.parse(`http://${getLocalIp()}:${port}`));
        }
    });});
    return handMap;
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
            } = {
                watchPath : vscode.Uri.joinPath(
                    workspacePath,
                    conf.src),
                extensionUri : context.extensionUri,
                ...conf
            };
            startHttpServer(context,config);
            createPanel(config);
            
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
                
                tmpDate = Date.now();
                vscode.workspace.fs.readFile(uri).then(db=>{      
                    const msg =   {
                        db:  db.buffer,
                        name 
                    };
                    //clientwsMap.forEach(ws=>{
                    //    WSSendInit(init,ws);
                        //ws.send(JSON.stringify({run:true}));
                    //});
                    createPanel(config).webview.postMessage({  
                        type:(TypeTag.get("init")||0)|(TypeTag.get("run") ||0 ),
                        msg,
                        
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