import * as vscode from 'vscode';
//import * as THREE from 'three';  
import { disposeAll } from './dispose';
import {PawDrawDocument,WebviewCollection} from './pawDrawEditor';
//import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
/**
 * Define the type of edits used in paw draw files.
 */
interface PawDrawEdit {
	readonly color: string;
	readonly stroke: ReadonlyArray<[number, number]>;
}
export class STLEditorProvider implements vscode.CustomEditorProvider<PawDrawDocument> {
    private static newPawDrawFileId = 1;
    public static register(context: vscode.ExtensionContext): vscode.Disposable {

        return vscode.window.registerCustomEditorProvider(
            STLEditorProvider.viewType, 
            new STLEditorProvider(context),
            {
                webviewOptions: {
                    retainContextWhenHidden: true, // 保持webview状态当隐藏时
                },
                supportsMultipleEditorsPerDocument: false, // 不支持同一文档多个编辑器
            });
    }

    private static readonly viewType = 'MGToy.stlPreview';
    private readonly webviews = new WebviewCollection();
    constructor(private readonly _context: vscode.ExtensionContext) { }

    async openCustomDocument(
        uri: vscode.Uri,
        openContext: { backupId?: string },
        _token: vscode.CancellationToken
    ): Promise<PawDrawDocument> {
        //console.log(uri);
        const document: PawDrawDocument = await PawDrawDocument.create(uri, openContext.backupId, {
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
        const listeners: vscode.Disposable[] = [];
        
        listeners.push(document.onDidChange(e => {
            // Tell VS Code that the document has been edited by the use.
            this._onDidChangeCustomDocument.fire({
                document,
                ...e,
            });
        }));

        listeners.push(document.onDidChangeContent(e => {
            // Update all webviews when the document changes
            for (const webviewPanel of this.webviews.get(document.uri)) {
                this.postMessage(webviewPanel, 'update', {
                    edits: e.edits,
                    content: e.content,
                });
            }
        }));

        document.onDidDispose(() => disposeAll(listeners));

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
        //console.log(document.uri);
        this.webviews.add(document.uri, webviewPanel);

        // Setup initial content for the webview
        webviewPanel.webview.options = {
            enableScripts: true,
        };
        webviewPanel.webview.html = this.getHtmlForWebview(webviewPanel.webview);

        webviewPanel.webview.onDidReceiveMessage(e => this.onMessage(document, e));

        // Wait for the webview to be properly ready before we init
        webviewPanel.webview.onDidReceiveMessage(message => {
            console.log(message);
            switch (message.type) {
                case 'loaded':
                    this.loadSTL(document, webviewPanel);
                    break;
                case 'loadend':
                    webviewPanel.webview.postMessage({
                        type:"end"
                    });
                    if (message.time){
                        const nowDate = Date.now();
                        console.log((nowDate-message.time)/1000,(nowDate-this.tmpDate)/1000);
                    }
                    
                    break;
                case 'error':
                    vscode.window.showErrorMessage(message.text);
                    break;
            }
        });
        /*
        webviewPanel.webview.onDidReceiveMessage(e => {
            if (e.type === 'ready') {
                if (document.uri.scheme === 'untitled') {
                    this.postMessage(webviewPanel, 'init', {
                        untitled: true,
                        editable: true,
                    });
                } else {
                    const editable = vscode.workspace.fs.isWritableFileSystem(document.uri.scheme);

                    this.postMessage(webviewPanel, 'init', {
                        value: document.documentData,
                        editable,
                    });
                }
            }
        });
        */
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

/*
    public async resolveCustomTextEditor(
        document: vscode.TextDocument,
        webviewPanel: vscode.WebviewPanel,
        _token: vscode.CancellationToken
    ): Promise<void> {
        console.log(document);
        webviewPanel.webview.options = {
            enableScripts: true,
        };

        webviewPanel.webview.html = this.getHtmlForWebview(webviewPanel.webview);
        //console.log("run");
        // 处理来自webview的消息
        webviewPanel.webview.onDidReceiveMessage(message => {
            switch (message.type) {
                case 'loaded':
                    this.loadSTL(document, webviewPanel);
                    break;
                case 'error':
                    vscode.window.showErrorMessage(message.text);
                    break;
            }
        });
    }
*/
    private async loadSTL(document: PawDrawDocument, webviewPanel: vscode.WebviewPanel) {
        try {
            //console.log(document);
            const uri = document.uri;
            webviewPanel.webview.postMessage({
                type:"start",
                time:Date.now()
            });
            const buffer = await vscode.workspace.fs.readFile(uri);
            webviewPanel.webview.postMessage({
                type:"stlData" ,
                data:  buffer.buffer
            });
            //webviewPanel.webview.postMessage({
            //    type:"end"
            //});
        } catch (error) {
            vscode.window.showErrorMessage(`无法读取STL文件: ${error}`);
        }
    }
    private getHtmlForWebview(webview: vscode.Webview): string {

    const cspSource = webview.cspSource; 
    const scriptUri = webview.asWebviewUri(
        vscode.Uri.joinPath(this._context.extensionUri,  'webview', 'stlWebview.js')
      ); 
    const styleUri = webview.asWebviewUri(
        vscode.Uri.joinPath(this._context.extensionUri,  'webview', 'assets', 'main.css')
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
/*
        const scriptUri = webview.asWebviewUri(vscode.Uri.joinPath(
            this._context.extensionUri, 'media', 'main.js'
        ));
        
        const threeUri = webview.asWebviewUri(vscode.Uri.joinPath(
            this._context.extensionUri, 'node_modules', 'three', 'build', 'three.core.min.js'
        ));
        
        const stlLoaderUri = webview.asWebviewUri(vscode.Uri.joinPath(
            this._context.extensionUri,'node_modules', 'three','examples','jsm','loaders', 'STLLoader.js'
        ));

        return `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>STL Viewer</title>
                <style>
                    body {
                        margin: 0;
                        padding: 0;
                        overflow: hidden;
                        background-color: var(--vscode-editor-background);
                    }
                    #container {
                        width: 100vw;
                        height: 100vh;
                    }
                    #info {
                        position: absolute;
                        top: 10px;
                        left: 10px;
                        background: rgba(0,0,0,0.7);
                        color: white;
                        padding: 10px;
                        border-radius: 5px;
                        font-family: Arial, sans-serif;
                        font-size: 12px;
                    }
                </style>
            </head>
            <body>
                <div id="container"></div>
                <div id="info">Loading...</div>
                <script src="${threeUri}"></script>
                <script src="${stlLoaderUri}"></script>
                <script src="${scriptUri}"></script>
            </body>
            </html>`;
            */
    }
    private _requestId = 1;
    private readonly _callbacks = new Map<number, (response: any) => void>();

    private postMessageWithResponse<R = unknown>(panel: vscode.WebviewPanel, type: string, body: any): Promise<R> {
        const requestId = this._requestId++;
        const p = new Promise<R>(resolve => this._callbacks.set(requestId, resolve));
        panel.webview.postMessage({ type, requestId, body });
        return p;
    }

    private postMessage(panel: vscode.WebviewPanel, type: string, body: any): void {
        panel.webview.postMessage({ type, body });
    }

    private onMessage(document: PawDrawDocument, message: any) {
        switch (message.type) {
            case 'stroke':
                document.makeEdit(message as PawDrawEdit);
                return;

            case 'response':
                {
                    const callback = this._callbacks.get(message.requestId);
                    callback?.(message.body);
                    return;
                }
        }
    }
}