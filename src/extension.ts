import * as vscode from 'vscode';
import { STLEditorProvider } from './STLEditorProvider';
import { gzEditorProvider,newWorkspacePackage } from './gzEditorProvider'; 
import { watcherServer } from './bundleServer'; 
import * as path from "path";
import * as http from 'http'; 
import * as WebSocket from 'ws';
import { rejects } from 'assert';
let server: http.Server | null = null;
const port = 3000; // 默认端口
let tmpDate = Date.now();
 
   
export function activate(context: vscode.ExtensionContext) {
    vscode.window.showInformationMessage("mgtoy: Begin");
    const workeruri = vscode.Uri.joinPath(vscode.workspace.workspaceFolders![0].uri,"src");
    const startServer = vscode.commands.registerCommand('mgtoy.startServer', () => {
        if (server) {
            vscode.window.showInformationMessage('服务器已在运行');
            return;
        }
        const libUri = vscode.Uri.joinPath(context.extensionUri,"myModule");
        const rooturi = vscode.Uri.joinPath(libUri,"webui");
        const readfile = async(filepath:string[],file:string,res:any)=>{
            const ext = path.extname(file);
            const contentType = {
                '.html': 'text/html',
                '.js': 'text/javascript',
                '.css': 'text/css',
                '.json': 'application/json',
                '.png': 'image/png',
                '.jpg': 'image/jpeg'
            }[ext] || 'text/plain';
            try{
                await   vscode.workspace.fs.readFile(vscode.Uri.joinPath(filepath[0]==="lib"?libUri:rooturi,...filepath,file)).then(db=>{
                    res.writeHead(200, { 'Content-Type': contentType });
                    res.end(db);
                });
            }catch(e){
                console.log(e);
                res.writeHead(404);
            }
        };
        server = http.createServer((req, res) => {
            // 解析请求路径
            console.log("begin http server",req.url);
           
            let filepath = req.url?.split("/").slice(1)||[];
            let file =  filepath.pop();
            if (!file){
                //file = "index.html";
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(`
<!doctype html>
<html lang="en">
    <head>
    <meta charset="UTF-8" /> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <title>${"mgtoy"}</title> 
    <link rel="stylesheet" href="/assets/main.css">
    </head>
    <body>
    <script> 
    window.includeImport ={
    "@jscad/modeling":"./lib/modeling.esm.js",
    "csgChange":"./lib/csgChange.js",
    }
    window.myConfig={name:"${"mgtoy"}",index:"${"index.js"}",main:"${"main"}"}
    </script>

    <div id="app" ></div>   
<script type="module" src="/webview.js"> </script>

    </body>
</html>   
                    `);
                return;
            }

           
                
                readfile(filepath,file,res);
            
          
            
             
        });
       
        
  
        const wss = new WebSocket.Server({ server }); 
        wss.on('connection', (ws) => {
            
            console.log("wss open");
            //ws.send('Connected to VS Code WebSocket');
            const postMessage = (e:any)=>{ws.send(JSON.stringify(e));};
            const handMap = new Map();
            handMap.set('start',()=>{tmpDate = Date.now();});
            handMap.set('end',()=>{vscode.window.showInformationMessage("waited "+String((Date.now()-tmpDate)/1000)+" s");});  
            handMap.set('req',(e:{path:string})=>{ 
                console.log(e);
                const fn = async ()=>{
                    try{
                       const t = await vscode.workspace.fs.readFile(
                            vscode.Uri.joinPath(
                                workeruri,e.path )); 
                                postMessage({                         
                            init:{db:new TextDecoder().decode(t.buffer as ArrayBuffer),name:e.path } ,                                  
                        });
                            
                    }catch(err:any){
                        //console.log(err);
                        //vscode.window.showErrorMessage(err);
                         postMessage({                         
                            init:{name:e.path } ,                                  
                        });
                    }
                };
                fn();
                
            });
            
            handMap.set('loaded',()=>{
                tmpDate = Date.now();
                 postMessage({                    
                    open:true,
                    run:"worker"
                                    
                });
               
               
            });


            ws.on('message', (data:any) => {
                const message = JSON.parse(data);
                vscode.window.showInformationMessage(`Received: ${message}`);
                switch (message.type) {
                case 'log':
                    vscode.window.showInformationMessage( message.msg.join('\n') );
                    break;
                case 'error':
                    console.log(message);
                    vscode.window.showErrorMessage("err" ,{modal:true,detail:message.msg });
                    break;
                default:
                    if (!handMap.has(message.type)){
                        return;
                    }
                    handMap.get(message.type)!(message);
                }		
            });
        });
        
        server.listen(port, () => {
            vscode.window.showInformationMessage(`服务器已启动: http://localhost:${port}`);
            vscode.env.openExternal(vscode.Uri.parse(`http://localhost:${port}`));
        });

        server.on('error', (err) => {
            vscode.window.showErrorMessage(`服务器启动失败: ${err.message}`);
            server = null;
        });
    });

    // 停止服务器命令
    const stopServer = vscode.commands.registerCommand('mgtoy.stopServer', () => {
        if (server) {
            server.close();
            server = null;
            vscode.window.showInformationMessage('服务器已停止');
        }
    });

    context.subscriptions.push(startServer, stopServer);
   
    watcherServer(context);
    context.subscriptions.push(
        vscode.commands.registerCommand('mgtoy.create', () => {
            //console.log(args);
            vscode.window.showSaveDialog({}).then(uri=>{
                console.log(uri);

                if (!uri){return;}
                newWorkspacePackage(
                    uri,
                    context,
                    {name:path.basename(uri.fsPath),index:"index.js",main:"main",date:"",src:"src"},
                    ()=>{
                        vscode.workspace.fs.writeFile(
                            vscode.Uri.joinPath(uri,"src","index.js"),
                        new TextEncoder().encode(
                            "import modeling from '@jscad/modeling';\nexport const main=()=>{\n  return modeling.primitives.cube()\n}")
                        ).then(()=>{
                            vscode.commands.executeCommand('vscode.openFolder', uri); 
                        });
                    }
                );
            });
            /*
            vscode.window.showInputBox({title:"Create a new MGtoy package name",value:"mgtoyPackage"}).then(v=>{
                console.log(v);
                createWorkspacePackage({
                    NewWorkspace:vscode.
                })
            });
            */
            //vscode.window.showInformationMessage("create a new MGtoy package");

            //webViewManager.createOrShowWebView(  uri || vscode.window.activeTextEditor?.document.uri); 
        }),
        gzEditorProvider.register(context),
        STLEditorProvider.register(context)
    );     
}

export function deactivate() {}