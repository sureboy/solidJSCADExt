import * as vscode from 'vscode'; 
import { gzEditorProvider } from './gzEditorProvider';  
import { EditorProvider } from './editorProvider';  
import { startServer } from './bundleServer'; 
import {stopServer,CreateSolidjscadPackage} from './initConfig';
import {handleConfigJsonFileEvent} from './watchServer'; 

export function activate(context: vscode.ExtensionContext) {
    vscode.window.showInformationMessage("solidJScad: Begin");    
    //console.log(vscode.workspace.getConfiguration("init").get("in"));
    startServer(context);  
    context.subscriptions.push( 
        vscode.workspace.onDidSaveTextDocument(handleConfigJsonFileEvent), 
        vscode.commands.registerCommand('solidJScad.stop', () => {
            //watcherServer(context);
            stopServer();
        }),  
        vscode.commands.registerCommand('solidJScad.onload', () => {
            //stopServer();
            startServer(context);
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
        EditorProvider.register(context,"stl"),
        EditorProvider.register(context,'3mf')
    );
    //const treeDataProvider = new PackageDependenciesProvider();
    //vscode.window.registerTreeDataProvider('package-dependencies', treeDataProvider);
}
export function deactivate() {}