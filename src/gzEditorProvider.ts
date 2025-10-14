import * as vscode from 'vscode';
import * as path from 'path';
import {PawDrawDocument,WebviewCollection} from './pawDrawEditor';

interface PawDrawEdit {
	readonly color: string;
	readonly stroke: ReadonlyArray<[number, number]>;
}
export class gzEditorProvider implements vscode.CustomEditorProvider<PawDrawDocument> {
    private static newPawDrawFileId = 1;
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
        /*
        console.log(uri);
        const fileName = path.basename(uri.fsPath,".gz");
        vscode.window.showInformationMessage("create MGtoy package",{modal:true,detail:`Do you need to create a new package from ${fileName}?` },"ok").then(msg=>{
          //console.log(msg);
          if (msg==="ok"){
            const workspacePath = vscode.workspace.getWorkspaceFolder(uri)!.uri;            
            vscode.workspace.fs.createDirectory(vscode.Uri.joinPath(workspacePath,fileName,"src"));
          }
        });
        //return;
        */
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
        const myWorkspaceConfig = {name,index,main,date,src:"src"};

        webviewPanel.webview.html = this.getHtmlForWebview(webviewPanel.webview,{name,index:index+".js",main});

        //webviewPanel.webview.onDidReceiveMessage(e => this.onMessage(document, e));

        // Wait for the webview to be properly ready before we init
        const createWorkspacePackage = async()=>{
            try{
                await vscode.workspace.fs.stat(NewWorkspace);
             }catch(e){
                 console.log(e);
                 vscode.window.showWarningMessage(`Do you need to create a Package from Gzip file '${packageName}'`,"OK").then(v=>{
                     if (v!=="OK"){
                         return;
                     }
                     webviewPanel.webview.postMessage({
                         getSrc:true
                     });
                     vscode.workspace.fs.writeFile(
                        vscode.Uri.joinPath(NewWorkspace,"mgtoy.json"),
                        new TextEncoder().encode(JSON.stringify(myWorkspaceConfig, null, 2)),
                     );
                     vscode.workspace.fs.writeFile(
                        vscode.Uri.joinPath(NewWorkspace,"package.json"),
                        new TextEncoder().encode(JSON.stringify({
                            name:name.toLowerCase(),
                            type: "module",
                            main: "src/"+index+".js",
                            version: "1.0.0", 
                            description:name,
                            private: true,
                            dependencies: {
                                "@jscad/modeling": "^2.12.5"
                            }
                        }, null, 2)),
                     );

                     //vscode.workspace.fs.createDirectory(NewWorkspace);
                 });
             }
        };
        webviewPanel.webview.onDidReceiveMessage(message => {
            console.log(message);
            switch (message.type) {
                case 'loaded':
                    this.tmpDate=Date.now();
                    webviewPanel.webview.postMessage({
                        gzData:document.documentData
                    });
                    //this.postMessage(webviewPanel,"gzData",document.documentData);
                    //this.loadGz(document, webviewPanel);
                    break; 
                case 'start':
                    this.tmpDate = Date.now();
                    break; 
                case 'end':
                    //console.log("begin",(Date.now()-this.tmpDate)/1000);
                    vscode.window.showInformationMessage(`waited ${String((Date.now()-this.tmpDate)/1000)} s`);
                    createWorkspacePackage();
                    
                    break;
                case 'src':
                    if (!message.name){
                        vscode.window.showWarningMessage(
                            `Do you need to move the workspace to the ${packageName} Folder`,
                            "OK").then(v=>{
                            if (v!=="OK"){return;}
                            vscode.commands.executeCommand('vscode.openFolder', NewWorkspace);
                        });
                        return;
                    }
                    vscode.workspace.fs.writeFile(
                        vscode.Uri.joinPath(NewWorkspace,myWorkspaceConfig.src,message.name),
                        message.code); 
                    break;
                case 'log':
                    //console.log(e.msg);
                    vscode.window.showInformationMessage( message.msg.join('\n') );
                    break;
                case 'error':
                    vscode.window.showErrorMessage("err" ,{modal:true,detail:JSON.stringify(message.msg) });
                    break; 
            }
        });
 
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

    private getHtmlForWebview(webview: vscode.Webview,config:{name:string,index:string,main:string}): string {
 const csp = `
    default-src 'none';
    script-src 'self' ${webview.cspSource} 'unsafe-inline';
    worker-src ${webview.cspSource} blob: data:;
    style-src ${webview.cspSource} 'unsafe-inline';
    connect-src ${webview.cspSource} 'unsafe-inline';
    `;
    //const mainScr = panel.webview.asWebviewUri(
    //    vscode.Uri.joinPath( outPath,  'index.js')
    //);
    const csgChange =  webview.asWebviewUri(
      vscode.Uri.joinPath( this._context.extensionUri,  'myModule', 'csgChange.js')
    );
    const modelingurl = webview.asWebviewUri(
        vscode.Uri.joinPath(this._context.extensionUri,  'myModule', 'modeling.esm.js')
      ); 
    const scriptUri = webview.asWebviewUri(
             vscode.Uri.joinPath(this._context.extensionUri,  'webviewCode', 'webview.js')
    ); 

    const styleUri = webview.asWebviewUri(
        vscode.Uri.joinPath(this._context.extensionUri,  'webviewCode', 'assets', 'main.css')
    ); 
    
 
    return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" /> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="Content-Security-Policy" content="${csp}">
    <title>${config.name||"mgtoy"}</title> 
    <link rel="stylesheet" href="${styleUri}">
  </head>
  <body>
  <script>window.vscode = acquireVsCodeApi();
  window.includeImport ={
    "@jscad/modeling":"${modelingurl}",
    "csgChange":"${csgChange}",
  }
    window.myConfig={name:"${config.name||"mgtoy"}",index:"${config.index||"index.js"}",main:"${config.main||"main"}"}
  </script>

    <div id="app" ></div>   
 <script type="module" src="${scriptUri}"> </script>
 
  </body>
</html>   
`; 
 
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