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
let baseUrl:string;
let oldMenu:number = 0;
const getBaseUrl =async (config:{in:string,func:string},postMessage?:(e:any)=>void)=>{
 
  const csgObj = await getCurrent("./lib/csgChange.js",postMessage);
 
  const csgUri = await csgObj.getUri();
  let indexName = config.in;
  if (!indexName.startsWith("./")){
    indexName = "./"+indexName;
  }
  if (!indexName.endsWith(".js")){
    indexName += ".js";
  }
  const indexObj =await getCurrent(indexName,postMessage);
 
  const indexuri = await indexObj.getUri();
 
  const src = `import * as csg  from '${csgUri}'
import * as src  from '${indexuri}'
  ${consoleLog} 
  const main = "${config.func}";
  const list = Object.keys(src)
  const module = {list,basename:main?main:list[0]}
  self.onmessage = (e)=>{
    const {func,options} = e.data
    if ( func){ 
      csg.getCsgObjArray(src[e.data.func](options),(msg)=>{
        self.postMessage(msg)
      }) 
    }
  }
  self.postMessage({module})
  csg.getCsgObjArray(src[module.basename](),(msg)=>{
  self.postMessage(msg)
}) 
${consoleLogEnd} `; 
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
export const changeWorker = (conf:sConfig )=>{
  if (!worker){
    runWorker(conf);
    return;
  }
  conf.postMessage({
    type:'start'
  });
  conf.showMenu = 1; 
  if (conf.workermsg.options){
    const options =JSON.parse( JSON.stringify(conf.workermsg.options));
    conf.workermsg.options=undefined;
    worker.postMessage({func:conf.workermsg.func,options});
  }else{
    worker.postMessage({func:conf.workermsg.func});
  }

  

};
export const runWorker = async ( conf:sConfig  )=>{
  if (worker){
    worker.terminate();
    worker = null;
    URL.revokeObjectURL(baseUrl);
    
  }
  if (!oldMenu){
    oldMenu = conf.showMenu;
  }
  conf.postMessage({
    type:'start'
  });
  
  conf.showMenu = 1;
  baseUrl = await getBaseUrl(conf.workermsg,conf.postMessage) ;
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
    //console.log(e,msg);
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
    if (msg.module){
      conf.workermsg.module(msg.module);
    }
    if (msg.end ){

      //console.log("cameraType",conf.workermsg.cameraType);
      onWindowResize(conf.el!,conf.workermsg.cameraType )	;
      conf.postMessage({
        type:'end'
      });
      conf.showMenu =oldMenu;// 1 | (1<<1) | (1<<2) | (1<<3);
    }
    if (msg.options){
      conf.workermsg.options =Object.assign(conf.workermsg.options||{},msg.options);
      //console.log(msg.options);
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
  };  
};