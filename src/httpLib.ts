import { WebSocket, WebSocketServer } from 'ws';
import * as http from 'http'; 


export type SerConfig = {
    //clientwsMap:Set< WS.WebSocket >,
    //name:string,
   
    httpPort:number,
    //isConn:()=>boolean,
    Server?: http.Server
    wss?:WebSocketServer
    config?:{
        extensionUri:  string,
        indexHtml:string,
        name:string
    }
}
export const httpindexHtml = (config:{
    src?:string,
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
        window.myConfig={pageType:"${config.pageType}",src:"${config.src||""}",name:"${config.name||"solidJScad"}",in:"${config.in||"index.js"}",func:"${config.func||"main"}"}
        </script>
    
        <div id="app" ></div>   
    <script type="module" src="/webview.js"> </script>    
        </body>
    </html>   
`;
};

export const WSSend = (data:{
    type: number;
    msg: {
        db?: string | ArrayBuffer;
        name?: string;
        open?: boolean;
        len?:number;
    }},ws:WebSocket)=>{

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
export const startWebSocketServer = (
    serv:SerConfig,
    //handMap:Map<string,(e:any)=>void>,
    //clientwsMap:Set< WS.WebSocket >,
    setMsgHandleMap:(ws:WebSocket )=> Map<string, (e: any) => void>,
    //watchPath?:vscode.Uri ,  
    listenMessage:  (message:{type:string,msg:string},handMap:Map<string,any>)=>void
)=>{
    if (serv.wss){
        serv.wss.clients.forEach(s=>s.close());
        serv.wss?.close();
    }
    serv.wss = new WebSocketServer({ server:serv.Server }); 
    
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
        //serv.clientwsMap.add(ws);
        //console.log(serv.wss?.clients,serv.clientwsMap);
        ws.onerror=(e)=>{
            console.log(e);
            //serv.clientwsMap.delete(ws);
        };
        /*
        ws.onclose = ()=>{
            console.log("ws close",serv.wss?.clients.size);
            if (!serv.wss?.clients.size){
                serv.wss?.close();
                serv.wss = undefined;
            }
        };
 */
        ws.on('message', (data:string) => {
            //const message = JSON.parse(data);
            listenMessage(JSON.parse(data),handListenMap);
        });
    
    });
    //return wss;
};