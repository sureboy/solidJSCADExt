import * as vscode from 'vscode';
import * as path from 'path';
import {PawDrawDocument,WebviewCollection,setHtmlForWebview,listenMessage} from './pawDrawEditor';
import {workerspaceMessageHandMap,initLoad} from './bundleServer';
import {RunHttpServer,startWebSocketServer} from './httpServer';
import {WSSend,httpindexHtml}from './httpLib';
import type {postTypeStr} from './bundleServer';
//import type {SerConfig} from './httpServer';
const postTypeTag = new Map<postTypeStr,number>();
//let serv:SerConfig|null = null;
export class gzEditorProvider implements vscode.CustomEditorProvider<PawDrawDocument> {
    //private static newPawDrawFileId = 1;
    public static register(context: vscode.ExtensionContext): vscode.Disposable {

        return vscode.window.registerCustomEditorProvider(
          gzEditorProvider.viewType, 
            new gzEditorProvider(context),
            {
                webviewOptions: {
                    retainContextWhenHidden: true, // 保持webview状态当隐藏时
                },
                supportsMultipleEditorsPerDocument: false, // 不支持同一文档多个编辑器
            });
    }

    private static readonly viewType = 'solidJScad.gzPreview';
    private readonly webviews = new WebviewCollection();
    constructor(private readonly _context: vscode.ExtensionContext) {

        //this.httpConfig = {extensionUri: _context.extensionUri,indexHtml:"",name: ""};
    }

    async openCustomDocument(
        uri: vscode.Uri,
        openContext: { backupId?: string },
        _token: vscode.CancellationToken
    ): Promise<PawDrawDocument> {
        const document: PawDrawDocument = await PawDrawDocument.create(
          uri, 
          openContext.backupId, {
			getFileData: async () => {
				const webviewsForDocument = Array.from(this.webviews.get(document.uri));
				if (!webviewsForDocument.length) {
					throw new Error('Could not find webview to save for');
				}
				const panel = webviewsForDocument[0];
				const response = await this.postMessageWithResponse<number[]>(panel, 'getFileData', {});
				return new Uint8Array(response);
			}
		});
     

        return document;
    }
    //private tmpDate = 0;
    //private httpConfig:{extensionUri: vscode.Uri, indexHtml:string,name:string};
    async resolveCustomEditor(
        document: PawDrawDocument,
        webviewPanel: vscode.WebviewPanel,
        _token: vscode.CancellationToken
    ): Promise<void> {
        //this.tmpDate = Date.now();
        // Add the webview to our internal set of active webviews
        console.log(document.uri);
        this.webviews.add(document.uri, webviewPanel); 
        webviewPanel.webview.options = {
            enableScripts: true,
        };
        const packageName = path.basename(document.uri.fsPath,".solidjscad.gz");
        const [func,in_,name,date] =packageName.split("_");
        const config = {extensionUri:this._context.extensionUri,
            name:"GzipPreview",in:in_,func:func,
            //pageName:"GzipViewer",
            pageType:'gzData' as "run" | "gzData" | "stlData",};
      
        let NewWorkspace : vscode.Uri|null = null;
           
        const myWorkspaceConfig = {name,in:in_,func,date,
            src:vscode.workspace.getConfiguration("init").get("src") as string || "src",
            port:vscode.workspace.getConfiguration("init").get("port") as number ||0  };
        //this.httpConfig.indexHtml = httpindexHtml(config);
        //this.httpConfig.name = config.name;
        //if (!serv){
        RunHttpServer({
            extensionUri: this._context.extensionUri,
            indexHtml:httpindexHtml(config),
            name: config.name
        },serv=>{
            serv?.Bar?.show();
            webviewPanel.onDidChangeViewState(e=>{
                if (webviewPanel?.visible) { 
                    serv?.Bar?.show();                     
                } else { 
                    serv?.Bar?.hide();                    
                }             
            });
            webviewPanel.onDidDispose(()=>{
                serv?.Bar?.hide();  
            });
            startWebSocketServer(serv,ws=>{
                const listenMap = workerspaceMessageHandMap(
                    postTypeTag,
                    (e: {
                        type: number;
                        msg: {
                            db?: string | ArrayBuffer;
                            name?: string;
                            open?: boolean;
                        }})=>{
                        WSSend(e,ws);                
                    },
                );
                listenMap.set("loaded",(e:{msg:string})=>{
                    initLoad(e.msg,postTypeTag,tag=>{
                        ws.send(JSON.stringify({
                            type:postTypeTag.get(tag)!,
                            msg:{len:document.documentData.buffer.byteLength}
                        }));
                        ws.send(document.documentData.buffer);
                    });
                });
                return listenMap;
            },listenMessage);
        },
        myWorkspaceConfig.port
        //vscode.workspace.getConfiguration("init").get("port")||0                
        );
        
        
        //const postMsg = webviewPanel.webview.postMessage;
        const handMap = workerspaceMessageHandMap(postTypeTag,webviewPanel.webview.postMessage);
        //const _h =  new Map<string, (e?: any) => void>();
        downSrcHandMap(handMap,e=>webviewPanel.webview.postMessage(e),{ TypeTag:postTypeTag,extensionUri:this._context.extensionUri, ...myWorkspaceConfig});
 
        handMap.set('loaded',(e:{msg:string})=>{
            initLoad(e.msg,postTypeTag,tag=>{
                webviewPanel.webview.postMessage({
                    type:postTypeTag.get(tag),
                    msg:{db:document.documentData.buffer}
                });
            });
     /*
            (e.msg as string).split("|").forEach((v,i)=>{
                postTypeTag.set(v,1<<i);
            });
            this.tmpDate=Date.now();
                webviewPanel.webview.postMessage({
                    type:postTypeTag.get("gzData"),
                    msg:{db:document.documentData.buffer}
                });*/
        });
       

        setHtmlForWebview(webviewPanel.webview,
            {name,in:in_+".js",func,
                extensionUri:this._context.extensionUri,pageType:'gzData'
            },
            handMap
        );

      
 
    }

