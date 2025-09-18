import * as vscode from 'vscode';
import { STLEditorProvider } from './STLEditorProvider';
import { jsEditorProvider } from './jsEditorProvider'; 
import { rollup } from 'rollup';

const test = (context: vscode.ExtensionContext)=>{
    vscode.workspace.findFiles('**/mgtoy.json', null, 1).then(files=>{
        if (files.length === 0) {
            return;
        }
        const u = files[0];
        vscode.workspace.fs.readFile(u).then(v=>{
            const config = JSON.parse(v.toString());
            if (!config.watcher){
                return;
            }           
            //const pattern = new vscode.RelativePattern(vscode.Uri.joinPath(vscode.workspace.getWorkspaceFolder(u)!.uri,config.watcher), '**/*.js');
            const watcher = vscode.workspace.createFileSystemWatcher(
                new vscode.RelativePattern(vscode.Uri.joinPath(vscode.workspace.getWorkspaceFolder(u)!.uri,config.watcher), '**/*.js')
            );
            context.subscriptions.push(watcher);
            watcher.onDidCreate(uri => {
                vscode.window.showInformationMessage(`文件已创建: ${uri.fsPath}`);
                console.log('文件创建:', uri.fsPath);
            });
        
            // 监听文件更改事件
            watcher.onDidChange(uri => {
                vscode.window.showInformationMessage(`文件已修改: ${uri.fsPath}`);
                console.log('文件更改:', uri.fsPath);
            });
        
            // 监听文件删除事件
            watcher.onDidDelete(uri => {
                vscode.window.showInformationMessage(`文件已删除: ${uri.fsPath}`);
                console.log('文件删除:', uri.fsPath);
            });
        });
        //hand( files[0] ); 
        
    });
};
export function activate(context: vscode.ExtensionContext) {
    //vscode.window.showInformationMessage("mgtoy: Begin");
 
   
    //test(context);
    context.subscriptions.push(
        jsEditorProvider.register(context),
        STLEditorProvider.register(context)
    );     
}

export function deactivate() {}