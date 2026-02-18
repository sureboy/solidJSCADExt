import * as vscode from 'vscode';
import * as path from 'path';
import {PawDrawDocument,WebviewCollection,setHtmlForWebview,newWorkspacePackage} from './pawDrawEditor';
import {workerspaceMessageHandMap,initLoad} from './bundleServer';
//import {RunHttpServer,startWebSocketServer} from './httpServer';
//import {WSSend,httpindexHtml}from './httpLib';
 
import type {postTypeStr} from './util';
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
        //console.log(document.uri);
        this.webviews.add(document.uri, webviewPanel); 
        webviewPanel.webview.options = {
            enableScripts: true,
        };
        const packageName = path.basename(document.uri.fsPath,".solidjscad.gz");
        const nameConfig = packageName.split("_");
        const workspaceConf = vscode.workspace.getConfiguration("init");
         
        const [func,in_,name,date] =nameConfig.length>=4?nameConfig:[
            workspaceConf.get<string>("func")||"",
            workspaceConf.get<string>("in")||"",
            "solidjscad",
            Date.now().toString()
        ]; 
        const myWorkspaceConfig = {name,in:in_,func,date,
            webview:workspaceConf.get("webview") as boolean   || true,
            src:workspaceConf.get("src") as string  || "src",
            port:workspaceConf.get("port") as number|| 0,
            webUI:workspaceConf.get("webui") as string  || "webui",
            includeImport:workspaceConf.get("includeImport") as {[key: string]: string} ||{"@jscad/modeling":"./src/lib/modeling.esm.js"}
        };
         
        const handMap = workerspaceMessageHandMap( ); 
        downSrcHandMap(handMap,e=>webviewPanel.webview.postMessage(e),{
            TypeTag:postTypeTag,
            extensionUri:this._context.extensionUri, 
            ...myWorkspaceConfig});

        handMap.set('loaded',(e:{msg:any})=>{
            initLoad(e.msg,postTypeTag,tag=>{ 
                webviewPanel.webview.postMessage({
                    type:(postTypeTag.get("gzData")||0)|(postTypeTag.get("begin")||0),
                    msg:{db:document.documentData.buffer,config:myWorkspaceConfig}
                });
            });
 
        });
        setHtmlForWebview(webviewPanel.webview,
            {name,in:in_.endsWith(".js")?in_:(in_+".js"),func,src:"",
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
 
export const downSrcHandMap = (
    handMap:Map<string,(e:any)=>void>,
    postMessage:(db:{
        type:number,
        msg:{db?:string|ArrayBuffer,name?:string,open?:boolean}})=>void,
    config:{
        webview:boolean,
        NewWorkspace?:vscode.Uri,
        in:string,
        func:string,
        port:number,
        src:string,
        webUI?:string,
        includeImport:{ [key: string]: string }
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
                    webview:config.webview,
                    in:config.in,
                    func:config.func,
                    port:config.port,
                    date:Date.now().toString(),
                    src:config.src,
                    webUI:config.webUI||"",
                    name:path.basename(config.NewWorkspace.fsPath),
                    includeImport:config.includeImport
                }, async ()=>{
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
                if (v!=="OK"){
                    return;
                }
                vscode.commands.executeCommand('vscode.openFolder', config.NewWorkspace);
            });
            return;
        }
        if (message.start){
            return;
        }
        let filePath;
        if (message.name.startsWith("./")){
            filePath=vscode.Uri.joinPath(
                config.NewWorkspace,
                config.src,
                message.name);
        }else{
            filePath=vscode.Uri.joinPath(
                config.NewWorkspace,
                config.src,
                config.includeImport[message.name]||message.name);
        }
        vscode.workspace.fs.writeFile(
            filePath,
            new TextEncoder().encode(message.code)).then(res=>{
                console.log(res);
        });         
    });    
};