    private readonly _onDidChangeCustomDocument = new vscode.EventEmitter<vscode.CustomDocumentEditEvent<PawDrawDocument>>();
    public readonly onDidChangeCustomDocument = this._onDidChangeCustomDocument.event;

    public saveCustomDocument(document: PawDrawDocument, cancellation: vscode.CancellationToken): Thenable<void> {
        return document.save(cancellation);
    }

    public saveCustomDocumentAs(document: PawDrawDocument, destination: vscode.Uri, cancellation: vscode.CancellationToken): Thenable<void> {
        return document.saveAs(destination, cancellation);
    }

    public revertCustomDocument(document: PawDrawDocument, cancellation: vscode.CancellationToken): Thenable<void> {
        return document.revert(cancellation);
    }

    public backupCustomDocument(document: PawDrawDocument, context: vscode.CustomDocumentBackupContext, cancellation: vscode.CancellationToken): Thenable<vscode.CustomDocumentBackup> {
        return document.backup(context.destination, cancellation);
    }
 
    private _requestId = 1;
    private readonly _callbacks = new Map<number, (response: any) => void>();

    private postMessageWithResponse<R = unknown>(panel: vscode.WebviewPanel, type: string, body: any): Promise<R> {
        const requestId = this._requestId++;
        const p = new Promise<R>(resolve => this._callbacks.set(requestId, resolve));
        panel.webview.postMessage({ type, requestId, body });
        return p;
    }
}
export const newWorkspacePackage= async(
    NewWorkspace:vscode.Uri,
    //context: vscode.ExtensionContext,
    extensionUri:vscode.Uri,
    myWorkspaceConfig:{
        name:string,
        in:string,
        func:string,
        date:string,
        src:string,
        port:number,
        //webview:boolean,
    },
        handleEnd?:()=>void)=>{
            
    await vscode.workspace.fs.writeFile(
        vscode.Uri.joinPath(NewWorkspace,"solidjscad.json"),
        new TextEncoder().encode(JSON.stringify(myWorkspaceConfig, null, 2)),
    );   
    try{
        await vscode.workspace.fs.copy(
            vscode.Uri.joinPath(extensionUri,"myModule","modeling"),
            vscode.Uri.joinPath(NewWorkspace,"node_modules", "@jscad","modeling"));
    }catch(e){
        console.log(e);
    }

        /*
    await vscode.workspace.fs.copy(
        vscode.Uri.joinPath(context.extensionUri,"myModule","csgChange.js"),
        vscode.Uri.joinPath(NewWorkspace,myWorkspaceConfig.src,"lib","csgChange.js")
    );
    await vscode.workspace.fs.copy(
        vscode.Uri.joinPath(context.extensionUri,"myModule","modeling.esm.js"),
        vscode.Uri.joinPath(NewWorkspace,myWorkspaceConfig.src,"lib","modeling.esm.js")
    );*/
    //return handleEnd;
    //vscode.workspace.fs.delete(vscode.Uri.joinPath(NewWorkspace,"node_modules","@jscad","modeling","src",))
    const cf = await vscode.workspace.fs.readFile(
        vscode.Uri.joinPath(extensionUri,"myModule","modeling","package.json"));
    
    const cf_ = JSON.parse(cf.toString());
    //console.log(cf_);
    await vscode.workspace.fs.writeFile(
        vscode.Uri.joinPath(NewWorkspace,"package.json"),
        new TextEncoder().encode(JSON.stringify({
            name:myWorkspaceConfig.name.toLowerCase(),
            type: "module",
            main: myWorkspaceConfig.src+"/"+myWorkspaceConfig.in,
            version: "1.0.0", 
            description:myWorkspaceConfig.name,
            private: true,
            scripts: {
                "build:jscad": `npx esbuild ./node_modules/@jscad/modeling/src/index.js --outfile=./${myWorkspaceConfig.src}/lib/modeling.esm.js --minify --bundle --format=esm`,
            },
            devDependencies: {
                "esbuild": "^0.25.8",
            },
            dependencies: {
                "@jscad/modeling": cf_.version,
            }
        }, null, 2))
    );

    await vscode.workspace.fs.writeFile(
        vscode.Uri.joinPath(NewWorkspace,"jsconfig.json"),
        new TextEncoder().encode(JSON.stringify({
            compilerOptions:  {
                paths: { 
                "@jscad/modeling":["./node_modules/@jscad/modeling"]
                }
            }
        }, null, 2)),
    ); 
    
    if (handleEnd){
        handleEnd();
    }
    
                 //vscode.workspace.fs.createDirectory(NewWorkspace);
            
};
/*
const createWorkspacePackage = async( 
    NewWorkspace:vscode.Uri,
    context: vscode.ExtensionContext,
    myWorkspaceConfig:{
        webview:boolean,
        port:number,
        name:string,
        func:string,
        in:string,
        date:string,
        src:string},
        handleEnd?:()=>void)=>{
    try{
        await vscode.workspace.fs.stat(NewWorkspace);
     }catch(e){
        vscode.window.showWarningMessage(`Do you need to create a Package from Gzip file '${
            [myWorkspaceConfig.func,
            myWorkspaceConfig.in,
            myWorkspaceConfig.name].join("_")}'`,"OK").then( v=>{
            if (v!=="OK"){
                return;
            }
            newWorkspacePackage(NewWorkspace,context,myWorkspaceConfig,handleEnd);
        });
         //console.log(e); 
         //vscode.workspace.getWorkspaceFolder()
      
     }
};
*/
export const downSrcHandMap = (handMap:Map<string,(e:any)=>void>,
postMessage:(db:{
    type:number,
    msg:{db?:string|ArrayBuffer,name?:string,open?:boolean}})=>void,
config:{
    
    NewWorkspace?:vscode.Uri,
    in:string,
    func:string,
    port:number,
    src:string,
    extensionUri:vscode.Uri,
    TypeTag : Map<postTypeStr,number>
})=>{
    handMap.set('downSrc',()=>{
        vscode.window.showOpenDialog({
            canSelectFolders:true,
            canSelectFiles:false,
            canSelectMany:false,
        }).then(u=>{
            if (!u){
                return;
            }
            config.NewWorkspace = u[0];
            newWorkspacePackage(config.NewWorkspace,
                //vscode.Uri.joinPath(NewWorkspace,myWorkspaceConfig.name),
                config!.extensionUri,  {
                    in:config.in,
                    func:config.func,
                    port:config.port,
                    date:Date.now().toString(),
                    src:config.src,
                    name:path.basename(config.NewWorkspace.fsPath)
                }, ()=>{
                    //console.log("begin get src",panel,TypeTag);
                    postMessage({
                        type:config.TypeTag.get("getSrc")||0  ,
                        msg:{}
                    });
            });  
                     
        });            
    });
    handMap.set('src',(message:{name:string,code:string,start?:boolean,end?:boolean})=>{
        //console.log(message);
        if (!config.NewWorkspace){
            return;
        }
        if (!message.name){
            vscode.window.showWarningMessage("Workspace change",{
                modal:true,
                detail: `Do you need to move the workspace to the ${config.NewWorkspace} Folder`
            },                   
            "OK").then(v=>{
                if (v!=="OK"){return;}
                vscode.commands.executeCommand('vscode.openFolder', config.NewWorkspace);
            });
            return;
        }
        if (message.start){
            return;
        }
        // vscode.workspace.fs.delete(vscode.Uri.joinPath(NewWorkspace,myWorkspaceConfig.src)).then(()=>{
            vscode.workspace.fs.writeFile(
                vscode.Uri.joinPath(config.NewWorkspace,config.src,message.name),
                new TextEncoder().encode(message.code)).then(res=>{
                    console.log(res);
            }); 
        //});
        
    });
    
};