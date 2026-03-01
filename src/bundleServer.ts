import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import { setHtmlForWebview,newWorkspacePackage} from './pawDrawEditor';
import { RunHttpServer,defaultSerConfig,HandlePostMessage } from './nodeServer'; 
import {downSrcHandMap} from './gzEditorProvider';
import {getLocalIp} from './util';
import type {postTypeStr,mainConfigType,HandMessageFuncMap} from './util';
import type {SerConfig} from './nodeServer';
export  type webUIPathType = {
    rootPath:string 
    extensionUri : vscode.Uri,
}
type workPathType = { 
    workspacePath: vscode.Uri;
    watchPath: vscode.Uri; 
}
 
//type messageType = {
//    getMessage: Map<string, (e: any) => void>,
    //postMessage?:(e:any)=>any
//} 
/*
const BarMenu:{
    Bar:vscode.StatusBarItem,
    menu?:vscode.Disposable,
    menuList:string[],
} = {
    //menu: undefined,
    menuList:["onload","create"],
    Bar:vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right)
};
*/
const Bar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right);
let menu:vscode.Disposable|undefined =undefined;
const createPanel  = ( 
    config:{
        webview:boolean,
        name?:string, 
        //workspacePath?: vscode.Uri;
        //extensionUri: vscode.Uri
    } 
)=>{
    if (!config.webview){
        return ;
    } 
    return vscode.window.createWebviewPanel(
        'View',
        config.name||"solidJScad",
        vscode.ViewColumn.One,
        {
            //enableFindWidget:true,
            enableScripts: true,
            retainContextWhenHidden: true,
            localResourceRoots: [  
                //vscode.Uri.joinPath (config.extensionUri, 'myModule'), 
            ]
        }
    );
}; 
export const initLoad = (
    msg:{direction:postTypeStr[],pageType:'begin'|'run'|'gzData'|'stlData'},
    postTypeTag:Map<postTypeStr,number>,
    //hand:(pageType:'begin'|'run'|'gzData'|'stlData')=>void
)=>{
    //const msg:{direction:postTypeStr[],pageType:'run'|'gzData'|'stlData'}  = JSON.parse(db);
    msg.direction.forEach((v,i)=>{
        postTypeTag.set(v,1<<i);
    });
    return msg.pageType;
};
export const workerspaceMessageHandMap = (
      )=>{
    const handListenMsg:HandMessageFuncMap = new Map();
    let tmpDate = Date.now(); 
    handListenMsg.set('initError',async (message:{msg:string})=>{ 
        vscode.window.showErrorMessage(message.msg);
    }); 
    handListenMsg.set('start',async ()=>{tmpDate = Date.now();});
    handListenMsg.set('end',async ()=>{
        vscode.window.showInformationMessage(
            `${String((Date.now()-tmpDate)/1000)}s`); 
    });
    return handListenMsg;
};
const loadConfig =async (u:vscode.Uri)=>{ 
    const v = await vscode.workspace.fs.readFile(u) ;
    const conf = JSON.parse(v.toString()) as mainConfigType;
    if (!conf.src){ 
        conf.src = vscode.workspace.getConfiguration("init").get("src") || "src";
    }   
    const workspacePath = vscode.workspace.getWorkspaceFolder(u)!.uri; 
    return {
        workspacePath ,
        watchPath : vscode.Uri.joinPath(
            workspacePath,
            conf.src),
 
        ...conf
    } as mainConfigType&workPathType; 
};
const watchInit = (conf:{ 
    watchPath: vscode.Uri; 
    TypeTag:Map<postTypeStr,number> 
}, postMessage:((message: {type?:number,msg:{db?:ArrayBuffer,name:string }}) => void))=>{
    const watcher = vscode.workspace.createFileSystemWatcher(
        new vscode.RelativePattern(conf.watchPath , '**/*.js')
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
export const initBar = (tag:string,clearFunc?:()=>void)=>{
    //if (menu){
        //return;
    menu?.dispose();
    //}
    const loadIP = getLocalIp();
    Bar.command="menu";
    const ipUrl = `http://${loadIP}:${defaultSerConfig.ser?.httpPort}`;
    Bar.text = ipUrl;
    const loadUrl = `http://localhost:${defaultSerConfig.ser?.httpPort}`;
    const menuList = [
        "onload",
        "create",
        //loadUrl,
        //ipUrl,
    ];
   
    if (defaultSerConfig.ser){
        //console.log("def ser",defaultSerConfig.ser.HandleMsgMap.size);
        for(let k of defaultSerConfig.ser.HandleMsgMap.keys() ){
            //console.log("1",k);
            menuList.push(ipUrl+"#"+k,loadUrl+"#"+k);
        };
    }
    
   
    menu = vscode.commands.registerCommand('menu', () => {
        vscode.window.showQuickPick(menuList).then(v=>{
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
                //panel?.dispose();
                if (clearFunc){
                    clearFunc();
                }
                /*
                if (v==="stop"){
                    defaultSerConfig.ser?.Server?.close();
                    //ser.Server?.close(); 
                    defaultSerConfig.ser?.Server?.closeIdleConnections(); 
                    defaultSerConfig.ser = undefined;
                }*/
            }

            vscode.commands.executeCommand("solidJScad."+v);                            
        });
    }); 
    Bar.show();
    if (tag){
        vscode.window.showInformationMessage( `Remote address:  ${ipUrl}#${tag}`,"Browser view").then(v=>{
            if (v==="Browser view"){
                vscode.env.openExternal(vscode.Uri.parse(`${loadUrl}#${tag}`));
            }
        }); 
    }
    
};
const initServer = (
    context: vscode.ExtensionContext,
    conf:mainConfigType&workPathType,
    //getMessage: HandMessageFuncMap,  
    func:(
        config:mainConfigType& workPathType & webUIPathType,
        ser:SerConfig
    )=>void)=>{ 
    let rootPath = path.join(conf.workspacePath.fsPath,conf.webUI||"webui");
        try{
            fs.statSync(rootPath);
        }catch(e){
            rootPath = path.join(context.extensionUri.fsPath,"myModule","webui");
        }   
    const config =  Object.assign( conf,{  
        rootPath,
        extensionUri : context.extensionUri,
    } as webUIPathType); 
    if (!defaultSerConfig.ser){ 
        RunHttpServer(Object.assign(config,{ 
            //pageTag:"run",
            srcPath:config.watchPath.fsPath, 
            }),(ser)=>{   
                //ser.HandleMsgMap.set("run",getMessage);
                config.port = ser.httpPort; 
                func(config,ser);  
        },10);
    }else{ 
        func(config,defaultSerConfig.ser); 
    } 
};
export const watcherServer = (context: vscode.ExtensionContext)=>{
    vscode.workspace.findFiles('solidjscad.json', null, 1).then(files=>{
        if (files.length === 0) { 
            return;
        }
        const u = files[0];        
        loadConfig(u).then(conf=>{
            const getMessage =  workerspaceMessageHandMap(); 
            const TypeTag = new Map<postTypeStr,number>();
            const panel = createPanel(conf); 
            initServer(context,conf,
                //getMessage,
                //Object.assign(conf,{getMessage}),
                (c,ser)=>{  
                ser.HandleMsgMap.set("run",getMessage);
                //console.log("run",ser.HandleMsgMap);
                initMessageHandMap(
                    TypeTag, /*
                    Object.assign(
                        c,
                        {postMessage:(m:any)=>{
                            if (panel){panel.webview.postMessage(m);}
                            //HandlePostMessage(m,MessageSet);
                        }}
                    ),*/
                    c,
                    getMessage);
                initPanel(getMessage,TypeTag,context,c,ser,panel);
                initBar("run",()=>{
                    panel?.dispose(); 
                });
                //return panel;
            });        
        });         
    });
};
const initMessageHandMap = (
    TypeTag:Map<postTypeStr,number>,
    config:mainConfigType & workPathType
    // & {postMessage:(e:any)=>any}
     ,
    handMap?:HandMessageFuncMap
)=>{
    if (!handMap){
        handMap= workerspaceMessageHandMap();
    }
    //const handMap = workerspaceMessageHandMap();  
    handMap.set('loaded',(e:any,postMsg:(e:any)=>Promise<any>)=>{
        //tmpDate = Date.now();
        //console.log(e);
        const t = initLoad(e.msg,TypeTag);
        //initLoad(e.msg,TypeTag,async t=>{
            const m = {                    
                msg:{open:true,config},
                type:(TypeTag.get('run')||0)  | (TypeTag.get('begin')||0)            
            }; 
            postMsg(m);//setTimeout(()=>postMsg(m),1000);           
        //});    
    });   
    handMap.set('req',async (e:{path:string},postMsg:(e:any)=>Promise<any>)=>{  
        
        //const fn = async ()=>{
            const msg = {
                type:(TypeTag.get("init")||0)
                |(TypeTag.get("begin")||0)
                ,
                msg:{ name:e.path,
                    config 
                }};
            //console.log(msg);
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
                Object.assign( msg.msg,{db:   t.buffer as ArrayBuffer});   
                postMsg(msg);        
                //config.postMessage({type:TypeTag.get("init")|| 0,msg:{db:t.buffer as ArrayBuffer,name:e.path }});                              
            }catch(err:any){                         
                console.error("req Err",err);   
                postMsg(msg); 
            } 
        //};
        //fn();        
    });       
    downSrcHandMap(
        handMap,
        //config.postMessage,  
        TypeTag ,
        config       
    // { TypeTag, ...config}
    );  
    return handMap;
};
const initPanel = (
    handMap:HandMessageFuncMap,
    TypeTag:Map<postTypeStr,number>,
    context:vscode.ExtensionContext,
    config:mainConfigType & workPathType & webUIPathType,
    ser?: SerConfig,
    panel?:vscode.WebviewPanel)=>{
    //if (!panel){return;}
    const postMessage = (m:any)=>{
        if (panel){panel.webview.postMessage(m);}
        HandlePostMessage(m,ser?.PostMessageSet);
    };
    //const handMap = initMessageHandMap(TypeTag,config,postMessage);
     
    const watcher = watchInit({TypeTag,watchPath:config.watchPath},(m)=>{
        console.log("watcher",m);
        postMessage(m);           
    } );
    context.subscriptions.push(watcher); 
    panel?.onDidDispose((e)=>{
        console.log("close",e); 
        watcher.dispose();
    });
    if (panel){
        setHtmlForWebview(
            panel.webview,config,
            handMap,
            //panel.webview.postMessage
        );
    }    
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