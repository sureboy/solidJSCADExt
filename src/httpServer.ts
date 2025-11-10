import * as http from 'http'; 
import * as vscode from 'vscode'; 
import * as WS from 'ws';
import * as path from "path";
import {listenMessage} from "./pawDrawEditor";
import {workerspaceMessageHandMap} from './bundleServer'; 
import type {postTypeStr} from './bundleServer';
import * as os from "os";
//let server: http.Server | null = null;
//export const getPort = 3000; // 默认端口
//export type httpServer = http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>
//let tmpDate = Date.now();

const getLocalIp = ()=> {
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
const TypeTag = new Map<postTypeStr,number>();
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
export const httpindexHtml = (config:{
    name:string,
    pageType:"run" | "gzData" | "stlData",
    in:string,
    func:string})=>{
return `
    <!doctype html>
    <html lang="en">
        <head>
        <meta charset="UTF-8" /> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <title>${config.name||"solidJScad"}</title> 
        <link rel="stylesheet" href="/assets/main.css">
        </head>
        <body>
        <script> 
        window.includeImport ={
        "@jscad/modeling":"./lib/modeling.esm.js",
        "csgChange":"./lib/csgChange.js",
        }
        window.myConfig={pageType:"${config.pageType}",name:"${config.name||"solidJScad"}",in:"${config.in||"index.js"}",func:"${config.func||"main"}"}
        </script>
    
        <div id="app" ></div>   
    <script type="module" src="/webview.js"> </script>    
        </body>
    </html>   
`;
};
const createHttpServer = (config:{extensionUri: vscode.Uri, indexHtml:string})=>{
    
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
            res.end(config.indexHtml);
            return;
        }        
                    
        readfile(vscode.Uri.joinPath(filepath[0]==="lib"?libUri:rooturi,...filepath,file) ,res);
                
              
                
                 
    });

    //return server;
};
export const WSSendUpdate = (type:postTypeStr[],msg:{ 
    db?: string | ArrayBuffer,
    name?: string,
    open?: boolean},ws:WS.WebSocket) => {

        let tag = 0;
        for (const t of type){          
            tag |= TypeTag.get(t)||0;                     
        }
        WSSend({type:tag,msg},ws);

};
 
export const WSSend = (data:{
    type: number;
    msg: {
        db?: string | ArrayBuffer;
        name?: string;
        open?: boolean;
        len?:number;
    }},ws:WS.WebSocket)=>{

    const jsonDB = JSON.stringify(data);
    if (!data.msg.db || typeof data.msg.db==="string"){
        ws.send(jsonDB);
        return;
    }
    console.log("wssend",data);
 
    const head = Buffer.from(jsonDB+"\n");
    const db = Buffer.from(data.msg.db);
    const totalLength = head.length + db.length;

    const newBuffer = Buffer.alloc(totalLength);
    head.copy(newBuffer, 0); 
    db.copy(newBuffer, head.length);
    ws.binaryType = "arraybuffer";
    ws.send(newBuffer.buffer);
};
export type SerConfig = {
    clientwsMap:Set< WS.WebSocket >,
    httpPort:number,
    //isConn:()=>boolean,
    Server?: http.Server
    wss?:WS.Server
}
export const startWebSocketServer = (
    serv:SerConfig,
    //handMap:Map<string,(e:any)=>void>,
    //clientwsMap:Set< WS.WebSocket >,
    setMsgHandleMap:(ws:WS.WebSocket )=> Map<string, (e: any) => void>,
    //watchPath?:vscode.Uri ,    
)=>{
    if (serv.wss){
        serv.wss.close();
    }
    serv.wss = new WS.Server({ server:serv.Server }); 
    serv.wss.on('connection', (ws,req) => {
        /*
        const handListenMap = workerspaceMessageHandMap(
            TypeTag,
            (e: {
                type: number;
                msg: {
                    db?: string | ArrayBuffer;
                    name?: string;
                    open?: boolean;
                }})=>{
                WSSend(e,ws);                
            },watchPath,
        );
        */
        //const wsConf = {handListenMap,ws};
        const handListenMap = setMsgHandleMap(ws );
        serv.clientwsMap.add(ws);
        
        ws.onclose = ()=>{
            serv.clientwsMap.delete(ws);
        };
        ws.on('message', (data:string) => {
            //const message = JSON.parse(data);
            listenMessage(JSON.parse(data),handListenMap);
        });
    
    });
    //return wss;
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

export const RunHttpServer = (
    config:{extensionUri: vscode.Uri,
    indexHtml:string},
    port:number,
    errNumber = 10
    ):SerConfig=>{
    const clientwsMap = new Set< WS.WebSocket >();
    let httpPort = port ||0 ;
    const serv:SerConfig = {
        clientwsMap,httpPort,
    };
    if (httpPort){       
        //serv.Server= createHttpServer({pageType:"run",...config});
        serv.Server= createHttpServer(config);

        //let Number = 0;
        const runHttp = ()=>{
            serv.Server!.listen(httpPort, () => {
            //startHttpServer(serv.Server!,()=>{

                vscode.window.showInformationMessage( `  address:http://${getLocalIp()}:${httpPort}`,"Browser view").then(v=>{
                    if (v==="Browser view"){
                        vscode.env.openExternal(vscode.Uri.parse(`http://localhost:${httpPort}`));
                    }
                }); 
            }).on('error',(err)=>{
                if (err.message.startsWith("listen EADDRINUSE:")){
                    httpPort++;
                    //errNumber--;
                    if (errNumber===(httpPort-port!)){
                        return;
                    }
                    runHttp();
                }
            });
        };
        runHttp();
        
    }
    return serv;
};
/*
export const HttpServer = (config:{
    pageType:"run" | "gzData" | "stlData",
    
    port?:number,name:string,in:string,func:string,
    //watchPath?:vscode.Uri,
    extensionUri: vscode.Uri
})=>(setMsgHandleMap:(ws:WS.WebSocket)=>Map<string, (e: any) => void>)=>{
    return RunHttpServer(config,setMsgHandleMap);
};*/