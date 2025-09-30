import * as vscode from 'vscode';
import { STLEditorProvider } from './STLEditorProvider';
import { jsEditorProvider } from './jsEditorProvider'; 
import { watcherServer } from './bundleServer'; 
 
export function activate(context: vscode.ExtensionContext) {
    vscode.window.showInformationMessage("mgtoy: Begin");
 
   
    watcherServer(context);
    context.subscriptions.push(
        jsEditorProvider.register(context),
        STLEditorProvider.register(context)
    );     
}

export function deactivate() {}