import {startWebSocketServer} from "./httpLib";
import { WebSocket } from 'ws';
import * as path from "path";
import * as fs from "fs";
import * as http from 'http';  
import type {SerConfig} from "./httpLib";
import type {postTypeStr} from "./bundleServer";
 
const TypeTag = new Map<postTypeStr,number>();
const readfile = ( filePaths:string,res:http.ServerResponse<http.IncomingMessage> & {
    req: http.IncomingMessage;
})=>{
    const ext = path.extname(filePaths);
    const contentType = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg'
    }[ext] || 'text/plain';
    try{
        const db = fs.readFileSync(filePaths); 
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(db); 
    }catch(e){
        console.log(e);
        res.writeHead(404);
    }
};
const httpindexHtml = (config:{
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
        <link rel="stylesheet" href="/main.css">
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
const createHttpServer = (conf:{
    src:string,
    name: string,
    func: string,
    in: string,
    port:number,
    //webview:boolean,
    })=>{
 
   
    //const libUri = vscode.Uri.joinPath(config.extensionUri,"myModule");
    //const rooturi = vscode.Uri.joinPath(libUri,"webui");
    return http.createServer((req, res) => {
        let filepath = req.url?.split("/").slice(1)||[];
        console.log("begin http server",req.url,filepath);
        let file =  filepath.pop();
        if (!file){
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(httpindexHtml({pageType:"run",...conf}));
            return;
        }      
        readfile(path.join("assets",file),res);
    });
};
const RunHttpServer = (  backServ:(ser:SerConfig)=>void,  
    errNumber = 10)=>{
    const db = fs.readFileSync("solidjscad.json");
    const conf:{
        src:string,
        name: string,
        func: string,
        in: string,
        port:number,
        //webview:boolean,
        } = JSON.parse(db.toString());
    const serv = createHttpServer(conf);
    const runHttp = (p:number)=>{ 
        serv.listen(p, () => {
            console.log("listen port:",p);
            backServ({Server:serv,httpPort:p,config:{extensionUri:conf.src,name:"",indexHtml:""}});
        }).on('error',(err)=>{
            console.log(err.message,p.toString());
            if (err.message.startsWith("listen EADDRINUSE:")){
                
                //errNumber--;
                if (errNumber===(p-conf.port)){
                    return;
                }
                p++;
                runHttp(p);
            }
        });
        //serv.Server?.err
    };
    runHttp(conf.port);
};

const workerspaceMessageHandMap = (
    
    //setTmpDate:(d:number)=>void,
    postTypeTag:Map<postTypeStr,number>,postMessage:(db:{
    type:number,
    msg:{db?:string|ArrayBuffer,name?:string,open?:boolean}})=>void,
    workerspacePath?:string,
    //serv?:SerConfig,
)=>{
    const handListenMsg = new Map<string,(e:any)=>void>();
    let tmpDate = Date.now();
    handListenMsg.set('req',(e:{path:string})=>{ 
        //console.log(e);
        if (!workerspacePath){
            postMessage({type:postTypeTag.get("init")||0,msg:{ name:e.path }});
            return;
        }
        const fn = async ()=>{
            try{
               const t =  fs.readFileSync(
                    path.join(
                        workerspacePath,e.path
                    )); 
                postMessage({type:postTypeTag.get("init")|| 0,msg:{db:t.buffer as ArrayBuffer,name:e.path }});                    
            }catch(err:any){
                postMessage({type:postTypeTag.get("init")||0,msg:{ name:e.path }});
            }
        };
        fn();        
    }); 
    handListenMsg.set('initError',(message:{msg:string})=>{
        console.error(message.msg);
        //vscode.window.showErrorMessage(message.msg);
    });
    handListenMsg.set('loaded',(e:any)=>{
        //tmpDate = Date.now();
        //console.log(e);
        initLoad(e.msg,postTypeTag,t=>{
            postMessage({                    
                msg:{open:true},
                type:postTypeTag.get(t)||0             
            });
        });    
    });    
    handListenMsg.set('start',()=>{tmpDate = Date.now();});
    handListenMsg.set('end',()=>{
        console.log(`${String((Date.now()-tmpDate)/1000)}s`);
        //vscode.window.showInformationMessage(`${String((Date.now()-tmpDate)/1000)}s`);
        /*
        if (serv && serv.Server && serv.clientwsMap.size===0){
 
            const port  = serv.httpPort;
            vscode.window.showInformationMessage( `Remote address: http://${getLocalIp()}:${port}`,"Browser view").then(v=>{
                if (v==="Browser view"){
                    vscode.env.openExternal(vscode.Uri.parse(`http://localhost:${port}`));
                }
            });
        }   */     
    });


    return handListenMsg;
};
const initLoad = (db:string,postTypeTag:Map<postTypeStr,number>,hand:(pageType:'run'|'gzData'|'stlData')=>void)=>{
    const msg:{direction:postTypeStr[],pageType:'run'|'gzData'|'stlData'}  = JSON.parse(db);
    msg.direction.forEach((v,i)=>{
        postTypeTag.set(v,1<<i);
    });
    hand(msg.pageType);
};
const WSSend = (data:{
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
    console.log("wssend",data,jsonDB);
 
    const head = Buffer.from(jsonDB+"\n");
    const db = Buffer.from(data.msg.db);
    const totalLength = head.length + db.length;

    const newBuffer = Buffer.alloc(totalLength);
    head.copy(newBuffer, 0); 
    db.copy(newBuffer, head.length);
    ws.binaryType = "arraybuffer";
    ws.send(newBuffer.buffer);
};
RunHttpServer((ser)=>{
    startWebSocketServer(ser,(ws)=> {
        return workerspaceMessageHandMap(TypeTag,
            (e: {
                type: number;
                msg: {
                    db?: string | ArrayBuffer;
                    name?: string;
                    open?: boolean;
                }})=>{
                WSSend(e,ws);                
            },ser.config?.extensionUri as string,
        );
    },(message:{type:string,msg:string},handMap:Map<string,any>)=>{
        switch (message.type) {
        case 'log':
            console.log(message); 
            break;
        case 'error':
            console.error(message);
            break;
    
        default:
            if (!handMap.has(message.type)){
                return;
            }
            handMap.get(message.type)!(message);
        }	
    });
});
