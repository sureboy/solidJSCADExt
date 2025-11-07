import * as vscode from 'vscode';
//import * as THREE from 'three';  
//import { disposeAll } from './dispose';
//import {gzEditorProvider} from './gzEditorProvider';
import {PawDrawDocument,WebviewCollection,setHtmlForWebview} from './pawDrawEditor';
import {workerspaceMessageHandMap,initLoad,RunHttpServer} from './bundleServer';
import type {postTypeStr} from './bundleServer';
//import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
//import {postTypeTag} from './util';
/**
 * Define the type of edits used in paw draw files.
 */
const postTypeTag = new Map<postTypeStr,number>();
export class STLEditorProvider   implements vscode.CustomEditorProvider<PawDrawDocument> {
 
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

    private static readonly viewType = 'solidJScad.stlPreview';
    private readonly webviews = new WebviewCollection();
    constructor(private readonly _context: vscode.ExtensionContext) {  }

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
        

        return document;
    }
    //private tmpDate = 0;
    async resolveCustomEditor(
        document: PawDrawDocument,
        webviewPanel: vscode.WebviewPanel,
        _token: vscode.CancellationToken
    ): Promise<void> {
        //this.tmpDate = Date.now();
        // Add the webview to our internal set of active webviews
        //console.log(document.uri);
        this.webviews.add(document.uri, webviewPanel);
        const config = {extensionUri:this._context.extensionUri,
            name:"stlpreview",in:"index.js",func:"main",pageType:'stlData' as "run" | "gzData" | "stlData",};

        // Setup initial content for the webview
        webviewPanel.webview.options = {
            enableScripts: true,
        };
        //const serv = RunHttpServer({port:vscode.workspace.getConfiguration("init").get("port"),...config});
        const handMap =workerspaceMessageHandMap( 
            postTypeTag,
            webviewPanel.webview.postMessage,
            undefined,
            //serv,
            //RunHttpServer({port:vscode.workspace.getConfiguration("init").get("port"),...config})
        );// new Map<string,(e?:any)=>void>();
        handMap.set("loaded",(e:{msg:string})=>{
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
            this.loadSTL(document, webviewPanel);
            */
        });
        /*
        handMap.set("start",()=>{this.tmpDate = Date.now();});
        handMap.set("end",()=>{
            vscode.window.showInformationMessage(`waited ${String((Date.now()-this.tmpDate)/1000)} s`);
        });
        */
        setHtmlForWebview(
            webviewPanel.webview,
             config,
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
 /*
    private async loadSTL(document: PawDrawDocument, webviewPanel: vscode.WebviewPanel) {
        try {
            //console.log(document);
            const uri = document.uri;
 
            const buffer = await vscode.workspace.fs.readFile(uri);
            webviewPanel.webview.postMessage({
                //type:"stlData" ,
                type:postTypeTag.get("stlData"),
                //time:Date.now(),
                msg: {db:buffer.buffer}
            });
            //webviewPanel.webview.postMessage({
            //    type:"end"
            //});
        } catch (error) {
            vscode.window.showErrorMessage(`无法读取STL文件: ${error}`);
        }
    } 
        */
    private _requestId = 1;
    private readonly _callbacks = new Map<number, (response: any) => void>();

    private postMessageWithResponse<R = unknown>(panel: vscode.WebviewPanel, type: string, body: any): Promise<R> {
        const requestId = this._requestId++;
        const p = new Promise<R>(resolve => this._callbacks.set(requestId, resolve));
        panel.webview.postMessage({ type, requestId, body });
        return p;
    }
     
}