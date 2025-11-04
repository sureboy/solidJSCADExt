import * as vscode from 'vscode';
import { STLEditorProvider } from './STLEditorProvider';
import { gzEditorProvider,newWorkspacePackage } from './gzEditorProvider'; 
import { watcherServer,stopHttpServer,reload } from './bundleServer'; 
import * as path from "path";
//import { stopHttpServer } from './httpServer';

   
export function activate(context: vscode.ExtensionContext) {
    vscode.window.showInformationMessage("mgtoy: Begin");    
    watcherServer(context);
    context.subscriptions.push(     
        vscode.commands.registerCommand('mgtoy.stopHttp', stopHttpServer),
        vscode.commands.registerCommand('mgtoy.reload', reload),
        vscode.commands.registerCommand('mgtoy.open', ()=>{
            vscode.window.showOpenDialog({
                canSelectFiles:false,
                canSelectFolders:true
            }).then(uri=>{
                console.log(uri);
            });
        }),
        vscode.commands.registerCommand('mgtoy.create', () => {
            //console.log(args);
            vscode.window.showSaveDialog({}).then(uri=>{
                console.log(uri);
                if (!uri){return;}
                newWorkspacePackage(
                    uri,
                    context,
                    {webview:true,name:path.basename(uri.fsPath),index:"index.js",main:"main",date:"",src:"src",port:3000},
                    ()=>{
                        vscode.workspace.fs.copy(
                            vscode.Uri.joinPath(context.extensionUri,"myModule","csgChange.js"),
                            vscode.Uri.joinPath(uri,"src","lib","csgChange.js")
                        );
                        vscode.workspace.fs.copy(
                            vscode.Uri.joinPath(context.extensionUri,"myModule","modeling.esm.js"),
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
                );
            });
        }),
        gzEditorProvider.register(context),
        STLEditorProvider.register(context)
    );     
}

export function deactivate() {}