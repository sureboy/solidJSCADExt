import * as vscode from 'vscode'; 
import { setHtmlForWebview,newWorkspacePackage} from './pawDrawEditor';
import { RunHttpServer,defaultSerConfig,HandlePostMessage } from './nodeServer'; 
import {downSrcHandMap} from './gzEditorProvider'; 
import type {postTypeStr,mainConfigType,HandMessageFuncMap} from './util';
import type {SerConfig,HttpConfigType} from './nodeServer';
import {CommandConfig,runCommand} from './IPCMessageHandle';
import { watchInit } from './watchServer';
import type {workPathType,webUIPathType} from './initConfig';
import {loadConfig,serverList,
    initHttpServer,initBar,
    initLoad,workerspaceMessageHandMap} from './initConfig';
 
//export const Bar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right);

const createPanel  = ( 
    config:{
        //webview:boolean,
        name?:string, 
        //workspacePath?: vscode.Uri;
        //extensionUri: vscode.Uri
    } ,
    WorkspaceConf:vscode.WorkspaceConfiguration
)=>{
    //vscode.workspace.getConfiguration("init").get("webview")
    if (!(WorkspaceConf.get("webview") as boolean)){
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
export const startServer = (context: vscode.ExtensionContext)=>{
    const workspaceConfig = vscode.workspace.getConfiguration("solidjscad");
    vscode.workspace.findFiles(
        workspaceConfig.get("config")||'solidjscad.json', 
        null, 1).then(files=>{
        if (files.length === 0) { 
            return;
        }
        const u = files[0];        
        loadConfig(u,workspaceConfig).then(({conf,workPath})=>{
            const getMessage =  workerspaceMessageHandMap(); 
            const TypeTag = new Map<postTypeStr,number>();
            initHttpServer(context,conf,workPath, workspaceConfig,
                (c,ser)=>{  
                const panel = createPanel(conf,workspaceConfig); 
                ser.HandleMsgMap.set("run",getMessage); 
                initMessageHandMap(
                    TypeTag, 
                    conf,workPath,
                    c,
                    getMessage);
                initPanelAndWatcher(
                    workspaceConfig,
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
            //postMsg(m);
            runCommand(TypeTag).then(db=>{
                CommandConfig.isRun=true;
                m.type |= db.type;
                Object.assign(m.msg,db.msg);
                postMsg(m);
            }).catch(error=>{
                handMap.get("error")!(error,()=>{ 
                    // m.type |= TypeTag.get('run')||0;
                    //Object.assign(m.msg,{error,open:true});
                    postMsg({msg:error});
                });
                //showOutPut(e)
            });
            return;
        }
        //initLoad(e.msg,TypeTag,async t=>{
 
            postMsg({                    
                msg:{open:true,config},
                type:(TypeTag.get('run')||0)  | (TypeTag.get('begin')||0)            
            });//setTimeout(()=>postMsg(m),1000);           
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
const initPanelAndWatcher = (
    WorkspaceConf: vscode.WorkspaceConfiguration,
    handMap:HandMessageFuncMap,
    TypeTag:Map<postTypeStr,number>,
    context:vscode.ExtensionContext,
    config:mainConfigType & workPathType & webUIPathType & HttpConfigType,
    ser?: SerConfig,
    panel?:vscode.WebviewPanel)=>{
    //if (!panel){return;}

    //const handMap = initMessageHandMap(TypeTag,config,postMessage);
    
    if ((WorkspaceConf.get<boolean>("watchFolder")  || false)){
            const postMessage = (m:any)=>{
        if (panel){panel.webview.postMessage(m);}
        HandlePostMessage(m,ser?.PostMessageSet);
    };
        const watcher = watchInit({TypeTag,watchPath:config.watchPath,handMap},(m)=>{
            console.log("watcher",m);
            postMessage(m);           
        } );
        serverList.push(watcher);
        context.subscriptions.push(watcher); 
    }
    
    //context.subscriptions.
    //watcher.dispose()
/*
    panel?.onDidDispose((e)=>{
        console.log("close",e); 
        watcher.dispose();
    });*/
    if (panel){
        serverList.push(panel);
        setHtmlForWebview(
            panel.webview,config  ,
            handMap,ser?.httpPort||3000
            //panel.webview.postMessage
        );
    }    
};
