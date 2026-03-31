import * as vscode from 'vscode';
import { setHtmlForWebview,newWorkspacePackage} from './pawDrawEditor';
import { RunHttpServer,defaultSerConfig,HandlePostMessage } from './nodeServer'; 
import {getLocalIp} from './util';
import type {postTypeStr,mainConfigType,HandMessageFuncMap} from './util';
import {CommandConfig,runCommand} from './IPCMessageHandle';
import type {SerConfig,HttpConfigType} from './nodeServer';
import * as path from 'path';
import * as fs from 'fs';
export  type webUIPathType = {
    rootPath:string 
    extensionUri : vscode.Uri,
}
export type workPathType = { 
    workspacePath: vscode.Uri;
    watchPath: vscode.Uri; 
}
export const serverList:{
    dispose(): any;
}[] = [];
const Bar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right);
export const loadConfig =async (u:vscode.Uri,workspaceConfig:vscode.WorkspaceConfiguration)=>{ 
    const v = await vscode.workspace.fs.readFile(u) ;
    const conf = JSON.parse(v.toString()) as mainConfigType;
    if (!conf.src){ 
        conf.src = workspaceConfig.get("src") || "src";
    }
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

export const initHttpServer = (
    context: vscode.ExtensionContext,
    conf:mainConfigType,
    workPath:workPathType,
    workspaceConf:vscode.WorkspaceConfiguration,
    //getMessage: HandMessageFuncMap,  
    func:(
        config: webUIPathType & HttpConfigType,
        ser:SerConfig
    )=>void)=>{ 
        //const workspaceConf = vscode.workspace.getConfiguration("solidjscad");
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
export const stopServer = ()=>{
    Bar.hide();
    defaultSerConfig.close();
    serverList.forEach(v=>{
        v.dispose();
    });
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
let menu:vscode.Disposable|undefined =undefined;
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
        "stop",
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
                //Bar.hide();
                Bar.text="";
                //ser.Server?.close(); 
                //ser.Server?.closeIdleConnections(); 
                //panel?.dispose();
                if (clearFunc){
                    clearFunc();
                }
                
                //if (v==="stop"){
                //    defaultSerConfig.close();
                //    return; 
                    //ser.Server?.close(); 
                    //defaultSerConfig.ser?.Server?.closeIdleConnections(); 
                    //defaultSerConfig.ser = undefined;
                //} 
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
export const CreateSolidjscadPackage =async (
    uri:vscode.Uri,
    context:vscode.ExtensionContext,
     )=>{
        const conf = vscode.workspace.getConfiguration("solidjscad");
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