import * as http from 'http'; 
import * as vscode from 'vscode'; 
import * as WS from 'ws';
import * as path from "path";
import {listenMessage} from "./pawDrawEditor";
import {workerspaceMessageHandMap} from './bundleServer'; 
import * as os from "os";
//let server: http.Server | null = null;
//export const getPort = 3000; // 默认端口
export type httpServer = http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>
//let tmpDate = Date.now();
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
const TypeTag = new Map<string,number>();
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
export const createHttpServer = ( config:{name:string,index:string,main:string,watchPath:vscode.Uri,extensionUri: vscode.Uri})=>{
    
    const libUri = vscode.Uri.joinPath(config.extensionUri,"myModule");
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

    //return server;
};
export const WSSendUpdate = (type:string[],msg:{ 
    db?: string | ArrayBuffer,
    name?: string,
    open?: boolean},ws:WS.WebSocket) => {

        let tag = 0;
        for (const t of type){          
            tag |= TypeTag.get(t)||0;                     
        }
        WSSend({type:tag,msg},ws);

};
const WSSend = (data:{
    type: number;
    msg: {
        db?: string | ArrayBuffer;
        name?: string;
        open?: boolean;
    }},ws:WS.WebSocket)=>{

    const jsonDB = JSON.stringify(data);
    if (!data.msg.db || typeof data.msg.db==="string"){
        ws.send(jsonDB);
        return;
    }
 
    const head = Buffer.from(jsonDB+"\n");
    const db = Buffer.from(data.msg.db);
    const totalLength = head.length + db.length;

    const newBuffer = Buffer.alloc(totalLength);
    head.copy(newBuffer, 0); 
    db.copy(newBuffer, head.length);
    ws.binaryType = "arraybuffer";
    ws.send(newBuffer.buffer);
};
export const startWebSocketServer = (
    server:http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>,
    watchPath:vscode.Uri )=>{
    const wss = new WS.Server({ server }); 
    
    wss.on('connection', (ws,req) => {
        //console.log("wss open",ws,req); 
        const handMap = workerspaceMessageHandMap(
            watchPath,
            //tmpDate,
            TypeTag,
            (e: {
                type: number;
                msg: {
                    db?: string | ArrayBuffer;
                    name?: string;
                    open?: boolean;
                }})=>{
                WSSend(e,ws);
                
            });
        clientwsMap.add(ws);
        ws.onclose = ()=>{
            clientwsMap.delete(ws);
        };
        ws.on('message', (data:string) => {
            //const message = JSON.parse(data);
            listenMessage(JSON.parse(data),handMap);
        });
    
    });
    return wss;
};
export const startHttpServer = ( 
    server:http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>, 
    Handle:()=>void,errHandle:(err:Error)=>void,port=3000)=>{
    server.listen(port, () => {
        //vscode.window.createTerminal().sendText("http://localhost:${port}",true);
        
        vscode.window.showInformationMessage( `Remote browsing address:http://${getLocalIp()}:${port}`,"Browser view").then(v=>{
            if (v==="Browser view"){
                vscode.env.openExternal(vscode.Uri.parse(`http://${getLocalIp()}:${port}`));
            }
        }); 

        Handle();
        
    }).on('error',(err)=>{
        console.log(err);
        //server.close();
        errHandle(err);
    } );
    //server.listening
    //console.log(server.address());
    //return server;
}; 
/*
export const stopHttpServer = ()=>{
    if (server) {
        server.close();
        server = null;
        vscode.window.showInformationMessage('服务器已停止');
    }
};
*/