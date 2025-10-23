import * as vscode from 'vscode';
import * as path from 'path';
import {PawDrawDocument,WebviewCollection,setHtmlForWebview} from './pawDrawEditor';

 
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

    private static readonly viewType = 'MGToy.gzPreview';
    private readonly webviews = new WebviewCollection();
    constructor(private readonly _context: vscode.ExtensionContext) { }

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
    private tmpDate = 0;
  
    async resolveCustomEditor(
        document: PawDrawDocument,
        webviewPanel: vscode.WebviewPanel,
        _token: vscode.CancellationToken
    ): Promise<void> {
        this.tmpDate = Date.now();
        // Add the webview to our internal set of active webviews
        console.log(document.uri);
        this.webviews.add(document.uri, webviewPanel);
        //const fileName = path.basename(document.uri.fsPath,".gz");
        // Setup initial content for the webview
        webviewPanel.webview.options = {
            enableScripts: true,
        };
        const packageName = path.basename(document.uri.fsPath,".mgtoy.gz");

                
        const [name,main,index,date] =packageName.split("_");
        const NewWorkspace =  vscode.Uri.joinPath(
            vscode.workspace.getWorkspaceFolder(document.uri)!.uri,
            [name,main].join("_"));
        const myWorkspaceConfig = {name,main,index,date,src:"src"};
        const handMap = new Map<string, (e?: any) => void>();
        handMap.set('loaded',()=>{
            this.tmpDate=Date.now();
                webviewPanel.webview.postMessage({
                    gzData:document.documentData
                });
        });
        handMap.set('req',(e)=>{
            console.log(e);
            webviewPanel.webview.postMessage({                         
                init:{name:e.path  } ,                                  
            });
        });
        handMap.set('start',()=>{
            this.tmpDate = Date.now();
        });
        handMap.set('end',()=>{
            vscode.window.showInformationMessage(`waited ${String((Date.now()-this.tmpDate)/1000)} s`);
            createWorkspacePackage(
                NewWorkspace,
                this._context,
                myWorkspaceConfig, 
                ()=>{
                    webviewPanel.webview.postMessage({
                            getSrc:true
                    });
                }
            );
        });
        handMap.set('src',(message)=>{
            if (!message.name){
                vscode.window.showWarningMessage("Workspace change",{
                    modal:true,
                    detail: `Do you need to move the workspace to the ${NewWorkspace} Folder`
                },                   
                "OK").then(v=>{
                    if (v!=="OK"){return;}
                    vscode.commands.executeCommand('vscode.openFolder', NewWorkspace);
                });
                return;
            }
            vscode.workspace.fs.writeFile(
                vscode.Uri.joinPath(NewWorkspace,myWorkspaceConfig.src,message.name),
                message.code); 
        });

        setHtmlForWebview(webviewPanel.webview,
            {name,index:index+".js",main,
                extensionUri:this._context.extensionUri
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
    context: vscode.ExtensionContext,
    myWorkspaceConfig:{
        name:string,
        index:string,
        main:string,
        date:string,
        src:string},
        handleEnd?:()=>void)=>{
            
    await vscode.workspace.fs.writeFile(
        vscode.Uri.joinPath(NewWorkspace,"mgtoy.json"),
        new TextEncoder().encode(JSON.stringify(myWorkspaceConfig, null, 2)),
    );    
    await vscode.workspace.fs.copy(vscode.Uri.joinPath(context.extensionUri,"myModule","modeling"),vscode.Uri.joinPath(NewWorkspace,"node_modules","@jscad","modeling"));
    //return handleEnd;
    //vscode.workspace.fs.delete(vscode.Uri.joinPath(NewWorkspace,"node_modules","@jscad","modeling","src",))
    const cf = await vscode.workspace.fs.readFile(vscode.Uri.joinPath(context.extensionUri,"myModule","modeling","package.json"));
    
    const cf_ = JSON.parse(cf.toString());
    //console.log(cf_);
    

    await vscode.workspace.fs.writeFile(
        vscode.Uri.joinPath(NewWorkspace,"package.json"),
        new TextEncoder().encode(JSON.stringify({
            name:myWorkspaceConfig.name.toLowerCase(),
            type: "module",
            main: "src/"+myWorkspaceConfig.index+".js",
            version: "1.0.0", 
            description:myWorkspaceConfig.name,
            private: true,
            dependencies: {
                "@jscad/modeling": cf_.version
            }
        }, null, 2)),
    );
    /*
    await vscode.workspace.fs.writeFile(
        vscode.Uri.joinPath(NewWorkspace,"package.json"),
        new TextEncoder().encode(JSON.stringify({
            compilerOptions:  {
                paths: { 
                "@jscad/modeling":["./types/modeling"]
                }
            }
        }, null, 2)),
    ); 
    */
    if (handleEnd){
        handleEnd();
    }
    
                 //vscode.workspace.fs.createDirectory(NewWorkspace);
            
};
const createWorkspacePackage = async( 
    NewWorkspace:vscode.Uri,
    context: vscode.ExtensionContext,
    myWorkspaceConfig:{
        name:string,
        index:string,
        main:string,
        date:string,
        src:string},
        handleEnd?:()=>void)=>{
    try{
        await vscode.workspace.fs.stat(NewWorkspace);
     }catch(e){
        vscode.window.showWarningMessage(`Do you need to create a Package from Gzip file '${
            [myWorkspaceConfig.name,
            myWorkspaceConfig.main,
            myWorkspaceConfig.index].join("_")}'`,"OK").then( v=>{
            if (v!=="OK"){
                return;
            }
            newWorkspacePackage(NewWorkspace,context,myWorkspaceConfig,handleEnd);
        });
         //console.log(e); 
         //vscode.workspace.getWorkspaceFolder()
      
     }
};