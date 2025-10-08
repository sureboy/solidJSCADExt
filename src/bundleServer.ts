import * as vscode from 'vscode';
import * as path from 'path';
//import * as os from 'os';
 
let panel:vscode.WebviewPanel|null = null;
const encoder = new TextEncoder();
const decoder = new TextDecoder();
let tmpDate = Date.now();
const updatePanelTmpFile = async (Text: string,pathName:vscode.Uri,context: vscode.ExtensionContext)=>{
    
   
    const modeling = vscode.Uri.joinPath(
        vscode.Uri.parse(path.dirname(pathName.fsPath)),
        "modeling1.js");
        
       try{
        await vscode.workspace.fs.stat(modeling);
       }catch(e){
        const scriptUri1 = panel?.webview.asWebviewUri(
            vscode.Uri.file(path.join(context.extensionPath,  'webview', 'modeling.esm.js'))
            //vscode.Uri.file(path.join(context.extensionPath,  'webview', 'jscad-modeling.min.js'))
        );
        vscode.workspace.fs.writeFile(modeling,encoder.encode(`
            import modeling from '${scriptUri1}'
            export default modeling`));
       }
      
       
    
    //vscode.workspace.fs.writeFile()
   
    vscode.workspace.fs.writeFile(pathName,
        encoder.encode(
            Text.replaceAll("@jscad/modeling",`./modeling1.js`))) ;
};
const initPanelTmpDir =async (watcher:vscode.Uri, getCode:Function)=>{
     await vscode.workspace.fs.readDirectory(watcher).then(async (vals)=>{
        //console.log(val);
        
        //vscode.workspace.fs.createDirectory(out);
        for (const v of vals) {
            if (!v[0].endsWith(".js")){
                return;
            }
            const t = await vscode.workspace.fs.readFile(vscode.Uri.joinPath(watcher,v[0]));
            getCode({code:decoder.decode(t),name:"./"+ v[0] });
                 
        };
        
    });
    getCode({});
};
const createPanel  = ( watchPath:vscode.Uri,context: vscode.ExtensionContext)=>{
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
                vscode.Uri.file(path.join(context.extensionPath, 'webview')),
                vscode.Uri.file(path.join(context.extensionPath, 'webviewCode')),
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
      vscode.Uri.file(path.join(context.extensionPath,  'webview', 'csgChange.js')
    ));
    const scriptUri = panel.webview.asWebviewUri(
             vscode.Uri.joinPath(context.extensionUri,  'webviewCode', 'webview.js')
           ); 
    const modelingurl = panel.webview.asWebviewUri(
            vscode.Uri.joinPath(context.extensionUri,  'webview', 'modeling.esm.js')
          ); 
    const styleUri = panel.webview.asWebviewUri(
             vscode.Uri.joinPath(context.extensionUri,  'webviewCode', 'assets', 'main.css')
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
  window.modeling ="${modelingurl}"
  </script>

    <div id="app" ></div>   
 <script type="module" src="${scriptUri}"> </script>
 
  </body>
</html>   
`;

const workerCode = {
    name:"worker",
    code:`import * as csg  from '${csgChange}'
    import * as src  from './index.js'
    console.log(src )
    csg.getCsgObjArray(src.main(),self.postMessage)  `
};
const workerCode1 = {
    name:"worker",
    code:`import * as src  from './test.js'
    console.log(src )
    src.main()
     `
};
 
    //try{}catch(e){}
    panel.webview.onDidReceiveMessage(async (message) => {
        //console.log('[Webview Message]', message);
        console.log(message);
        switch (message.type) {
            case 'loaded':
                tmpDate = Date.now();
                //console.log(tmpDate,panel);
               
                panel?.webview.postMessage({  
                       
                    init:workerCode ,
                                    
                });
                await initPanelTmpDir(watchPath,(code:any)=>{
                    //codelist.push(code);
                    panel?.webview.postMessage({  
                       
                        init:code ,
                                        
                    });
                } );
                //codelist.push(workerCode);
                panel?.webview.postMessage({  
                       
                     
                    run:"worker"
                                    
                });
                break; 
            case 'end':
                //console.log("begin",(Date.now()-this.tmpDate)/1000);
                vscode.window.showInformationMessage("waited"+String((Date.now()-tmpDate)/1000));
                break;
            case 'log':
                //console.log(e.msg);
                vscode.window.showInformationMessage( message.msg.join('\n') );
                break;
            case 'error':
                vscode.window.showErrorMessage("err" ,{modal:true,detail:message.msg.join('\n') });
                break; 
        }
    });
 
    return panel;
};
 
export const watcherServer = (context: vscode.ExtensionContext)=>{
    vscode.workspace.findFiles('**/mgtoy.json', null, 1).then(files=>{
        if (files.length === 0) {
            return;
        }
        //console.log(files);
        const u = files[0];
        vscode.workspace.fs.readFile(u).then(v=>{
            const config = JSON.parse(v.toString());
            if (!config.watcher){
                return;
            }  
            //console.log(config);       
            const workspacePath = vscode.workspace.getWorkspaceFolder(u)!.uri;
            //const bundleConfig = {in:vscode.Uri.joinPath(workspacePath,config.watcher,"index.js"),out:vscode.Uri.joinPath(workspacePath,config.out,"index1.mgtoy.js")};
            //const pattern = new vscode.RelativePattern(vscode.Uri.joinPath(vscode.workspace.getWorkspaceFolder(u)!.uri,config.watcher), '**/*.js');
            const watchPath = vscode.Uri.joinPath(workspacePath,config.watcher);
            //const outPath = vscode.Uri.joinPath(workspacePath,config.out );
            //initPanelTmpDir(watchPath,outPath,context);
            createPanel(watchPath,context);
            
            const watcher = vscode.workspace.createFileSystemWatcher(
                new vscode.RelativePattern(watchPath, '**/*.js')
            );
            //bundleConfig.in = vscode.Uri.joinPath(bundleConfig.in,"index.js");
            context.subscriptions.push(watcher);
            watcher.onDidCreate(uri => {
                vscode.window.showInformationMessage(`文件已创建: ${uri.fsPath}`);
                console.log('文件创建:', uri.fsPath);

            });        
            // 监听文件更改事件
            watcher.onDidChange(uri => {
                vscode.window.showInformationMessage(`文件已修改: ${uri.fsPath}`);
                //bundleUserCode(bundleConfig);
                const editor = vscode.window.activeTextEditor;
                if (!editor) {
                    vscode.window.showErrorMessage('没有打开的编辑器');
                    return;
                }
        
                const document = editor.document;
                if (document.languageId !== 'javascript') {
                    vscode.window.showErrorMessage('请打开一个 JavaScript 文件');
                    return;
                }
            
                //updatePanelTmpFile(document.getText(),vscode.Uri.joinPath(outPath,path.basename(document.fileName)),context);
                //os.tmpdir()
                //.getText().replaceAll("@jscad/modeling","");
                console.log('文件更改:', uri.fsPath);
                vscode.workspace.fs.readFile(uri).then(db=>{
                    
                
                    createPanel(watchPath,context).webview.postMessage({  
                        update:{
                            code: decoder.decode(db),
                            name:"./"+path.basename(uri.fsPath)
                        },
                        run:"worker",
                    });
                });
                //const relativePath = path.relative(baseDirectory, filePath);
               // panel?.webview.postMessage({  
               //     update:uri.fsPath
               // });
                   // 获取文件内容
                   /*
                const code = document.getText();
                const originalLength = code.length;

                // 显示进度
                vscode.window.withProgress({
                    location: vscode.ProgressLocation.Notification,
                    title: "打包 JavaScript 代码...",
                    cancellable: false
                }, async (progress) => {
                    progress.report({ increment: 0 });
                    
                    // 打包代码
                    const bundledCode = bundler.bundleCode(code, {
                        minify,
                        format,
                        moduleName
                    });

                    progress.report({ increment: 100 });
                    
                    // 显示结果
                    await bundler.showBundledResult(bundledCode, originalLength);
                });
                */
            });        
            // 监听文件删除事件
            watcher.onDidDelete(uri => {
                vscode.window.showInformationMessage(`文件已删除: ${uri.fsPath}`);
                console.log('文件删除:', uri.fsPath);
            });
        });
        //hand( files[0] ); 
        
    });
};