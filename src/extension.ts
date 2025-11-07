import * as vscode from 'vscode';
import { STLEditorProvider } from './STLEditorProvider';
import { gzEditorProvider,newWorkspacePackage } from './gzEditorProvider'; 
import { watcherServer } from './bundleServer'; 
import * as path from "path";
//import { stopHttpServer } from './httpServer';

   
export function activate(context: vscode.ExtensionContext) {
    vscode.window.showInformationMessage("solidJScad: Begin");    
    console.log(vscode.workspace.getConfiguration("init").get("in"));
    watcherServer(context);
    context.subscriptions.push(     
        //vscode.commands.registerCommand('solidJScad.stopHttp', stopHttpServer),
        vscode.commands.registerCommand('solidJScad.create', () => {
            vscode.window.showSaveDialog({}).then(uri=>{
                if (!uri){return;}
                const conf = vscode.workspace.getConfiguration("init");
                newWorkspacePackage(
                    uri,
                    context,
                    { name:path.basename(uri.fsPath),
                        in:conf.get("in")||"index.js",
                        func:conf.get("func")||"main",
                        date:"",
                        src:conf.get("src")||"src",
                        port:conf.get("port")||3000,
                        webview:conf.get("webview")||true,
                    },
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