import * as http from 'http'; 
import * as path from 'path'; 
import * as fs from "fs";
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
        <link rel="stylesheet" href="/dist/assets/main.css">
        <script type="importmap">
        {
            "imports": {
                "@jscad/modeling":"./lib/modeling.esm.js",
                "uuid": "https://esm.sh/uuid@9.0.0"
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
        window.myConfig={pageType:"${config.pageType}",name:"${config.name||"solidJScad"}",in:"${config.in||"index.js"}",func:"${config.func||"main"}"}
        </script>
    
        <div id="app" ></div>   
    <script type="module" src="/dist/main.js"> </script>    
        </body>
    </html>   
`;
};
const readfile = ( filePaths:string,res:http.ServerResponse<http.IncomingMessage> & {
    req: http.IncomingMessage;
})=>{
    console.log(filePaths);
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
        res.end();
    }
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
        let filepath =path.join( ...req.url?.split("/")||[]) ;
        //console.log("begin http server", filepath);
        //let file =  filepath.pop();
        if (!filepath || filepath.length===1){
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(httpindexHtml({pageType:"run",...conf}));
            return;
        }      
        readfile(filepath,res);
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