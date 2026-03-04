import * as vscode from 'vscode';
import { STLEditorProvider } from './STLEditorProvider';
import { gzEditorProvider } from './gzEditorProvider';  
import { watcherServer,CreateSolidjscadPackage } from './bundleServer'; 
import * as path from 'path'; 
function isTargetFile(fileName: string): boolean {
    const baseName = path.basename(fileName);
    return baseName === 'solidjscad.json' ;
}

const  handleConfigJsonFileEvent = (document: vscode.TextDocument)=>{
    if (!isTargetFile(document.fileName)) {
        return;
    }
    //const confFilePath = vscode.workspace.getWorkspaceFolder(document.uri);
    if (!vscode.workspace.getWorkspaceFolder(document.uri)){
        //console.log("open",document.uri,path.dirname(document.uri.fsPath));
        vscode.window.showOpenDialog({
            //openLabel:"open ",
            canSelectFiles:false,
            canSelectMany:false,
            defaultUri:vscode.Uri.parse(path.dirname(document.uri.fsPath))
        });
        //vscode.commands.executeCommand('vscode.openFolder',vscode.Uri.parse(path.dirname(document.uri.fsPath)) );
        //vscode.workspace.open
        return;
    }else{
        vscode.commands.executeCommand('solidJScad.onload');
    }
};
export function activate(context: vscode.ExtensionContext) {
    vscode.window.showInformationMessage("solidJScad: Begin");    
    //console.log(vscode.workspace.getConfiguration("init").get("in"));
    watcherServer(context);  
    context.subscriptions.push( 
        vscode.workspace.onDidSaveTextDocument(handleConfigJsonFileEvent), 
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