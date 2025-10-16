<script lang="ts">
  import { onMount } from 'svelte';
  import { vscode } from './lib/function/vscodeApi';
 // import workerCode from './worker/worker?raw'; 
 import ShowSolid,{ initSolidPage,solidConfig} from './lib/ShowSolid.svelte';
 
  import {onWindowResize, Exporter,addSceneSTL} from "./lib/function/threeScene" 
import {gzipToString,srcStringToJsFile} from "./lib/function/utils"
  //import { CSG2Three } from "./lib/function/csg2Three";
  import {handleCurrentMsg,getCurrent,getCurrentCode} from "./lib/function/ImportParser"
  import { runWorker } from "./lib/function/worker";
  import {STLLoader} from "three/addons/loaders/STLLoader.js"
 
  //let showName = "...."   
  onMount(() => {
    initSolidPage()
    vscode.postMessage({ 
    //  supportsWebGPU: hasWebGPU,
      type:'loaded'
    });
    window.addEventListener('message', (event:any) => {
        //worker.postMessage(event.data)
      const message = event.data;
      if (message.gzData){
        gzipToString(message.gzData).then(src=>{
          //console.log(src)
          srcStringToJsFile(src,(db)=>{ 
              handleCurrentMsg(db) 
          }) 
          runWorker(solidConfig.el,solidConfig.workermsg,vscode.postMessage);
        }) 
      }
      if (message.stlData){
        console.log(message)
        addSceneSTL(solidConfig.el,new STLLoader().parse(message.stlData));
        document.getElementById("downMenuList").style.display="none"
      }else{
        document.getElementById("downMenuList").style.display="block"
      }
      if (message.getSrc){
        const current = getCurrent(solidConfig.workermsg.index)  
        if (typeof current ==="string"){
          return
        }  
        getCurrentCode(current,(name:string,code:string)=>{
          vscode.postMessage({
            type:"src",
            name,
            code:new TextEncoder().encode(code)
          }) 
        })
        vscode.postMessage({
            type:"src"
          }) 
      }
      //console.log(message) 
      if (message.init  ){
        handleCurrentMsg(message.init)        
      }  
      if (message.run){
        console.log("run",solidConfig)
        //if (!message.open) solidConfig.workermsg.cameraType = "" 
        runWorker(solidConfig.el,Object.assign({},solidConfig.workermsg,{cameraType:message.open?solidConfig.workermsg.cameraType:''}),vscode.postMessage);
        //console.log
      }
  
    });
    return () =>{
    // window.removeEventListener('resize', updateSize);      
      //worker.terminate();
      //worker = null;
    } 
  });
</script>
<ShowSolid postMessage={vscode.postMessage}></ShowSolid> 

