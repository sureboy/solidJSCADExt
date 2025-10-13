import {getCurrent} from "./ImportParser";
import {onWindowResize,startSceneOBJ,addSceneOBJ,Exporter} from "./threeScene" ;
import { CSG2Three } from "./csg2Three";
import { vscode } from './vscodeApi';
type workerConfigType = {
  cameraType: string;
  module: (modulelist: {
      list: string[];
      basename: string;
  }) => void;
  main: string;
  index: string;
}
 
const consoleLog = `
const originalLog = console.log;
console.log = (...e)=>{
originalLog(e)
  self.postMessage({ 
    log: e
  });
}
const originalError = console.error;
console.error = (...e)=>{
originalError(e)
  self.postMessage({ 
    error: e
  });
}
try{
`;
const consoleLogEnd=`}catch(error){        
    console.error(error)
    self.postMessage({ 
    end:true
    });
};`;
let worker: Worker|null; 
const getBaseUrl = (config:{main:string,index:string})=>{
  return URL.createObjectURL( 
        new Blob([`
import * as csg  from '${getCurrent("csgChange")}'
import * as src  from '${getCurrent(config.index)}'
${consoleLog} 
 const main = "${config.main}";
 const list = Object.keys(src)
const module = {list,basename:main?main:list[0]}
 

csg.getCsgObjArray(src[module.basename](),(msg)=>{
if (msg.end){
     msg.module = module       
}
self.postMessage(msg)
})
 
${consoleLogEnd} `],{type:'application/javascript'}));
};
export const runWorker = (el:HTMLCanvasElement,message:workerConfigType )=>{
    if (worker){
        worker.terminate();
          //worker=null
          //return
      };
      vscode.postMessage({
        type:'start'
      });
    const baseUrl = getBaseUrl(message);
    worker = new Worker(baseUrl,{type: "module"});
    //console.log(worker)   

    worker.onmessage = function(e) {
      const msg = e.data;
      //message.msg = msg;
      console.log(msg);
      if (msg.start ){

        startSceneOBJ(el);
      }else if (msg.ver){
        addSceneOBJ(el, CSG2Three(msg.ver,{}) );
        //console.log("update",(Date.now()-tmpDate) /1000)
      }else if (msg.end ){
        if (msg.module){
            message.module(msg.module);
        }
        onWindowResize(el!,message.cameraType )	;
        worker?.terminate();
        URL.revokeObjectURL(baseUrl);
        worker= null;
        //console.log("end",(Date.now()-tmpDate) /1000)
        vscode.postMessage({
          type:'end'
        });
      }else if (msg.log){
        vscode.postMessage({
          type:'log',
          msg:msg.log
        });
      }else if (msg.error){
        vscode.postMessage({
          type:'error',
          msg:msg.error
        });
      }
      
    } ; 
};