import * as vscode from 'vscode';
import { Disposable } from './dispose';
import {getNonce} from './util';


/**
 * Define the type of edits used in paw draw files.
 */
interface PawDrawEdit {
	readonly color: string;
	readonly stroke: ReadonlyArray<[number, number]>;
}

interface PawDrawDocumentDelegate {
	getFileData(): Promise<Uint8Array>;
}
 
/**
 * Define the document (the data model) used for paw draw files.
 */
export class PawDrawDocument extends Disposable implements vscode.CustomDocument {

	static async create(
		uri: vscode.Uri,
		backupId: string | undefined,
		delegate: PawDrawDocumentDelegate,
	): Promise<PawDrawDocument | PromiseLike<PawDrawDocument>> {
		// If we have a backup, read that. Otherwise read the resource from the workspace
		const dataFile = typeof backupId === 'string' ? vscode.Uri.parse(backupId) : uri;
		const fileData = await PawDrawDocument.readFile(dataFile);
		return new PawDrawDocument(uri, fileData, delegate);
	}

	private static async readFile(uri: vscode.Uri): Promise<Uint8Array> {
		if (uri.scheme === 'untitled') {
			return new Uint8Array();
		}
		return new Uint8Array(await vscode.workspace.fs.readFile(uri));
	}

	private readonly _uri: vscode.Uri;

	private _documentData: Uint8Array;
	private _edits: PawDrawEdit[] = [];
	private _savedEdits: PawDrawEdit[] = [];

	private readonly _delegate: PawDrawDocumentDelegate;

	private constructor(
		uri: vscode.Uri,
		initialContent: Uint8Array,
		delegate: PawDrawDocumentDelegate
	) {
		super();
		this._uri = uri;
		this._documentData = initialContent;
		this._delegate = delegate;
	}

	public get uri() { return this._uri; }

	public get documentData(): Uint8Array { return this._documentData; }

	private readonly _onDidDispose = this._register(new vscode.EventEmitter<void>());
	/**
	 * Fired when the document is disposed of.
	 */
	public readonly onDidDispose = this._onDidDispose.event;

	private readonly _onDidChangeDocument = this._register(new vscode.EventEmitter<{
		readonly content?: Uint8Array;
		readonly edits: readonly PawDrawEdit[];
	}>());
	/**
	 * Fired to notify webviews that the document has changed.
	 */
	public readonly onDidChangeContent = this._onDidChangeDocument.event;

	private readonly _onDidChange = this._register(new vscode.EventEmitter<{
		readonly label: string,
		undo(): void,
		redo(): void,
	}>());
	/**
	 * Fired to tell VS Code that an edit has occurred in the document.
	 *
	 * This updates the document's dirty indicator.
	 */
	public readonly onDidChange = this._onDidChange.event;

	/**
	 * Called by VS Code when there are no more references to the document.
	 *
	 * This happens when all editors for it have been closed.
	 */
	dispose(): void {
		this._onDidDispose.fire();
		super.dispose();
	}

	/**
	 * Called when the user edits the document in a webview.
	 *
	 * This fires an event to notify VS Code that the document has been edited.
	 */
 
	/**
	 * Called by VS Code when the user saves the document.
	 */
	async save(cancellation: vscode.CancellationToken): Promise<void> {
		await this.saveAs(this.uri, cancellation);
		this._savedEdits = Array.from(this._edits);
	}

	/**
	 * Called by VS Code when the user saves the document to a new location.
	 */
	async saveAs(targetResource: vscode.Uri, cancellation: vscode.CancellationToken): Promise<void> {
		const fileData = await this._delegate.getFileData();
		if (cancellation.isCancellationRequested) {
			return;
		}
		await vscode.workspace.fs.writeFile(targetResource, fileData);
	}

	/**
	 * Called by VS Code when the user calls `revert` on a document.
	 */
	async revert(_cancellation: vscode.CancellationToken): Promise<void> {
		const diskContent = await PawDrawDocument.readFile(this.uri);
		this._documentData = diskContent;
		this._edits = this._savedEdits;
		this._onDidChangeDocument.fire({
			content: diskContent,
			edits: this._edits,
		});
	}

