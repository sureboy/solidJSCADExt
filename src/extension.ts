import * as vscode from 'vscode';
import { STLEditorProvider } from './STLEditorProvider';
import { gzEditorProvider,newWorkspacePackage } from './gzEditorProvider'; 
import { watcherServer } from './bundleServer'; 
import * as path from "path";
//import { stopHttpServer } from './httpServer';

   
export function activate(context: vscode.ExtensionContext) {
    vscode.window.showInformationMessage("mgtoy: Begin");
    
    watcherServer(context);
    context.subscriptions.push(
     
        //vscode.commands.registerCommand('mgtoy.stopServer', stopHttpServer),
         
        
        vscode.commands.registerCommand('mgtoy.create', () => {
            //console.log(args);
            vscode.window.showSaveDialog({}).then(uri=>{
                console.log(uri);

                if (!uri){return;}
                newWorkspacePackage(
                    uri,
                    context,
                    {name:path.basename(uri.fsPath),index:"index.js",main:"main",date:"",src:"src",port:3000},
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
            /*
            vscode.window.showInputBox({title:"Create a new MGtoy package name",value:"mgtoyPackage"}).then(v=>{
                console.log(v);
                createWorkspacePackage({
                    NewWorkspace:vscode.
                })
            });
            */
            //vscode.window.showInformationMessage("create a new MGtoy package");

            //webViewManager.createOrShowWebView(  uri || vscode.window.activeTextEditor?.document.uri); 
        }),
        gzEditorProvider.register(context),
        STLEditorProvider.register(context)
    );     
}

export function deactivate() {}