import * as http from 'http'; 
import * as path from 'path'; 
import * as fs from "fs";
import type {postTypeStr} from './util'; 
//import {workerspaceMessageHandMap} from "../src/bundleServer.js";
//type postTypeStr = 'begin'|'init'|'del'|'run'|'getSrc'|'gzData'|'stlData'
const TypeTag = new Map<postTypeStr,number>();
type HttpConfigType = {
    //src:string, 
    rootPath:string,
    srcPath:string,
    includeImport:{ [key: string]: string }
} 
type SerConfig = {
    //clientwsMap:Set< WS.WebSocket >,
    PostMessageSet:Set<(msg:any)=>any>,
    //name:string,
    httpPort:number,
    //isConn:()=>boolean,
    Server?: http.Server
    conf:HttpConfigType&{       
        port:number 
    }
    //wss?:WebSocketServer
    /*
    config?:{
        extensionUri:string,
        indexHtml:string,
        name:string
    }*/
}
export const HandlePostMessage = (
    m:{
        type?: number | undefined;
        msg: {
            db?: ArrayBuffer | string;
            name: string;
        };
    },
    PostMessageSet?:Set<(msg:any)=>any>)=>{   
    if (!PostMessageSet){
        return;
    }
    
    if (m.msg.db){
        if (typeof m.msg.db !=="string"){
            m.msg.db =Buffer.from(new Uint8Array(m.msg.db)).toString("base64");
        }  
    }
    const msg ="data:"+JSON.stringify(m)+"\n\n";
    PostMessageSet.forEach(f=>{
        f(msg);
    });          
};
export const defaultSerConfig:{ser?:SerConfig|undefined} = {};
const contentType:{ [key: string]: string } = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg'
};

const httpindexHtml = ()=>{
return `
<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8" /> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>  solidJScad </title> 
        <link rel="stylesheet" href="/assets/main.css"> 
    </head>
    <body>    
    <script  >
 
 </script>    
    <div id="app" ></div>   
<script type="module" src="/main.js"> </script>    
    </body>
</html>`;
};
const readJS = (
    filePaths:string,
    contentType:string,
    res:http.ServerResponse<http.IncomingMessage> & {
    req: http.IncomingMessage;},
     
        //src:string,
        includeImport:{ [key: string]: string }
)=>{
    try{
        let db = fs.readFileSync(filePaths,{encoding:'utf8'});
        res.writeHead(200, { 'Content-Type': contentType || 'text/plain' }); 
        Object.keys(includeImport).forEach(k=>{ 
            console.log( res.req.headers);
            const p =   includeImport[k]; 
            db = db.replace(k,p);
        }); 
        res.end(db); 
    }catch(e){
        console.error(e);
        res.writeHead(404);
        res.end();
    }
};
const readBinaryFile = (filePaths:string,contentType:string,res:http.ServerResponse<http.IncomingMessage> & {
    req: http.IncomingMessage;
} ) =>{
    try{
        //binary
        const db = fs.readFileSync(filePaths,{encoding:'binary'});
        res.writeHead(200, { 'Content-Type': contentType || 'text/plain' });
        res.end(db); 
    }catch(e){
        //if (conf){
        //    const pathList = res.req.url?.split("/")||[];
        //    readcodefile(path.join(conf.srcPath||"",...pathList), res,conf.includeImport);
        //    return;
        //}
        console.error(e);
        res.writeHead(404);
        res.end();
    }
};

