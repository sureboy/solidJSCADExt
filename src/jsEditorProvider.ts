import * as vscode from 'vscode';
import * as path from 'path';
export class jsEditorProvider implements vscode.CustomTextEditorProvider {
    private static readonly viewType = 'MGToy.jsPreview';
    public static register(context: vscode.ExtensionContext): vscode.Disposable {
		const provider = new jsEditorProvider(context);
		const providerRegistration = vscode.window.registerCustomEditorProvider(jsEditorProvider.viewType, provider);
		return providerRegistration;
	}
    constructor(
		private readonly context: vscode.ExtensionContext
	) { }
    tmpDate = 0;
    public async resolveCustomTextEditor(
		document: vscode.TextDocument,
		webviewPanel: vscode.WebviewPanel,
		_token: vscode.CancellationToken
	): Promise<void> {
        this.tmpDate = Date.now();
		// Setup initial content for the webview
		webviewPanel.webview.options = {
			enableScripts: true,
		};
		webviewPanel.webview.html = this.getHtmlForWebview(webviewPanel.webview );
    const basename = path.basename(document.fileName);
		function updateWebview() {
            //webviewPanel.webview.postMessage({
            //    code:document.getText()
            //});
            //return;
            //console.log(document.fileName);
            vscode.window.showInformationMessage(basename,"perview waitting");
            vscode.workspace.fs.readFile(document.uri).then(buffer=>{
                webviewPanel.webview.postMessage({                
                    code: buffer.buffer,
                    basename:path.basename(basename,'.mgtoy.js')
                });
            });
		}
		const changeDocumentSubscription = vscode.workspace.onDidChangeTextDocument(e => {
			if (e.document.uri.toString() === document.uri.toString()) {
        this.tmpDate = Date.now();
        
                
				updateWebview();
			}
		});

		// Make sure we get rid of the listener when our editor is closed.
		webviewPanel.onDidDispose(() => {
			changeDocumentSubscription.dispose();
		});

		// Receive message from the webview.
		webviewPanel.webview.onDidReceiveMessage(e => {
            console.log(e);
			switch (e.type) {
				case 'loaded':
                    //console.log("begin",(Date.now()-this.tmpDate)/1000);
                    updateWebview();
                    //console.log( document.getText());
					//this.addNewScratch(document);
                    //webviewPanel.webview.postMessage({
                    //    code:document.getText()
                    //});
					break;
                case 'end':
                    //console.log("begin",(Date.now()-this.tmpDate)/1000);
                    vscode.window.showInformationMessage(basename,"waited",String((Date.now()-this.tmpDate)/1000));
                    break;
 
			}
		});

		//updateWebview();
	}
     private getHtmlForWebview(webview: vscode.Webview ): string {
    
        const cspSource = webview.cspSource; 
        const scriptUri = webview.asWebviewUri(
            vscode.Uri.joinPath(this.context.extensionUri,  'webviewCode', 'webview.js')
          ); 
        const styleUri = webview.asWebviewUri(
            vscode.Uri.joinPath(this.context.extensionUri,  'webviewCode', 'assets', 'main.css')
        );
     
        return`<!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" /> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="Content-Security-Policy" content="
        default-src 'none';
        script-src ${cspSource} 'unsafe-inline';
        style-src ${cspSource} 'unsafe-inline'; 
        worker-src ${cspSource} blob: data:;
        connect-src ${cspSource} 'unsafe-inline';
      ">
        <title>Vite + Svelte</title>
        <link rel="stylesheet" href="${styleUri}">
      </head>
      <body>
      <script>window.vscode = acquireVsCodeApi();</script>
        <div id="app"></div>
        <script type="module" src="${scriptUri}"> </script>
        
      </body>
    </html>`;
     }
}