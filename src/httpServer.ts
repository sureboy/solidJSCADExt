import * as http from 'http'; 
import * as vscode from 'vscode'; 
import * as WS from 'ws';
import * as path from "path";
import {listenMessage} from "./pawDrawEditor";
import {workerspaceMessageHandMap} from './bundleServer'; 
import * as os from "os";
let server: http.Server | null = null;
export const port = 3000; // 默认端口
let tmpDate = Date.now();
export const clientwsMap = new Set<WS.WebSocket>();
export const getLocalIp = ()=> {
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        if (!interfaces[name]){
            continue;
        }
      for (const netInterface  of interfaces[name]) {
        // 跳过内部地址和非IPv4地址
        if (netInterface.internal || netInterface.family !== 'IPv4') {
          continue;
        }
        // 返回第一个找到的非内部IPv4地址
        return netInterface.address;
      }
    }
    return 'localhost'; // 默认回退地址
};
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
const createHttpServer = (context:vscode.ExtensionContext, config:{name:string,index:string,main:string,watchPath:vscode.Uri,extensionUri: vscode.Uri})=>{
    
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
        
        <title>${config.name||"mgtoy"}</title> 
        <link rel="stylesheet" href="/assets/main.css">
        </head>
        <body>
        <script> 
        window.includeImport ={
        "@jscad/modeling":"./lib/modeling.esm.js",
        "csgChange":"./lib/csgChange.js",
        }
        window.myConfig={name:"${config.name||"mgtoy"}",index:"${config.index||"index.js"}",main:"${config.main||"main"}"}
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
export const WSSendInit = (init:{name:string,db?:string|ArrayBuffer},ws:WS.WebSocket)=>{
    if (!init.db || typeof init.db ==="string"){
        ws.send(JSON.stringify(init));
        return;
    }
    const head = Buffer.from(JSON.stringify(init)+"\n");
    const db = Buffer.from(init.db);
    const totalLength = head.length + db.length;
    const newBuffer = Buffer.alloc(totalLength);
    head.copy(newBuffer, 0); 
    db.copy(newBuffer, head.length);
    ws.binaryType = "arraybuffer";
    ws.send(newBuffer.buffer);
};
export const startHttpServer = (context:vscode.ExtensionContext, config:{name:string,index:string,main:string,watchPath:vscode.Uri,extensionUri: vscode.Uri})=>{
    
    if (server) {
        vscode.window.showInformationMessage('服务器已在运行');
        return server;
    } 
    server = createHttpServer(context,config);
    const wss = new WS.Server({ server }); 
    wss.on('connection', (ws,req) => {
        console.log("wss open",ws,req); 
        clientwsMap.add(ws);
        ws.onclose = ()=>{
            clientwsMap.delete(ws);
        };
        ws.on('message', (data:string) => {
            //const message = JSON.parse(data);
            listenMessage(JSON.parse(data),workerspaceMessageHandMap(
                config.watchPath,
                tmpDate,
                (e:any)=>{
                    if (e.init){
                        WSSendInit(e.init,ws);
                    } else{
                        ws.send(JSON.stringify(e));
                    }
                    

                    
                }));
        });
 
    });
    server.listen(port, () => {
        //vscode.window.createTerminal().sendText("http://localhost:${port}",true);
        
        vscode.window.showInformationMessage( `Remote browsing address:http://${getLocalIp()}:${port}`,"Browser view").then(v=>{
            if (v==="Browser view"){
                vscode.env.openExternal(vscode.Uri.parse(`http://${getLocalIp()}:${port}`));
            }
        }); 
        
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