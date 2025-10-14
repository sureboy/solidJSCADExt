import * as vscode from 'vscode';
import { STLEditorProvider } from './STLEditorProvider';
import { gzEditorProvider } from './gzEditorProvider'; 
import { watcherServer } from './bundleServer'; 
 
export function activate(context: vscode.ExtensionContext) {
    vscode.window.showInformationMessage("mgtoy: Begin");
 
   
    watcherServer(context);
    context.subscriptions.push(
        gzEditorProvider.register(context),
        STLEditorProvider.register(context)
    );     
}

export function deactivate() {}