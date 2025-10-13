import * as vscode from 'vscode';
import * as path from 'path';
//import * as os from 'os';
 
let panel:vscode.WebviewPanel|null = null;
const encoder = new TextEncoder();
//const decoder = new TextDecoder();
let tmpDate = Date.now();

const initPanelTmpDir =async (watcher:vscode.Uri, getCode:Function)=>{
     await vscode.workspace.fs.readDirectory(watcher).then(async (vals)=>{
        //console.log(val);
        
        //vscode.workspace.fs.createDirectory(out);
        for (const v of vals) {
            if (!v[0].endsWith(".js")){
                return;
            }
            const t = await vscode.workspace.fs.readFile(vscode.Uri.joinPath(watcher,v[0]));
            getCode({db:t.buffer,name: v[0] });
            //console.log(v); 
        };
        
    });
    //getCode({});
};
const createPanel  = ( config:{index:string,main:string,watchPath:vscode.Uri,extensionUri: vscode.Uri})=>{
    if (panel){return panel;}
    panel =  vscode.window.createWebviewPanel(
        'mgtoyView',
        'test',
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
    //initPanelTmpDir(watchPath,outPath,context);
    panel.onDidDispose(e=>{
        console.log(e);
        panel=null;
    });
    //const cspSource = panel.webview.cspSource;
    const csp = `
    default-src 'none';
    script-src 'self' ${panel.webview.cspSource} 'unsafe-inline';
    worker-src ${panel.webview.cspSource} blob: data:;
    style-src ${panel.webview.cspSource} 'unsafe-inline';
    connect-src ${panel.webview.cspSource} 'unsafe-inline';
    `;
    //const mainScr = panel.webview.asWebviewUri(
    //    vscode.Uri.joinPath( outPath,  'index.js')
    //);
    const csgChange =  panel.webview.asWebviewUri(
      vscode.Uri.joinPath( config.extensionUri,  'myModule', 'csgChange.js')
    );
    const modelingurl = panel.webview.asWebviewUri(
        vscode.Uri.joinPath(config.extensionUri,  'myModule', 'modeling.esm.js')
      ); 
    const scriptUri = panel.webview.asWebviewUri(
             vscode.Uri.joinPath(config.extensionUri,  'webviewCode', 'webview.js')
    ); 

    const styleUri = panel.webview.asWebviewUri(
        vscode.Uri.joinPath(config.extensionUri,  'webviewCode', 'assets', 'main.css')
    ); 
 
        panel.webview.html =`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" /> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="Content-Security-Policy" content="${csp}">
    <title>Vite + Svelte</title> 
    <link rel="stylesheet" href="${styleUri}">
  </head>
  <body>
  <script>window.vscode = acquireVsCodeApi();
  window.includeImport ={
    "@jscad/modeling":"${modelingurl}",
    "csgChange":"${csgChange}",
  }
    window.myConfig={index:"${config.index||"index.js"}",main:"${config.main||"main"}"}
  </script>

    <div id="app" ></div>   
 <script type="module" src="${scriptUri}"> </script>
 
  </body>
</html>   
`; 
 
 
    //try{}catch(e){}
    panel.webview.onDidReceiveMessage(async (message) => {
        //console.log('[Webview Message]', message);
        console.log(message);
        switch (message.type) {
            case 'loaded':
                tmpDate = Date.now();
                //console.log(tmpDate,panel);               
                //panel?.webview.postMessage({                         
                //    init:workerCode ,                                    
                //});
                await initPanelTmpDir(config.watchPath,(code:any)=>{
                    //codelist.push(code);
                    panel?.webview.postMessage({                         
                        init:code ,                                        
                    });
                } );
                //codelist.push(workerCode);
                panel?.webview.postMessage({                    
                    open:true,
                    run:"worker"
                                    
                });
                break; 
            case 'start':
                tmpDate = Date.now();
                break; 
            case 'end':
                //console.log("begin",(Date.now()-this.tmpDate)/1000);
                vscode.window.showInformationMessage("waited "+String((Date.now()-tmpDate)/1000));
                break;
            case 'log':
                //console.log(e.msg);
                vscode.window.showInformationMessage( message.msg.join('\n') );
                break;
            case 'error':
                vscode.window.showErrorMessage("err" ,{modal:true,detail:JSON.stringify(message.msg) });
                break; 
        }
    });
 
    return panel;
};
 
export const watcherServer = (context: vscode.ExtensionContext)=>{
    vscode.workspace.findFiles('mgtoy.json', null, 1).then(files=>{
        if (files.length === 0) {
            return;
        }
        console.log(files);
        const u = files[0];
        vscode.workspace.fs.readFile(u).then(v=>{
            const config = JSON.parse(v.toString());
            if (!config.src){
                return;
            }  
            //console.log(config);       
            const workspacePath = vscode.workspace.getWorkspaceFolder(u)!.uri;
            config.watchPath = vscode.Uri.joinPath(workspacePath,config.src);
            config.extensionUri = context.extensionUri;
            createPanel(config);
            
            const watcher = vscode.workspace.createFileSystemWatcher(
                new vscode.RelativePattern(config.watchPath, '**/*.js')
            );
            //bundleConfig.in = vscode.Uri.joinPath(bundleConfig.in,"index.js");
            context.subscriptions.push(watcher);
            watcher.onDidCreate(uri => {
                vscode.window.showInformationMessage(`Create: ${uri.fsPath}`); 
            });        
            // 监听文件更改事件
            watcher.onDidChange(uri => {
                vscode.window.showInformationMessage(`Change: ${uri.fsPath}`);
                //console.log('文件更改:', uri.fsPath);
                tmpDate = Date.now();
                vscode.workspace.fs.readFile(uri).then(db=>{                   
                
                    createPanel(config).webview.postMessage({  
                        init:{
                            db:  db.buffer,
                            name:path.basename(uri.fsPath)
                        },
                        run:"worker",
                        
                    });
                });
                
            });        
            // 监听文件删除事件
            watcher.onDidDelete(uri => {
                vscode.window.showInformationMessage(`Delete: ${uri.fsPath}`); 
            });
        }); 
        
    });
};