import {getCurrent} from "./ImportParser";
import {onWindowResize,startSceneOBJ,addSceneOBJ} from "./threeScene" ;
import { CSG2Three } from "./csg2Three";
import type { sConfig } from './utils';

const consoleLog = `
const originalLog = console.log;
console.log = (...e)=>{
originalLog(e)
  self.postMessage({ 
    log: e
  });
} 
try{
`;
const consoleLogEnd=`}catch(error){        
    console.error(error)
    self.postMessage({ 
    error:error.stack,
    end:true
    });
};`;
let worker: Worker|null; 

 
const getBaseUrl =async (config:{main:string,index:string},postMessage?:(e:any)=>void)=>{
 
  const csgObj = await getCurrent("./lib/csgChange.js",postMessage);
 
  const csgUri = await csgObj.getUri();
  let indexName = config.index;
  if (!indexName.startsWith("./")){
    indexName = "./"+indexName;
  }
  const indexObj =await getCurrent(indexName,postMessage);
 
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
export const runWorker =( conf:sConfig  )=>{
  if (worker){
    worker.terminate();
    worker = null;
  }
  conf.postMessage({
    type:'start'
  });
  conf.showMenu = 1;
  getBaseUrl(conf.workermsg,conf.postMessage).then(baseUrl=>{
    //const baseUrl =await getBaseUrl(message,postMessage);
 
    worker = new Worker(baseUrl,{type: "module"});
    //console.log(worker)  
    worker.onerror = e=>{
      console.error("error", e );
      conf.postMessage({
        type:'error',
        msg:"Code syntax error"
      });
    };
    worker.onmessageerror = e=>{
      console.error("messageErr",e);
      conf.postMessage({
        type:'error',
        msg:e.data
      });
    };
    
    worker.onmessage = function(e) {
      const msg = e.data;
      //message.msg = msg;
      console.log(e,msg);
      if (msg.start ){
        try{
          startSceneOBJ(conf.el);
        }catch(err){
          conf.postMessage({
            type:'initError',
            msg:err.error
          });
        }
        
      }
      if (msg.ver){
        addSceneOBJ(conf.el, CSG2Three(msg.ver,{}) );
        //console.log("update",(Date.now()-tmpDate) /1000)
      }
      if (msg.end ){
        if (msg.module){
          conf.workermsg.module(msg.module);

        }
        console.log("cameraType",conf.workermsg.cameraType);
        onWindowResize(conf.el!,conf.workermsg.cameraType )	;
        worker?.terminate();
        URL.revokeObjectURL(baseUrl);
        worker= null;
        //console.log("end",(Date.now()-tmpDate) /1000)
        conf.postMessage({
          type:'end'
        });
        conf.showMenu = 1 | 1<<1 | 1<<2;
      }
       if (msg.log){
        conf.postMessage({
          type:'log',
          msg:msg.log
        });
      }
       if (msg.error){
        conf.postMessage({
          type:'error',
          msg:msg.error
        });
      }
      
    } ; 
 
  });

  //return worker;
};