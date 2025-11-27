import * as http from 'http'; 
import * as vscode from 'vscode'; 
import * as WS from 'ws';
import * as path from "path";
//import {listenMessage} from "./pawDrawEditor"; 
import type {postTypeStr} from './bundleServer';
import { getLocalIp } from './util';
import { WSSend} from './httpLib';
//const portBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right);
const HttpPoolClass = class {
    ServPool  = new Map<string,SerConfig>();
    //portBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right);
    set(serv:SerConfig) {
        this.ServPool.set(serv.config!.name,serv);
    };
    get(name:string){
        return this.ServPool.get(name);
    }
};
export const ServPool  = new HttpPoolClass(); 
//const TypeTag = new Map<postTypeStr,number>();
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
        console.log(filePaths);
        await vscode.workspace.fs.readFile(filePaths).then(db=>{
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(db);
        });
    }catch(e){
        //console.log(e);
        res.writeHead(404);
        res.end();
    }
};
const createHttpServer = (config:{extensionUri: vscode.Uri, indexHtml:string})=>{
    
    const libUri = vscode.Uri.joinPath(config.extensionUri,"myModule");
    const rooturi = vscode.Uri.joinPath(libUri,"webui");
    return http.createServer((req, res) => {
        console.log("begin http server",req.url);
        let filepath = req.url?.split("/").slice(1)||[];
        let file =  filepath.pop();
        if (!file){ 
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(config.indexHtml);
            return;
        }
        readfile(vscode.Uri.joinPath(filepath[0]==="lib"?libUri:rooturi,...filepath,file) ,res);      
    });

    //return server;
};
export const WSSendUpdate = (type:postTypeStr[],TypeTag: Map<postTypeStr,number>,msg:{ 
    db?: string | ArrayBuffer,
    name?: string,
    open?: boolean},ws:WS.WebSocket) => {

        let tag = 0;
        for (const t of type){          
            tag |= TypeTag.get(t)||0;                     
        }
        WSSend({type:tag,msg},ws);
};
 
export type SerConfig = {
    //clientwsMap:Set< WS.WebSocket >,
    //name:string,
    Bar?:vscode.StatusBarItem,
    httpPort:number,
    //isConn:()=>boolean,
    Server?: http.Server
    wss?:WS.Server
    config?:{
        extensionUri: vscode.Uri|string,
        indexHtml:string,
        name:string
    }
}
export const startWebSocketServer = (
    serv:SerConfig,
    //handMap:Map<string,(e:any)=>void>,
    //clientwsMap:Set< WS.WebSocket >,
    setMsgHandleMap:(ws:WS.WebSocket )=> Map<string, (e: any) => void>,
    //watchPath?:vscode.Uri ,  
    listenMessage:  (message:{type:string,msg:string},handMap:Map<string,any>)=>void
)=>{
    if (serv.wss){
        serv.wss.clients.forEach(s=>s.close());
        serv.wss?.close();
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
    config:{
        name:string,
        extensionUri: vscode.Uri,
    indexHtml:string},
    backServ:(ser:SerConfig)=>void,
    httpPort:number,
    errNumber = 10
    )=>{
    //const clientwsMap = new Set< WS.WebSocket >();
    //let httpPort = port ||0 ;
    
    if (httpPort){     
        let serv = ServPool.get(config.name) ;
        //let serv =getHttpServerFromPool(config);
        if (serv){
            serv.config = Object.assign(serv.config||{},config);
            backServ(serv);
            return;
        }
        serv = {
            config,
            Server: createHttpServer(config),
            Bar:vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right),
            //name,
            //clientwsMap:new Set< WS.WebSocket >(),
            httpPort,
        }; 
 
        
        //serv.Server= createHttpServer({pageType:"run",...config});
        //serv.Server= createHttpServer(serv.config);

        //let Number = 0;
        const runHttp = (p:number)=>{
            console.log("listen",p);
            serv.Server?.listen(p, () => {
                //console.log("listen ok",serv);
                if (serv.Bar){
                    serv.Bar.text = `http://${getLocalIp()}:${p.toString()}`;
                    serv.Bar.show();
                }
                
                //portBar.show();
                
                serv.httpPort = p;
                
                ServPool.set( serv);
                backServ(serv);
            //startHttpServer(serv.Server!,()=>{

                vscode.window.showInformationMessage( `${serv.config?.name} address:http://${getLocalIp()}:${serv.httpPort}`,"Browser view").then(v=>{
                    if (v==="Browser view"){
                        vscode.env.openExternal(vscode.Uri.parse(`http://localhost:${serv.httpPort}`));
                    }
                }); 
            }).on('error',(err)=>{
                console.log(err.message,p.toString());
                if (err.message.startsWith("listen EADDRINUSE:")){
                    
                    //errNumber--;
                    if (errNumber===(p-httpPort)){
                        return;
                    }
                    p++;
                    runHttp(p);
                }
            });
            //serv.Server?.err
        };
        runHttp(httpPort);
        return serv;
        
    }
    
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