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
            });
        }),
        gzEditorProvider.register(context),
        STLEditorProvider.register(context)
    );
    //const treeDataProvider = new PackageDependenciesProvider();
    //vscode.window.registerTreeDataProvider('package-dependencies', treeDataProvider);
}
export function deactivate() {}