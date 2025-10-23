import {getCurrent} from "./ImportParser";
import {onWindowResize,startSceneOBJ,addSceneOBJ} from "./threeScene" ;
import { CSG2Three } from "./csg2Three";
//import { vscode } from './vscodeApi';
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

 
const getBaseUrl =async (config:{main:string,index:string},postMessage?:(e:any)=>void)=>{
 
  const csgObj = await getCurrent("csgChange",postMessage);
 
  const csgUri = await csgObj.getUri();
 
  const indexObj =await getCurrent(config.index,postMessage);
 
  const indexuri = await indexObj.getUri();
 
  const src = `import * as csg  from '${csgUri}'
import * as src  from '${indexuri}'
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
${consoleLogEnd} `;
console.log(src);
  return URL.createObjectURL(
    new Blob([src],{type:'application/javascript'}));
};
/*
export const runWorkerInVscode = (el:HTMLCanvasElement,message:workerConfigType )=>{
    
    runWorkerBase(el,message,vscode.postMessage);
      vscode.postMessage({
        type:'start'
      });
   
};
*/
export const runWorker =( el:HTMLCanvasElement,message:workerConfigType,postMessage?:(e:any)=>void )=>{
  if (worker){
    worker.terminate();
    worker = null;
  }
  postMessage({
    type:'start'
  });
  getBaseUrl(message,postMessage).then(baseUrl=>{
    //const baseUrl =await getBaseUrl(message,postMessage);
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
        console.log("cameraType",message.cameraType);
        onWindowResize(el!,message.cameraType )	;
        worker?.terminate();
        URL.revokeObjectURL(baseUrl);
        worker= null;
        //console.log("end",(Date.now()-tmpDate) /1000)
        postMessage({
          type:'end'
        });
      }else if (msg.log){
        postMessage({
          type:'log',
          msg:msg.log
        });
      }else if (msg.error){
        postMessage({
          type:'error',
          msg:msg.error
        });
      }
      
    } ; 
  });
  //return worker;
};