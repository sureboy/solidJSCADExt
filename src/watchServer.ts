import type {postTypeStr,HandMessageFuncMap} from './util';
import * as vscode from 'vscode';
import * as path from 'path';
import {CommandConfig,runCommand} from './IPCMessageHandle';

const updatefile = (
    uri:vscode.Uri,
    name:string,postmsg:(e:any)=>void,
    TypeTag:Map<postTypeStr,number> )=>{
    vscode.workspace.fs.readFile(uri).then(db=>{      
            const msg={
                db:  db.buffer as ArrayBuffer,
                name 
            };
            postmsg({  
                type:(TypeTag.get("init")||0)|(TypeTag.get("run") ||0 ),
                msg                   
            });
        }); 
};
export const watchInit = (conf:{ 
    //command?:string;
    handMap:HandMessageFuncMap,
    watchPath: vscode.Uri; 
    TypeTag:Map<postTypeStr,number> 
}, postMessage:((message: {type?:number,msg:{db?:ArrayBuffer,name?:string }}) => void))=>{
    const watcher = vscode.workspace.createFileSystemWatcher(
        new vscode.RelativePattern(conf.watchPath , '**/*')
    );
    watcher.onDidChange(uri => { 
        let name = path.relative(
            vscode.workspace.asRelativePath(conf.watchPath),
            vscode.workspace.asRelativePath(uri)
        );
        if (!name.startsWith("./")){
            name = "./"+name;
        }
        vscode.window.showInformationMessage(`Change: ${name}`);
        if (CommandConfig.isRun) {
              const start = conf.handMap.get("start");
                if (start){
                    start({},postMessage);
                }
            runCommand(conf.TypeTag).then(db=>{
                postMessage(db);
            }).catch(e=>{
                console.error(e);
                const err = conf.handMap.get("error");
                if (err){
                    err({error:e},postMessage);
                }
                //updatefile(uri,name,postMessage,conf.TypeTag);

            });
            //console.log(conf.command);
            return;
        }else{
            updatefile(uri,name,postMessage,conf.TypeTag);
        }                  
    });        
    // 监听文件删除事件
    watcher.onDidDelete(uri => {
        let name = path.relative(
            vscode.workspace.asRelativePath(conf.watchPath),
            vscode.workspace.asRelativePath(uri)
        );
        if (!name.startsWith("./")){
            name = "./"+name;
        }
        //const name = path.relative(config.watchPath.fsPath,uri.fsPath);
       
        
        //panel.webview.postMessage({
        postMessage({
            type:conf.TypeTag.get("del"),
            msg:{
                name:path.basename(uri.fsPath)
            }
        });
        vscode.window.showInformationMessage(`Delete: ${name}`); 
    });

    return watcher;
};
function isTargetFile(fileName: string): boolean {
    const baseName = path.basename(fileName);
    return baseName === 'solidjscad.json' ;
}

export const  handleConfigJsonFileEvent = (document: vscode.TextDocument)=>{
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