import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import { setHtmlForWebview,newWorkspacePackage} from './pawDrawEditor';
import { RunHttpServer,defaultSerConfig } from './nodeServer'; 
import {downSrcHandMap} from './gzEditorProvider';
import {getLocalIp} from './util';
import type {postTypeStr,mainConfigType} from './util';
type webUIPathType = {
    rootPath:string 
    extensionUri : vscode.Uri,
}
type workPathType = { 
    workspacePath: vscode.Uri;
    watchPath: vscode.Uri; 
}
const Bar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right);
let menu:vscode.Disposable|undefined =undefined;
const createPanel  = ( config:{
    webview:boolean,
    name:string, 
    workspacePath: vscode.Uri;
    extensionUri: vscode.Uri} 
   )=>{
    if (!config.webview){
        return ;
    }
 
    return vscode.window.createWebviewPanel(
        'View',
        config.name||"solidJScad",
        vscode.ViewColumn.One,
        {
            enableFindWidget:true,
            enableScripts: true,
            retainContextWhenHidden: true,
            localResourceRoots: [  
                vscode.Uri.joinPath (config.extensionUri, 'myModule'), 
            ]
        }
    );
};

export const initLoad = (
    msg:{direction:postTypeStr[],pageType:'begin'|'run'|'gzData'|'stlData'}  ,postTypeTag:Map<postTypeStr,number>,
    hand:(pageType:'begin'|'run'|'gzData'|'stlData')=>void)=>{
    //const msg:{direction:postTypeStr[],pageType:'run'|'gzData'|'stlData'}  = JSON.parse(db);
    msg.direction.forEach((v,i)=>{
        postTypeTag.set(v,1<<i);
    });
    hand(msg.pageType);
};
export const workerspaceMessageHandMap = (
      )=>{
    const handListenMsg = new Map<string,(e:any)=>void>();
    let tmpDate = Date.now();
    
    handListenMsg.set('initError',(message:{msg:string})=>{
        vscode.window.showErrorMessage(message.msg);
    });
 
    handListenMsg.set('start',()=>{tmpDate = Date.now();});
    handListenMsg.set('end',()=>{
        vscode.window.showInformationMessage(`${String((Date.now()-tmpDate)/1000)}s`); 
    });


    return handListenMsg;
};
const loadConfig =async (u:vscode.Uri)=>{
    //console.log(vscode.workspace.getConfiguration().get("title"));
    const v = await vscode.workspace.fs.readFile(u) ;
    const conf:mainConfigType = JSON.parse(v.toString());
    if (!conf.src){
        //return;
        conf.src = vscode.workspace.getConfiguration("init").get("src") || "src";
    }  
 
    const workspacePath = vscode.workspace.getWorkspaceFolder(u)!.uri;
    return {
        workspacePath,
        watchPath : vscode.Uri.joinPath(
            workspacePath,
            conf.src),
 
        ...conf
    }; 
};
const watchInit = (conf:{
    name: string;
    in: string;
    func: string;
    watchPath: vscode.Uri;
    extensionUri: vscode.Uri;
    port:number,
    TypeTag:Map<postTypeStr,number>
    //webview:boolean,
}, postMessage:((message: {type?:number,msg:{db?:ArrayBuffer,name:string }}) => void))=>{
    const watcher = vscode.workspace.createFileSystemWatcher(
        new vscode.RelativePattern(conf.watchPath, '**/*.js')
    );
    watcher.onDidChange(uri => { 
        let name = path.relative(
            vscode.workspace.asRelativePath(conf.watchPath),
            vscode.workspace.asRelativePath(uri)
        );
        if (!name.startsWith("./")){
            name = "./"+name;
        }
        vscode.window.showInformationMessage(`Change: ${name}`);
        //console.log('文件更改:', uri.fsPath);
        
        //tmpDate = Date.now();
        vscode.workspace.fs.readFile(uri).then(db=>{      
            const msg={
                db:  db.buffer as ArrayBuffer,
     
                name 
            };
            //serv?.wss?.clients.forEach(ws=>{
            //    WSSendUpdate(["init","run"],TypeTag,msg,ws);
                //ws.send(JSON.stringify({run:true}));
            //});
            //panel.webview.postMessage( {  
            postMessage( {  
                type:(conf.TypeTag.get("init")||0)|(conf.TypeTag.get("run") ||0 ),
                msg                   
            },);
        });                
    });        
    // 监听文件删除事件
    watcher.onDidDelete(uri => {
        let name = path.relative(
            vscode.workspace.asRelativePath(conf.watchPath),
            vscode.workspace.asRelativePath(uri)
        );
        if (!name.startsWith("./")){
            name = "./"+name;
        }
        //const name = path.relative(config.watchPath.fsPath,uri.fsPath);
       
        
        //panel.webview.postMessage({
        postMessage({
            type:conf.TypeTag.get("del"),
            msg:{
                name:path.basename(uri.fsPath)
            }
        });
        vscode.window.showInformationMessage(`Delete: ${name}`); 
    });

    return watcher;
};
const initBar = (panel?:vscode.WebviewPanel)=>{
    if (menu){
        menu.dispose();
    }
    const loadIP = getLocalIp();
    Bar.command="menu";
    Bar.text = `http://${loadIP}:${defaultSerConfig.ser?.httpPort}`;
    const loadUrl = `http://localhost:${defaultSerConfig.ser?.httpPort}`;
    menu =     vscode.commands.registerCommand('menu', () => {
        vscode.window.showQuickPick(["onload","create",loadUrl,Bar.text,"stop"]).then(v=>{
            if (!v){
                return;
            }
            if (v.startsWith("http://")){
                vscode.env.openExternal(vscode.Uri.parse(v));
                return;
            }
            if (v==="onload" || v==="stop"){
                Bar.text="";
                //ser.Server?.close(); 
                //ser.Server?.closeIdleConnections(); 
                panel?.dispose();
                if (v==="stop"){
                    defaultSerConfig.ser?.Server?.close();
                    //ser.Server?.close(); 
                    defaultSerConfig.ser?.Server?.closeIdleConnections(); 
                    defaultSerConfig.ser = undefined;
                }
            }

            vscode.commands.executeCommand("solidJScad."+v);                            
        });
    }); 
    Bar.show();
    vscode.window.showInformationMessage( `Remote address:  ${Bar.text}`,"Browser view").then(v=>{
        if (v==="Browser view"){
            vscode.env.openExternal(vscode.Uri.parse(loadUrl));
        }
    }); 
};
const initServer = (
    context: vscode.ExtensionContext,
    conf:mainConfigType&workPathType,
    func:(
        PostMessageSet:Set<(msg:any)=>any>,
        config:mainConfigType& workPathType & webUIPathType
    )=>vscode.WebviewPanel|undefined)=>{
    
    const PostMessageSet = new Set<(msg:any)=>any>();
    const config =  Object.assign(  conf,{ 
        //pageType:"run",
        rootPath:"",
        extensionUri : context.extensionUri,
    } as webUIPathType);
    console.log("get",config.name);
    //const serv = ServPool.get(config.name);
    
    if (!Bar.text){
        config.rootPath = path.join(config.workspacePath.fsPath,config.webUI||"webui");
        try{
            fs.statSync(config.rootPath);
        }catch(e){
            config.rootPath = path.join(context.extensionUri.fsPath,"myModule","webui");
        }               
        RunHttpServer({ 
            srcPath:config.watchPath.fsPath, 
            ...config},(ser)=>{   
            config.port = ser.httpPort;  
            initBar(func(PostMessageSet,config));
                
        },10,PostMessageSet);
    }else{ 
        func(PostMessageSet,config); 
    } 
};
export const watcherServer = (context: vscode.ExtensionContext)=>{
    vscode.workspace.findFiles('solidjscad.json', null, 1).then(files=>{
        if (files.length === 0) { 
            return;
        }
        const u = files[0];
        
        loadConfig(u).then(conf=>{            
            const TypeTag = new Map<postTypeStr,number>();
            initServer(context,conf,(MessageSet,c)=>{
                 const panel = createPanel(c);
                 initPanel(panel,TypeTag,context,c,MessageSet);
                 return panel;
            });        
        });         
    });
};
const initPanel = (
    panel:vscode.WebviewPanel|undefined,
    TypeTag:Map<postTypeStr,number>,
    context:vscode.ExtensionContext,
    config:mainConfigType & workPathType & webUIPathType,PostMessageSet?: Set<(e: any) => any>)=>{
    if (!panel){return;}
    const handMap = workerspaceMessageHandMap();  
    handMap.set('loaded',(e:any)=>{
        //tmpDate = Date.now();
        //console.log(e);
        initLoad(e.msg,TypeTag,t=>{
            panel.webview.postMessage({                    
                msg:{open:true,config},
                type:(TypeTag.get('run')||0)  | (TypeTag.get('begin')||0)            
            });
        });    
    });   
    handMap.set('req',(e:{path:string})=>{  
        const fn = async ()=>{
            try{
                let pathUri = config.workspacePath;
                if (config.includeImport && config.includeImport[e.path]){
                    pathUri = vscode.Uri.joinPath(pathUri,config.src,
                        ...config.includeImport[e.path].split("/"));                     
                }else{
                    pathUri = vscode.Uri.joinPath(
                        config.watchPath ,...e.path.split("/")
                    );
                }
                const t = await vscode.workspace.fs.readFile(pathUri);                
                panel.webview.postMessage({type:TypeTag.get("init")|| 0,msg:{db:t.buffer as ArrayBuffer,name:e.path }});                              
            }catch(err:any){                         
                panel.webview.postMessage({type:TypeTag.get("init")||0,msg:{ name:e.path }});                     
            }
        };
        fn();        
    });       
    downSrcHandMap(handMap,
        (db:any)=>{
        if (panel) {panel.webview.postMessage(db);}
        else {
            console.log(db);
        }
    },{ TypeTag, ...config});  
    const watcher = watchInit({TypeTag,...config},(m)=>{
        console.log("watcher",m);
        if (panel){panel.webview.postMessage(m);}
        //console.log(PostMessageSet);
        if (PostMessageSet){
            const db =m.msg.db?Buffer.from(new Uint8Array(m.msg.db)).toString("base64") :m.msg.db; // new TextDecoder().decode(m.msg.db);
            const msg ="data:"+JSON.stringify({type:m.type,msg:{name:m.msg.name,db}})+"\n\n";
            PostMessageSet.forEach(f=>{
                f(msg);
            });
        }        
    } );
    context.subscriptions.push(watcher); 
    panel.onDidDispose((e)=>{
        console.log("close",e); 
        watcher.dispose();
    });
    setHtmlForWebview(
        panel.webview,config,
        handMap
    );
};
export const CreateSolidjscadPackage =async (
    uri:vscode.Uri,
    context:vscode.ExtensionContext,
     )=>{
        const conf = vscode.workspace.getConfiguration("init");
    await newWorkspacePackage(
        uri,
        context.extensionUri,
        {
            name:path.basename(uri.fsPath),
            in:conf.get("in")||"index.js",
            func:conf.get("func")||"main",
            date:"",
            webUI:conf.get("webui")||"webui", 
            src:conf.get("src")||"src",
            port:conf.get("port")||3000,
            webview:conf.get("webview")||true,
            includeImport:conf.get("includeImport")||{"@jscad/modeling":"./src/lib/modeling.esm.js"}
        },
        async ()=>{
            try{
                await vscode.workspace.fs.copy(
                    vscode.Uri.joinPath(context.extensionUri,"myModule", "lib","csgChange.js"),
                    vscode.Uri.joinPath(uri,"src","lib","csgChange.js")
                );
            }catch(e){
                console.error(e);
            }
            try{
                await vscode.workspace.fs.copy(
                    vscode.Uri.joinPath(context.extensionUri,"myModule", "lib","modeling.esm.js"),
                    vscode.Uri.joinPath(uri,"src","lib","modeling.esm.js")
                );
            }catch(e){
                console.error(e);
            }
           
            try{
                await vscode.workspace.fs.writeFile(
                    vscode.Uri.joinPath(uri,"src","index.js"),
                new TextEncoder().encode(
                    "import modeling from '@jscad/modeling';\nexport const main=()=>{\n  return modeling.primitives.cube()\n}")
                ) ;
            }catch(e){
                console.error(e);
            }
        }
    );        
};