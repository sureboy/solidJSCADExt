import * as vscode from 'vscode';
import { STLEditorProvider } from './STLEditorProvider';
import { gzEditorProvider } from './gzEditorProvider'; 
//import {newWorkspacePackage} from './pawDrawEditor';
import { watcherServer,CreateSolidjscadPackage } from './bundleServer'; 
//import * as path from "path";
//import { treeDataProvider } from './httpServer';
//import type {SerConfig} from './httpServer';
 
export function activate(context: vscode.ExtensionContext) {
    vscode.window.showInformationMessage("solidJScad: Begin");    
    //console.log(vscode.workspace.getConfiguration("init").get("in"));
    watcherServer(context);
 
    context.subscriptions.push(   

        vscode.commands.registerCommand('solidJScad.onload', () => {
            watcherServer(context);
        }),   
        //vscode.commands.registerCommand('solidJScad.stopHttp', stopHttpServer),
        vscode.commands.registerCommand('solidJScad.create', () => {
            //vscode.window.showSaveDialog({}).then(uri=>{
            vscode.window.showOpenDialog({
                openLabel:"Create a solidJScad package",
                canSelectFiles:false,
                canSelectFolders:true,
                canSelectMany:false}).then(uris=>{
                if (!uris || uris.length===0){return;}
                const uri = uris[0];
                CreateSolidjscadPackage(uri,context).then(()=>{
                    vscode.commands.executeCommand('vscode.openFolder', uri);  
                });
                /*
                const conf = vscode.workspace.getConfiguration("init");
                newWorkspacePackage(
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
                    },
                    ()=>{
                        vscode.workspace.fs.copy(
                            vscode.Uri.joinPath(context.extensionUri,"myModule","node","lib","csgChange.js"),
                            vscode.Uri.joinPath(uri,"src","lib","csgChange.js")
                        );
                        vscode.workspace.fs.copy(
                            vscode.Uri.joinPath(context.extensionUri,"myModule","node","lib","modeling.esm.js"),
                            vscode.Uri.joinPath(uri,"src","lib","modeling.esm.js")
                        );
                        vscode.workspace.fs.writeFile(
                            vscode.Uri.joinPath(uri,"src","index.js"),
                        new TextEncoder().encode(
                            "import modeling from '@jscad/modeling';\nexport const main=()=>{\n  return modeling.primitives.cube()\n}")
                        ).then(()=>{
                            vscode.commands.executeCommand('vscode.openFolder', uri); 
                        });
                    }
                );*/
            });
        }),
        gzEditorProvider.register(context),
        STLEditorProvider.register(context)
    );
    //const treeDataProvider = new PackageDependenciesProvider();
    //vscode.window.registerTreeDataProvider('package-dependencies', treeDataProvider);
}
export function deactivate() {}