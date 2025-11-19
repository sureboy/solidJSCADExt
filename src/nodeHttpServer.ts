import {httpindexHtml,WSSendUpdate,WSSend,startWebSocketServer} from "./httpServer";
import * as path from "path";
import * as fs from "fs";
import * as http from 'http'; 
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
                // 解析请求路径
        console.log("begin http server",req.url);
        
        let filepath = req.url?.split("/").slice(1)||[];
        let file =  filepath.pop();
        if (!file){
            //file = "index.html";
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(httpindexHtml({pageType:"run",...conf}));
            return;
        }        
                    
        readfile(path.join("assets",file),res);     
              
                
                 
    });

    //return server;
};
const RunHttpServer = (  backServ:(ser:http.Server)=>void,  
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
    
            backServ(serv);
    
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

RunHttpServer((ser)=>{

});