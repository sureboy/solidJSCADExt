import * as vscode from 'vscode';
import * as path from 'path';
//import * as os from 'os';
import { setHtmlForWebview} from './pawDrawEditor';
let panel:vscode.WebviewPanel|null = null;
//const encoder = new TextEncoder();
//const decoder = new TextDecoder();
let tmpDate = Date.now();

 
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
     
    const handMap = new Map();
    handMap.set('req',(e:{path:string})=>{ 
        console.log(e);
        const fn = async ()=>{
            try{
               const t = await vscode.workspace.fs.readFile(
                    vscode.Uri.joinPath(
                        config.watchPath,e.path )); 
                panel?.webview.postMessage({                         
                    init:{db:t.buffer,name:e.path } ,                                  
                });
                    
            }catch(err:any){
                //console.log(err);
                //vscode.window.showErrorMessage(err);
                panel?.webview.postMessage({                         
                    init:{name:e.path } ,                                  
                });
            }
        };
        fn();
        
    });
    
    handMap.set('loaded',()=>{
        tmpDate = Date.now();
        panel?.webview.postMessage({                    
            open:true,
            run:"worker"
                            
        });
                /*
        //const filePath = vscode.Uri.joinPath(config.watchPath,e.path||config.index);
        vscode.workspace.fs.readFile(
            vscode.Uri.joinPath(
                config.watchPath,e.path||config.index)).then(t=>{
            panel?.webview.postMessage({                         
                init:{db:t.buffer,name:e.path||config.index} ,    
                ...e.view                                  
            });
        });
 
        initPanelTmpDir(config.watchPath,(code:any)=>{
            //codelist.push(code);
            panel?.webview.postMessage({                         
                init:code ,                                        
            });
        } ).then(()=>{
            panel?.webview.postMessage({                    
                open:true,
                run:"worker"
                                
            });
        });
       */
        //codelist.push(workerCode);
       
    });
    
    handMap.set('start',()=>{tmpDate = Date.now();});
    handMap.set('end',()=>{vscode.window.showInformationMessage("waited "+String((Date.now()-tmpDate)/1000)+" s");});
   
    setHtmlForWebview(
        panel.webview,config,
        handMap
    );
    return panel;
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
            //const workspacePath = vscode.workspace.getWorkspaceFolder(u)!.uri;
            const config:{
                name: string;
                index: string;
                main: string;
                watchPath: vscode.Uri;
                extensionUri: vscode.Uri;
            } = {
                watchPath : vscode.Uri.joinPath(
                    vscode.workspace.getWorkspaceFolder(u)!.uri,
                    conf.src),
                extensionUri : context.extensionUri,
                ...conf
            };
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
                
                    createPanel(config).webview.postMessage({  
                        init:{
                            db:  db.buffer,
                            name 
                        },
                        run:true,
                        
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
                        del:{
                            name:path.basename(uri.fsPath)
                        }
                    });
                }
                vscode.window.showInformationMessage(`Delete: ${name}`); 
            });
        }); 
        
    });
};