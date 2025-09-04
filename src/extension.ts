import * as vscode from 'vscode';
import { STLEditorProvider } from './STLEditorProvider';
import { jsEditorProvider } from './jsEditorProvider';
export function activate(context: vscode.ExtensionContext) {
    //vscode.window.showInformationMessage("mgtoy: Begin");
 
    context.subscriptions.push(
        jsEditorProvider.register(context),
        STLEditorProvider.register(context)
    );     
}

export function deactivate() {}