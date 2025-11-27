import * as http from 'http'; 
import * as path from 'path'; 
import * as fs from "fs";

//import {workerspaceMessageHandMap} from "../src/bundleServer.js";
type postTypeStr = 'init'|'del'|'run'|'getSrc'|'gzData'|'stlData'
const TypeTag = new Map<postTypeStr,number>();
type SerConfig = {
    //clientwsMap:Set< WS.WebSocket >,
    //name:string,
   
    httpPort:number,
    //isConn:()=>boolean,
    Server?: http.Server
    //wss?:WebSocketServer
    config?:{
        extensionUri:  string,
        indexHtml:string,
        name:string
    }
}
const contentType:{ [key: string]: string } = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg'
};
const importmap:{ [key: string]: string } = {
    "@jscad/modeling":"./lib/modeling.esm.js"
};
const httpindexHtml = (config:{
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
        <link rel="stylesheet" href="/dist/assets/main.css"> 
        <script type="importmap">
        {
            "imports": {
                "@jscad/modeling":"http://localhost:3000/lib/modeling.esm.js"
            }
        }
        </script>
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
    <script type="module" src="/dist/main.js"> </script>    
        </body>
    </html>   
`;
};
const readJS = (filePaths:string,contentType:string,res:http.ServerResponse<http.IncomingMessage> & {
    req: http.IncomingMessage;
})=>{
    try{
        let db = fs.readFileSync(filePaths,{encoding:'utf8'});
        res.writeHead(200, { 'Content-Type': contentType || 'text/plain' });
        //console.log(db);
        Object.keys(importmap).forEach(k=>{
            //console.log(k,importmap[k]);
            db = db.replace(k,importmap[k]);
        });
        //db.replace("","");
        //console.log(db);
        res.end(db); 
    }catch(e){
        console.error(e);
        res.writeHead(404);
        res.end();
    }
};
const readBinaryFile = (filePaths:string,contentType:string,res:http.ServerResponse<http.IncomingMessage> & {
    req: http.IncomingMessage;
}) =>{
    try{
        //binary
        const db = fs.readFileSync(filePaths,{encoding:'binary'});
        res.writeHead(200, { 'Content-Type': contentType || 'text/plain' });
        res.end(db); 
    }catch(e){
        console.error(e);
        res.writeHead(404);
        res.end();
    }
};

const readfile = ( filePaths:string,res:http.ServerResponse<http.IncomingMessage> & {
    req: http.IncomingMessage;
})=>{
    //console.log(filePaths);
    const ext = path.extname(filePaths);
    switch (ext) {
        case ".js":
            readJS(filePaths,'text/javascript',res);
            break;
        default:
            readBinaryFile(filePaths,contentType[ext]|| 'text/plain',res);
            break;
    }
    
};
const initLoad = (
    db:string,postTypeTag:Map<postTypeStr,number>,hand:(pageType:'run'|'gzData'|'stlData')=>void)=>{
    const msg:{direction:postTypeStr[],pageType:'run'|'gzData'|'stlData'}  = JSON.parse(db);
    msg.direction.forEach((v,i)=>{
        postTypeTag.set(v,1<<i);
    });
    hand(msg.pageType);
};
const workerspaceMessageHandMap = (
    
    //setTmpDate:(d:number)=>void,
    postTypeTag:Map<postTypeStr,number>,postMessage:(db:{
    type:number,
    msg:{db?:string|ArrayBuffer,name?:string,open?:boolean}})=>void,
    workerspacePath:string,
    //serv?:SerConfig,
)=>{
    const handListenMsg = new Map<string,(e:any)=>void>();
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
    handListenMsg.set('req',(e:{path:string})=>{ 
        
        //postMessage({type:postTypeTag.get("init")||0,msg:{ name: e.path  }});
        //return;
        let  filePath = path.join(...e.path.split("/"));  
        fs.stat(filePath,(err,s)=>{
            if (!err){
                postMessage({type:postTypeTag.get("init")||0,msg:{ name: e.path  }});
                return;
            }      
            filePath = path.join(workerspacePath,filePath);        
            fs.readFile(filePath,{encoding:'utf8'},(err,db)=>{
                console.log(err);
                if (!err){
                    postMessage({type:postTypeTag.get("init")||0,msg:{ name:e.path,db }});
                }else{
                    postMessage({type:postTypeTag.get("init")||0,msg:{ name:e.path  }});
                }            
            });
        });

        //const db = fs.readFileSync(e.path);
        //db.
        
        //console.log(e);
        /*
        if (!workerspacePath){
            postMessage({type:postTypeTag.get("init")||0,msg:{ name:e.path }});
            return;
        }
        const fn = async ()=>{
            try{
                const t = await vscode.workspace.fs.readFile(
                    vscode.Uri.joinPath(
                        workerspacePath,e.path
                    )); 
                postMessage({type:postTypeTag.get("init")|| 0,msg:{db:t.buffer as ArrayBuffer,name:e.path }});                    
            }catch(err:any){
                postMessage({type:postTypeTag.get("init")||0,msg:{ name:e.path }});
            }
        };
        fn();
        */        
    });
    return handListenMsg;
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
        const pathList = req.url?.split("/")||[];
        const filepath =path.join( ...pathList) ;
        const handmsg = workerspaceMessageHandMap(TypeTag,(e)=>{
            res.writeHead(200, { 'Content-Type': 'application/json' });
            console.log(e);
            res.end(JSON.stringify(e));
        },conf.src);
        switch(pathList[1]){
            case "": 
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(httpindexHtml({pageType:"run",...conf}));
                break;
            case conf.src:
                readfile(filepath, res);
                break;
            case "api":      
                      
                console.log(filepath,req.method);
                if (req.method ==="POST"){
                    let body = "";
                    req.addListener("data",(db)=>{
                        //db
                        body+= db.toString();
                        //console.log(db);
                    });                    
                    req.addListener("end",()=>{
                        console.log(body);
                        try{
                            const data:{type:string,msg:any} = JSON.parse(body);
                            const handMsg = handmsg.get(data.type);
                            if (handMsg){
                                handMsg(data);
                            }else{
                                res.end(JSON.stringify({}));
                            }
                            console.log(data);
                        }catch(e){
                            console.error(e);
                        }
                    });
                }else{
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({}));
                }
                
                //handmsg.get(req.d)
                break;
            default:
                const ext = path.extname(filepath);
                readBinaryFile(filepath,contentType[ext]|| 'text/plain',res);
                break;
        }
        return;
      
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

RunHttpServer((ser)=>{
    
});