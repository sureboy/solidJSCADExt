import{WebSocketServer as l}from"ws";var g=(e,t,r)=>{e.wss&&(e.wss.clients.forEach(n=>n.close()),e.wss?.close()),e.wss=new l({server:e.Server}),e.wss.on("connection",(n,s)=>{let i=t(n);n.onerror=o=>{console.log(o)},n.on("message",o=>{r(JSON.parse(o),i)})})};import*as p from"path";import*as c from"fs";import*as m from"http";var d=new Map,f=(e,t)=>{let r=p.extname(e),n={".html":"text/html",".js":"text/javascript",".css":"text/css",".json":"application/json",".png":"image/png",".jpg":"image/jpeg"}[r]||"text/plain";try{let s=c.readFileSync(e);t.writeHead(200,{"Content-Type":n}),t.end(s)}catch(s){console.log(s),t.writeHead(404)}},y=e=>`
    <!doctype html>
    <html lang="en">
        <head>
        <meta charset="UTF-8" /> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <title>${e.name||"solidJScad"}</title> 
        <link rel="stylesheet" href="/main.css">
        </head>
        <body>
        <script> 
        window.includeImport ={
        "@jscad/modeling":"./lib/modeling.esm.js",
        "csgChange":"./lib/csgChange.js",
        }
        window.myConfig={pageType:"${e.pageType}",name:"${e.name||"solidJScad"}",in:"${e.in||"index.js"}",func:"${e.func||"main"}"}
        </script>
    
        <div id="app" ></div>   
    <script type="module" src="/webview.js"> </script>    
        </body>
    </html>   
`,h=e=>m.createServer((t,r)=>{let n=t.url?.split("/").slice(1)||[];console.log("begin http server",t.url,n);let s=n.pop();if(!s){r.writeHead(200,{"Content-Type":"text/html"}),r.end(y({pageType:"run",...e}));return}f(p.join("assets",s),r)}),u=(e,t=10)=>{let r=c.readFileSync("solidjscad.json"),n=JSON.parse(r.toString()),s=h(n),i=o=>{s.listen(o,()=>{console.log("listen port:",o),e({Server:s,httpPort:o,config:{extensionUri:n.src,name:"",indexHtml:""}})}).on("error",a=>{if(console.log(a.message,o.toString()),a.message.startsWith("listen EADDRINUSE:")){if(t===o-n.port)return;o++,i(o)}})};i(n.port)},b=(e,t,r)=>{let n=new Map,s=Date.now();return n.set("req",i=>{if(!r){t({type:e.get("init")||0,msg:{name:i.path}});return}(async()=>{try{let a=c.readFileSync(p.join(r,i.path));t({type:e.get("init")||0,msg:{db:a.buffer,name:i.path}})}catch{t({type:e.get("init")||0,msg:{name:i.path}})}})()}),n.set("initError",i=>{console.error(i.msg)}),n.set("loaded",i=>{S(i.msg,e,o=>{t({msg:{open:!0},type:e.get(o)||0})})}),n.set("start",()=>{s=Date.now()}),n.set("end",()=>{console.log(`${String((Date.now()-s)/1e3)}s`)}),n},S=(e,t,r)=>{let n=JSON.parse(e);n.direction.forEach((s,i)=>{t.set(s,1<<i)}),r(n.pageType)},w=(e,t)=>{let r=JSON.stringify(e);if(!e.msg.db||typeof e.msg.db=="string"){t.send(r);return}console.log("wssend",e,r);let n=Buffer.from(r+`
`),s=Buffer.from(e.msg.db),i=n.length+s.length,o=Buffer.alloc(i);n.copy(o,0),s.copy(o,n.length),t.binaryType="arraybuffer",t.send(o.buffer)};u(e=>{g(e,t=>b(d,r=>{w(r,t)},e.config?.extensionUri),(t,r)=>{switch(t.type){case"log":console.log(t);break;case"error":console.error(t);break;default:if(!r.has(t.type))return;r.get(t.type)(t)}})});
