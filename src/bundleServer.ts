import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import { setHtmlForWebview,newWorkspacePackage} from './pawDrawEditor';
import { RunHttpServer,defaultSerConfig,HandlePostMessage } from './nodeServer'; 
import {downSrcHandMap} from './gzEditorProvider';
import {getLocalIp} from './util';
import type {postTypeStr,mainConfigType,HandMessageFuncMap} from './util';
import type {SerConfig,HttpConfigType} from './nodeServer';
import {handleCommand,CommandConfig} from './IPCMessageHandle';
export  type webUIPathType = {
    rootPath:string 
    extensionUri : vscode.Uri,
}
type workPathType = { 
    workspacePath: vscode.Uri;
    watchPath: vscode.Uri; 
}
const Bar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right);
let menu:vscode.Disposable|undefined =undefined;
const createPanel  = ( 
    config:{
        //webview:boolean,
        name?:string, 
        //workspacePath?: vscode.Uri;
        //extensionUri: vscode.Uri
    } 
)=>{
    //vscode.workspace.getConfiguration("init").get("webview")
    if (!(vscode.workspace.getConfiguration("init").get("webview") as boolean)){
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
    handListenMsg.set('initError',(message:{msg:string},resMsg)=>{ 
        vscode.window.showErrorMessage(message.msg);
        resMsg({type:0});
    }); 
    handListenMsg.set('start',(e,resMsg)=>{
        tmpDate = Date.now();
        resMsg({type:0});
    });
    handListenMsg.set('end',(e,resMsg)=>{
        resMsg({type:0});
        vscode.window.showInformationMessage(
            `${String((Date.now()-tmpDate)/1000)}s`); 
    });
    //initIPCMessageHandle(handListenMsg);
    return handListenMsg;
};
const loadConfig =async (u:vscode.Uri)=>{ 
    const v = await vscode.workspace.fs.readFile(u) ;
    const conf = JSON.parse(v.toString()) as mainConfigType;
    if (!conf.src){ 
        conf.src = vscode.workspace.getConfiguration("init").get("src") || "src";
    }   

    /*
    if (!conf.serverIP){ 
        conf.serverIP = vscode.workspace.getConfiguration("init").get("serverIP") || ["solidjscad.com"];
    } 
    //if (!conf.includeImport){
        conf.includeImport = vscode.workspace.getConfiguration("init").get("includeImport")||{};
    //} else{

    //}
    */
    const workspacePath = vscode.workspace.getWorkspaceFolder(u)!.uri; 
    const watchPath = vscode.Uri.joinPath(
            workspacePath,
            conf.src);
    if (conf.command){
        const [command,...p] = conf.command.split(" ").map(c=>c.trim());
        CommandConfig.command=command;
        CommandConfig.args = p;
        CommandConfig.option = {cwd:watchPath.fsPath};
        //const ext = path.extname(conf.in);
    }
    return {
        conf,
        workPath:{
            workspacePath ,
            watchPath ,
        } as workPathType
    }; 
};
const watchInit = (conf:{ 
    //command?:string;
    handMap:HandMessageFuncMap,
    watchPath: vscode.Uri; 
    TypeTag:Map<postTypeStr,number> 
}, postMessage:((message: {type?:number,msg:{db?:ArrayBuffer,name:string }}) => void))=>{
    const watcher = vscode.workspace.createFileSystemWatcher(
        new vscode.RelativePattern(conf.watchPath , '**/*')
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
        if (CommandConfig.command) {
            handleCommand(conf.TypeTag,postMessage,conf.handMap);
            //console.log(conf.command);
            return;
        }
            vscode.workspace.fs.readFile(uri).then(db=>{      
                const msg={
                    db:  db.buffer as ArrayBuffer,
                    name 
                };
                postMessage({  
                    type:(conf.TypeTag.get("init")||0)|(conf.TypeTag.get("run") ||0 ),
                    msg                   
                });
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
    conf:mainConfigType,
    workPath:workPathType,
    //getMessage: HandMessageFuncMap,  
    func:(
        config: webUIPathType & HttpConfigType,
        ser:SerConfig
    )=>void)=>{ 
        const workspaceConf = vscode.workspace.getConfiguration("init");
        //vscode.ConfigurationTarget.Global("init")
    let rootPath = path.join(workPath.workspacePath.fsPath,workspaceConf.get("webui")||"webui");
        try{
            fs.statSync(rootPath);
        }catch(e){
            rootPath = path.join(context.extensionUri.fsPath,"myModule","webui");
        }   
    const config =   {  
        rootPath,
        extensionUri : context.extensionUri,
    } as webUIPathType; 
    const httpConfig  = Object.assign({},conf,config,{ 
            //pageTag:"run",
            serverIP:(workspaceConf.get("serverUrl") as string[]) || [],
            port:(workspaceConf.get("port") as number) || 3000,
            srcPath:workPath.watchPath.fsPath, 
            });
    if (!defaultSerConfig.ser){ 
        
        RunHttpServer(httpConfig,(ser)=>{   
                //ser.HandleMsgMap.set("run",getMessage);
                //conf.port = ser.httpPort; 
                func(httpConfig,ser);  
        },10);
    }else{ 
        func(httpConfig,defaultSerConfig.ser); 
    } 
};
export const watcherServer = (context: vscode.ExtensionContext)=>{
    
    vscode.workspace.findFiles(
        vscode.workspace.getConfiguration("init").get("config")||'solidjscad.json', 
        null, 1).then(files=>{
        if (files.length === 0) { 
            return;
        }
        const u = files[0];        
        loadConfig(u).then(({conf,workPath})=>{
            const getMessage =  workerspaceMessageHandMap(); 
            const TypeTag = new Map<postTypeStr,number>();
            initServer(context,conf,workPath, 
                (c,ser)=>{  
                const panel = createPanel(conf); 
                ser.HandleMsgMap.set("run",getMessage); 
                initMessageHandMap(
                    TypeTag, 
                    conf,workPath,
                    c,
                    getMessage);
                initPanel(
                    getMessage,
                    TypeTag,
                    context,
                    Object.assign({},conf,workPath,c),
                    ser,panel);
                initBar("run",()=>{
                    panel?.dispose(); 
                }); 
            });        
        });         
    });
};
const initMessageHandMap = (
    TypeTag:Map<postTypeStr,number>,
    config:mainConfigType ,
    workPath: workPathType,
    webUI:webUIPathType,
    // & {postMessage:(e:any)=>any} ,
    handMap?:HandMessageFuncMap
)=>{
    if (!handMap){
        handMap= workerspaceMessageHandMap();
    }
    //const handMap = workerspaceMessageHandMap();  
    handMap.set('loaded',(e:any,postMsg:(e:any)=>any)=>{
        //tmpDate = Date.now();
        //console.log(e);
        const t = initLoad(e.msg,TypeTag);
        if (CommandConfig.command){
            //console.log(config.command);
            const m = {                    
                msg:{ config},
                type:  (TypeTag.get('begin')||0)            
            };
            postMsg(m);
            handleCommand(TypeTag,postMsg,handMap);
            return;
        }
        //initLoad(e.msg,TypeTag,async t=>{
            const m = {                    
                msg:{open:true,config},
                type:(TypeTag.get('run')||0)  | (TypeTag.get('begin')||0)            
            }; 
            postMsg(m);//setTimeout(()=>postMsg(m),1000);           
        //});    
    });   
    handMap.set('req',async (e:{path:string},postMsg:(e:any)=>Promise<any>)=>{   
        const msg = {
            type:(TypeTag.get("init")||0)
            //|(TypeTag.get("begin")||0)
            ,
            msg:{ name:e.path,
                //config 
            }};
        //console.log(msg);
        try{ 
            let pathUri = vscode.Uri.joinPath(
                    workPath.watchPath ,...e.path.split("/")
                );
            const t = await vscode.workspace.fs.readFile(pathUri);          
            Object.assign( msg.msg,{db:   t.buffer as ArrayBuffer});   
            postMsg(msg);        
            //config.postMessage({type:TypeTag.get("init")|| 0,msg:{db:t.buffer as ArrayBuffer,name:e.path }});                              
        }catch(err:any){                         
            console.error("req Err",err);   
            postMsg(msg); 
        }        
    });       
    downSrcHandMap(
        handMap,
        //config.postMessage,  
        TypeTag ,
        webUI.extensionUri,
        //workPath.workspacePath,
        config   ,
        workPath.workspacePath//.watchPath    
    // { TypeTag, ...config}
    );  
    return handMap;
};
const initPanel = (
    handMap:HandMessageFuncMap,
    TypeTag:Map<postTypeStr,number>,
    context:vscode.ExtensionContext,
    config:mainConfigType & workPathType & webUIPathType & HttpConfigType,
    ser?: SerConfig,
    panel?:vscode.WebviewPanel)=>{
    //if (!panel){return;}
    const postMessage = (m:any)=>{
        if (panel){panel.webview.postMessage(m);}
        HandlePostMessage(m,ser?.PostMessageSet);
    };
    //const handMap = initMessageHandMap(TypeTag,config,postMessage);
     
    const watcher = watchInit({TypeTag,watchPath:config.watchPath,handMap},(m)=>{
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
            panel.webview,config  ,
            handMap,ser?.httpPort||3000
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
            //webUI:conf.get("webui")||"webui", 
            src:conf.get("src")||"src",
            //port:conf.get("port")||3000,
            //webview:conf.get("webview")||true,
            //includeImport:conf.get("includeImport")||{"@jscad/modeling":"./src/lib/modeling.esm.js"}
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
                    `import modeling from '@jscad/modeling';
import  manifold from 'manifold-3d';
const Manifold = await  manifold()
Manifold.setup()
export const manifold_main= (opt)=>{   
  const option = Object.assign({size:2},opt);   
  const box = Manifold.Manifold.cube(option.size,true);    
  const sphere = Manifold.Manifold.sphere(1.2, 48);     
  const sphereTranslated = sphere.translate([0.8, 0.8, 0.8]); 
  const result = box.subtract(sphereTranslated);
  const meshData = result.getMesh();
  const vertices= meshData.vertProperties;
  const indices = meshData.triVerts;   
  box.delete();
  sphere.delete();
  sphereTranslated.delete();
  result.delete();
  return [{vertices,indices},option]
}
export const main=(opt)=>{
  const option = Object.assign({size:10},opt)
  return [modeling.primitives.cube(option),option]
}`)
                ) ;
            }catch(e){
                console.error(e);
            }
        }
    );        
};