const readcodefile = ( 
    filePaths:string,
    res:http.ServerResponse<http.IncomingMessage> & {
    req: http.IncomingMessage;
}, 
    //src:string,
    includeImport:{ [key: string]: string }
)=>{
    console.log("readfile",filePaths);
    
    const ext = path.extname(filePaths);
    switch (ext) {
        case ".js":
            readJS(filePaths,'text/javascript',res,includeImport);
            break;
        default:
            readBinaryFile(filePaths,contentType[ext]|| 'text/plain',res);
            break;
    }
    
};
const initLoad = (
    msg:{direction:postTypeStr[],pageType:'run'|'gzData'|'stlData'},postTypeTag:Map<postTypeStr,number>,hand:(pageType:'run'|'gzData'|'stlData')=>void)=>{
    //const msg:{direction:postTypeStr[],pageType:'run'|'gzData'|'stlData'}  = JSON.parse(db);
    msg.direction.forEach((v,i)=>{
        postTypeTag.set(v,1<<i);
    });
    hand(msg.pageType);
};
const workerspaceMessageHandMap = (
    //setTmpDate:(d:number)=>void,
    postTypeTag:Map<postTypeStr,number>,
    //srcPath:string,
    conf:{
        postMessage?:(db:{
    type:number,
    msg:{db?:any,name?:string,open?:boolean,config?:{}}})=>void,
    }&HttpConfigType
    //serv?:SerConfig,
)=>{
    const handListenMsg = new Map<string,(e:any)=>void>();
    handListenMsg.set('loaded',(e:any)=>{
        initLoad(e.msg,postTypeTag,t=>{
            if (conf.postMessage){
                conf.postMessage({                    
                    msg:{open:true,config: conf},
                    type:(postTypeTag.get("run")||0)  | (postTypeTag.get("begin")||0)           
                });
            }
            
        });    
    });   
    handListenMsg.set('req',(e:{path:string})=>{  
        let  filePath = conf.srcPath;
        if (e.path.endsWith(".js")){
            filePath = path.join(filePath ,...e.path.split("/"));  
        }else  if (conf.includeImport && conf.includeImport[e.path]){
            filePath = path.join(filePath,...conf.includeImport[e.path].split("/"));  
        }else{
            if (conf.postMessage){  
                conf.postMessage({type:postTypeTag.get("init")||0,msg:{ name: e.path  }});
            }
            return;
        }
        fs.readFile(filePath,{encoding:'utf8'},(err,db)=>{
            //console.log(filePath,err);
            if (conf.postMessage){ 
                conf.postMessage({
                    type:postTypeTag.get("init")||0,
                    msg:{ name:e.path,db:err?undefined:db }});                   
            }
        }); 
    });
    return handListenMsg;
};
const sse = (res: http.ServerResponse<http.IncomingMessage> & {
    req: http.IncomingMessage;
},PostMessageSet?:Set<(e:any)=>any>)=>{
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      //'Access-Control-Allow-Origin': '*'  // if needed
    }); 
    const post = (e:any)=>{
        if (res  && res.writable ){
            res.write(e,(err)=>{
                if (err){
                    console.error(err);
                }
            });
            //console.log("post ok");
            return true;
        } 
        return false;       
    };
    //setTimeout(()=>{
    //    console.log("open");
        post("data:"+JSON.stringify({type:0})+"\n\n");
    //    console.log("end");
        //post({});
    //});
    //res.write(`event: open\n\n`);
    PostMessageSet?.add(post);
    //console.log("sse start"); 
    res.req.on('close', () => {
      //clearInterval(intervalId);
      //console.log("sse end");
      PostMessageSet?.delete(post);
      res.end();
    });
};
const createHttpServer = (conf:{       
        port:number ,
        //postMessage:(e:any)=>any,
        handmsg: Map<string, (e: any) => void>
    }&HttpConfigType )=>{  
    //const resW=new Set();
 
    //const handmsg = workerspaceMessageHandMap(TypeTag,conf);
    //Object.assign(conf,{postMessage:(e:any)=>{
    //    HandlePostMessage(e,defaultSerConfig.ser?.PostMessageSet);
    //}});
    return http.createServer((req, res) => {
        res.setHeader("Access-Control-Allow-Origin","*");
        const pathList = req.url?.split("/")||[];
        const filepath =path.join( ...pathList) ;
      
        //Object.assign(conf,{postMessage:(e:any)=>{
        //    res.writeHead(200, { 'Content-Type': 'application/json' }); 
        //    res.end(JSON.stringify(e));
        //}});       
        switch(pathList[1]){
            case 'events':
                sse(res,defaultSerConfig.ser?.PostMessageSet);
            case "": 
                res.writeHead(200, { 'Content-Type': 'text/html' });
                let indexHtml = "";
                //console.log("index path",conf.rootPath);
                try{
                    indexHtml = fs.readFileSync(path.join(conf.rootPath,"index.html"),{encoding:'utf8'}) ;
                }catch(e){
                    indexHtml = httpindexHtml();
                }
                res.end(indexHtml);
                break;
            //case conf.src:
                //console.log(pathList);
            //    readcodefile(path.join(conf.srcPath||"" ,"../",...pathList), res,conf.includeImport);
            //    break;
            case "api":                         
                //console.log(filepath,req.method);
                if (req.method ==="POST"){
                    let body = "";
                    req.addListener("data",(db)=>{
                        //db
                        body += db.toString();
                        //console.log(db);
                    });                    
                    req.addListener("end",()=>{
                        //console.log(body);
                        try{
                            const data:{type:string,msg:any} = JSON.parse(body);
                            const handMsg = conf.handmsg.get(data.type);
                            if (handMsg){
                                handMsg(data);
                                res.writeHead(200, { 'Content-Type': 'application/json' }); 
                                res.end("{}");
                            }else{
                                res.end(JSON.stringify({}));
                            }
                            //console.log(data);
                        }catch(e){
                            console.error(e);
                        }
                    });
                }else{
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end('{}');
                }
                //handmsg.get(req.d)
                break;
            default:
                //const p = path.join(conf.rootPath,filepath);
                const ext = path.extname(filepath);
                readBinaryFile(path.join(conf.rootPath,filepath),contentType[ext]|| 'text/plain',res);
                break;
        }
        return;
      
    });
};

export const RunHttpServer = (
    conf:{       
        port:number ,
        //postMessage:(e:any)=>any,
        handmsg: Map<string, (e: any) => void>
    }&HttpConfigType, backServ:(ser:SerConfig)=>void,errNumber = 10  )=>{
    /*
    if (!conf){
        const db = fs.readFileSync("solidjscad.json");
        conf =  JSON.parse(db.toString());
    }    
    */
    //if ()
    console.log(conf);
    if (defaultSerConfig.ser && defaultSerConfig.ser.Server){
        Object.assign(defaultSerConfig.ser.conf,conf);
        backServ(defaultSerConfig.ser);
        return;
    }
    const serv = createHttpServer(conf);
    const runHttp = (p:number)=>{ 
        serv.listen(p, () => {
            console.log("listen port:",p);
            defaultSerConfig.ser = {
                Server:serv,httpPort:p,
                PostMessageSet:new Set(), 
                conf
            };
            backServ(defaultSerConfig.ser);
        }).on('error',(err)=>{
            console.log(err.message,p.toString());
            if (err.message.startsWith("listen EADDRINUSE:")){ 
                if (errNumber===(p-conf.port)){
                    return;
                }
                p++;
                runHttp(p);
            }
        }); 
    };
    runHttp(conf.port);
};

 