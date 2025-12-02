import * as vscode from 'vscode';
import * as path from 'path';
import { setHtmlForWebview,newWorkspacePackage} from './pawDrawEditor';
import { RunHttpServer } from './nodeServer'; 
import {downSrcHandMap} from './gzEditorProvider';
import {getLocalIp} from './util';
const Bar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right);
const createPanel  = ( config:{
    webview:boolean,
    name:string,
    in:string,
    func:string,
    src:string
    //watchPath:vscode.Uri,
    extensionUri: vscode.Uri} 
   )=>{
    if (!config.webview){
        return ;
    }
 
    console.log("new panel");
    if (!config.in){
        config.in = "index.js";
    }else if (!config.in.endsWith(".js")){
        config.in+=".js";
    }
    return vscode.window.createWebviewPanel(
        'View',
        config.name||"solidJScad",
        vscode.ViewColumn.One,
        {
            enableScripts: true,
            retainContextWhenHidden: true,
 
            localResourceRoots: [ 
                //outPath,
                //vscode.Uri.file(path.join(userWorkspace,"modeling","src")),
                vscode.Uri.joinPath (config.extensionUri, 'myModule'),
                //vscode.Uri.joinPath( config.extensionUri, 'webviewCode'),
            ]
        }
    );
};
export type postTypeStr = 'init'|'del'|'run'|'getSrc'|'gzData'|'stlData'
export const initLoad = (db:string,postTypeTag:Map<postTypeStr,number>,hand:(pageType:'run'|'gzData'|'stlData')=>void)=>{
    const msg:{direction:postTypeStr[],pageType:'run'|'gzData'|'stlData'}  = JSON.parse(db);
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
        /*
        if (serv && serv.Server && serv.clientwsMap.size===0){
 
            const port  = serv.httpPort;
            vscode.window.showInformationMessage( `Remote address: http://${getLocalIp()}:${port}`,"Browser view").then(v=>{
                if (v==="Browser view"){
                    vscode.env.openExternal(vscode.Uri.parse(`http://localhost:${port}`));
                }
            });
        }   */     
    });


    return handListenMsg;
};
const loadConfig =async (u:vscode.Uri)=>{
    //console.log(vscode.workspace.getConfiguration().get("title"));
    const v = await vscode.workspace.fs.readFile(u) ;
    const conf:{
        src:string,
        name: string,
        func: string,
        in: string,
        port:number,
        webview:boolean,
        includeImport:{ [key: string]: string }
        //webview:boolean,
        } = JSON.parse(v.toString());
    if (!conf.src){
        //return;
        conf.src = vscode.workspace.getConfiguration("init").get("src") || "src";
    }  
    //console.log(config);  
    const workspacePath = vscode.workspace.getWorkspaceFolder(u)!.uri;
    return {
        workspacePath,
        watchPath : vscode.Uri.joinPath(
            workspacePath,
            conf.src),
        //extensionUri : context.extensionUri,
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
}, panel:vscode.WebviewPanel)=>{
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
            panel.webview.postMessage( {  
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
       
        
        panel.webview.postMessage({
            type:conf.TypeTag.get("del"),
            msg:{
                name:path.basename(uri.fsPath)
            }
        });
        vscode.window.showInformationMessage(`Delete: ${name}`); 
    });

    return watcher;
};
export const watcherServer = (context: vscode.ExtensionContext)=>{
    vscode.workspace.findFiles('solidjscad.json', null, 1).then(files=>{
        if (files.length === 0) {
            if (!vscode.workspace.workspaceFolders){
                return;
            }
            const uri = vscode.workspace.workspaceFolders[0].uri;
            CreateSolidjscadPackage(uri,context).then(()=>{
                watcherServer(context); 
            });
           
       
            //vscode.commands.executeCommand('solidJScad.create').;
            return;
        }
        const u = files[0];
        loadConfig(u).then(conf=>{
            const TypeTag = new Map<postTypeStr,number>();
            const config =  Object.assign( {},conf,{ 
                //pageType:"run",
                extensionUri : context.extensionUri,
            });
            console.log("get",config.name);
            //const serv = ServPool.get(config.name);
            
            if (!Bar.text){
                 
                RunHttpServer({
                    rootPath:path.join(context.extensionUri.fsPath,"myModule","node"),
                    srcPath:config.watchPath.fsPath,
                    indexHtml:"",
                    ...config},(ser)=>{  
                    const loadIP = getLocalIp();
                    Bar.text = `http://${loadIP}:${ser.httpPort}`;
                    Bar.show();
                    vscode.window.showInformationMessage( `Remote address: http://${loadIP}:${ser.httpPort}`,"Browser view").then(v=>{
                        if (v==="Browser view"){
                            vscode.env.openExternal(vscode.Uri.parse(`http://localhost:${ser.httpPort}`));
                        }
                    }); 
                });
            }
            const panel = createPanel(config);
            if (panel){
                initPanel(panel,TypeTag,context,config);
            }          
            
            //bundleConfig.in = vscode.Uri.joinPath(bundleConfig.in,"index.js");
                      
        });         
    });
};
const initPanel = (panel:vscode.WebviewPanel,TypeTag:Map<postTypeStr,number>,context:vscode.ExtensionContext,config:{
    src: string;
    name: string;
    func: string;
    in: string;
    port: number;
    webview: boolean;
    includeImport: {
        [key: string]: string;
    };
    workspacePath: vscode.Uri;
    watchPath: vscode.Uri;
    extensionUri : vscode.Uri,
})=>{
    const handMap = workerspaceMessageHandMap(  );  
    handMap.set('loaded',(e:any)=>{
        //tmpDate = Date.now();
        //console.log(e);
        initLoad(e.msg,TypeTag,t=>{
             panel.webview.postMessage({                    
                msg:{open:true},
                type:TypeTag.get(t)||0             
            });
        });    
    });   
    handMap.set('req',(e:{path:string})=>{  
        const fn = async ()=>{
            try{
                let pathUri = config.workspacePath;
                if (config.includeImport && config.includeImport[e.path]){
                    pathUri =vscode.Uri.joinPath(pathUri,
                         ...config.includeImport[e.path].split("/")); 
                     
                }else{
                    pathUri = vscode.Uri.joinPath(
                        config.watchPath ,...e.path.split("/")
                    );
                }
                console.log(pathUri);
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
    const watcher = watchInit({TypeTag,...config},panel );
    context.subscriptions.push(watcher); 
    panel.onDidDispose((e)=>{
        console.log("close",e);
        //panel?.dispose()
        //Serv?.Server?.
        //Bar?.hide();
        //Serv?.Server?.close();
        //panel=null;
        //config.webview=false;
        //Bar.dispose();
        watcher.dispose();
    });
    setHtmlForWebview(
        panel.webview,{pageType:"run",...config},
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
            src:conf.get("src")||"src",
            port:conf.get("port")||3000,
            webview:conf.get("webview")||true,
            includeImport:conf.get("includeImport")||{"@jscad/modeling":"./src/lib/modeling.esm.js"}
        },
        async ()=>{
            await vscode.workspace.fs.copy(
                vscode.Uri.joinPath(context.extensionUri,"myModule","node","lib","csgChange.js"),
                vscode.Uri.joinPath(uri,"src","lib","csgChange.js")
            );
            await vscode.workspace.fs.copy(
                vscode.Uri.joinPath(context.extensionUri,"myModule","node","lib","modeling.esm.js"),
                vscode.Uri.joinPath(uri,"src","lib","modeling.esm.js")
            );
            await vscode.workspace.fs.writeFile(
                vscode.Uri.joinPath(uri,"src","index.js"),
            new TextEncoder().encode(
                "import modeling from '@jscad/modeling';\nexport const main=()=>{\n  return modeling.primitives.cube()\n}")
            ) ;
        });
};