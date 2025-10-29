import * as http from 'http'; 
import * as vscode from 'vscode';
import { Context } from 'mocha';
import * as WebSocket from 'ws';
import * as path from "path";
import {listenMessage} from "./pawDrawEditor";
import {workerspaceMessageHandMap} from './bundleServer';
import { buffer } from 'stream/consumers';
let server: http.Server | null = null;
const port = 3000; // 默认端口
let tmpDate = Date.now();
const readfile = async( filePaths:vscode.Uri,res:any)=>{
    const ext = path.extname(filePaths.fsPath);
    const contentType = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg'
    }[ext] || 'text/plain';
    try{
        await   vscode.workspace.fs.readFile(filePaths).then(db=>{
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(db);
        });
    }catch(e){
        console.log(e);
        res.writeHead(404);
    }
};
const createHttpServer = (context:vscode.ExtensionContext)=>{
    
    const libUri = vscode.Uri.joinPath(context.extensionUri,"myModule");
    const rooturi = vscode.Uri.joinPath(libUri,"webui");
    return http.createServer((req, res) => {
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
    
               
                    
        readfile(vscode.Uri.joinPath(filepath[0]==="lib"?libUri:rooturi,...filepath,file) ,res);
                
              
                
                 
    });
};
export const startHttpServer = (context:vscode.ExtensionContext,workspace:vscode.Uri)=>{
    
    if (server) {
        vscode.window.showInformationMessage('服务器已在运行');
        return;
    } 
    server = createHttpServer(context);
    const wss = new WebSocket.Server({ server }); 
    wss.on('connection', (ws) => {
        console.log("wss open"); 
        ws.on('message', (data:string) => {
            //const message = JSON.parse(data);
            listenMessage(JSON.parse(data),workerspaceMessageHandMap(
                vscode.Uri.joinPath(workspace,"src"),
                tmpDate,
                (e:any)=>{
                    if (e.init){
                        const init = e.init as {name:string,db:ArrayBuffer};
                        const name = Buffer.from(`${init.name}\n`);
                        const db = Buffer.from(init.db);
                        const totalLength = name.length + db.length;
                        const newBuffer = Buffer.alloc(totalLength);
                        name.copy(newBuffer, 0); 
                        db.copy(newBuffer, name.length);
                        ws.binaryType = "arraybuffer";
                        ws.send(newBuffer.buffer);

                    }else{
                      
                        ws.send(JSON.stringify(e));
                    }
                    

                    
                }));
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

}; 
export const stopHttpServer = ()=>{
    if (server) {
        server.close();
        server = null;
        vscode.window.showInformationMessage('服务器已停止');
    }
};