	/**
	 * Called by VS Code to backup the edited document.
	 *
	 * These backups are used to implement hot exit.
	 */
	async backup(destination: vscode.Uri, cancellation: vscode.CancellationToken): Promise<vscode.CustomDocumentBackup> {
		await this.saveAs(destination, cancellation);

		return {
			id: destination.toString(),
			delete: async () => {
				try {
					await vscode.workspace.fs.delete(destination);
				} catch {
					// noop
				}
			}
		};
	}
}
/**
 * Tracks all webviews.
 */
export class WebviewCollection {

	private readonly _webviews = new Set<{
		readonly resource: string;
		readonly webviewPanel: vscode.WebviewPanel;
	}>();

	/**
	 * Get all known webviews for a given uri.
	 */
	public *get(uri: vscode.Uri): Iterable<vscode.WebviewPanel> {
		const key = uri.toString();
		for (const entry of this._webviews) {
			if (entry.resource === key) {
				yield entry.webviewPanel;
			}
		}
	}

	/**
	 * Add a new webview to the collection.
	 */
	public add(uri: vscode.Uri, webviewPanel: vscode.WebviewPanel) {
		const entry = { resource: uri.toString(), webviewPanel };
		this._webviews.add(entry);

		webviewPanel.onDidDispose(() => {
			this._webviews.delete(entry);
		});
	}
	
}
export const listenMessage = (message:{type:string,msg:string},handMap:Map<string,any>)=>{
	switch (message.type) {
	case 'log':
		vscode.window.showInformationMessage( message.msg  );
		break;
	case 'error':
		console.log(message);
		vscode.window.showErrorMessage( message.msg );
		break;

	default:
		if (!handMap.has(message.type)){
			return;
		}
		handMap.get(message.type)!(message);
	}		
};
export const  setHtmlForWebview = (
	webview: vscode.Webview,
	config:{
		pageType:'run'|'gzData'|'stlData',
		name:string,
		func:string,
		in:string,
		extensionUri:vscode.Uri},
	handleMessageMap:Map<string,(e?:any)=>void>
)=> {
	//webview.options.localResourceRoots=[]
	const nonce = getNonce();
	const csp = `
	   default-src 'none';
	   script-src 'self' 'nonce-${nonce}' ${webview.cspSource} 'strict-dynamic';
	   script-src-elem 'self' 'nonce-${nonce}' ${webview.cspSource} 'strict-dynamic';
	   worker-src ${webview.cspSource} blob: data:;
	   style-src ${webview.cspSource} 'unsafe-inline';
	   connect-src ${webview.cspSource} 'unsafe-inline';
	   `;
 
	   const csgChange =  webview.asWebviewUri(
		 vscode.Uri.joinPath( config.extensionUri,  'myModule', 'csgChange.js')
	   );
	   const modelingurl = webview.asWebviewUri(
		   vscode.Uri.joinPath(config.extensionUri,  'myModule', 'modeling.esm.js')
		 ); 
	   const scriptUri = webview.asWebviewUri(
				vscode.Uri.joinPath(config.extensionUri,  'webviewCode', 'webview.js')
	   ); 
   
	   const styleUri = webview.asWebviewUri(
		   vscode.Uri.joinPath(config.extensionUri,  'webviewCode', 'assets', 'main.css')
	   ); 
	 

	   	webview.onDidReceiveMessage(message => {
			listenMessage(message,handleMessageMap);	
	   	});
	
		   webview.html = `<!doctype html>
   <html lang="en">
	 <head>
	   <meta charset="UTF-8" /> 
	   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	 
		 <meta http-equiv="Content-Security-Policy" content="${csp}">
	   <title>${config.name||"solidJScad"}</title> 
	   <link rel="stylesheet" href="${styleUri}">
	 </head>
	 <body>
	 <script nonce="${nonce}" >
 
	 window.vscode = acquireVsCodeApi();
	 window.includeImport ={
	   "@jscad/modeling":"./lib/modeling.esm.js",
	   "csgChange":"./lib/csgChange.js",
	 }
	   window.myConfig={pageType:"${config.pageType||"webview"}",name:"${config.name||"solidJScad"}",in:"${config.in||"index.js"}",func:"${config.func||"main"}"}
	 </script>
   
	   <div id="app" ></div>   
	<script type="module"  nonce="${nonce}"  src="${scriptUri}"> </script>
	
	 </body>
   </html>   
   `; 
	
	   };
