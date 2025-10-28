<script lang="ts">
  import { onMount } from 'svelte';
 // import { vscode } from './lib/function/vscodeApi';
  //import { WebSocketServer } from 'ws';
 // import workerCode from './worker/worker?raw'; 
  import ShowSolid,{ initSolidPage,solidConfig} from './lib/ShowSolid.svelte';
 
  import { addSceneSTL} from "./lib/function/threeScene" 
  import {gzipToString,srcStringToJsFile} from "./lib/function/utils"
  //import { CSG2Three } from "./lib/function/csg2Three";
  import {delCurrentMsg,handleCurrentMsg,getCurrent,getCurrentCode} from "./lib/function/ImportParser"
  import { runWorker } from "./lib/function/worker";
  import {STLLoader} from "three/addons/loaders/STLLoader.js"
  let showMenu = true
  let vscode:any
  console.log("test")
  //let showName = "...."   
  onMount(() => {
    
    let wss = new WebSocket('ws://localhost:3000');
   
    initSolidPage()
    /*
    runWorker(
      solidConfig.el,
      Object.assign({},
      solidConfig.workermsg,
      {cameraType:solidConfig.workermsg.cameraType}),
      vscode.postMessage);

    */
    vscode.postMessage({ 
    //  supportsWebGPU: hasWebGPU,
      type:'loaded'
    });
    
    window.addEventListener('message', (event:any) => {
        //worker.postMessage(event.data)
      const message = event.data;
      if (message.gzData){
        gzipToString(message.gzData).then(src=>{
          
          srcStringToJsFile(src,(db)=>{ 
           
              handleCurrentMsg(db) 
              console.log(db.name);
          }) 
          console.log(solidConfig)
          runWorker(solidConfig.el,solidConfig.workermsg,vscode.postMessage);
        }) 
      }
      if (message.stlData){
        console.log(message)
        addSceneSTL(solidConfig.el,new STLLoader().parse(message.stlData));
        showMenu=false
        //document.getElementById("downMenuList").style.display="none"
      }else{
        showMenu=true
        //document.getElementById("downMenuList").style.display="block"
      }
      if (message.getSrc){
        getCurrent(solidConfig.workermsg.index,vscode.postMessage).then(
          current=>{   
            console.log(current)     
          getCurrentCode(current,(name:string,code:string)=>{
            vscode.postMessage({
              type:"src",
              name,
              code:new TextEncoder().encode(code)
            }) 
          }).then(()=>{
            vscode.postMessage({
              type:"src"
            }) 
          })
        })
  
      }
      if (message.del){
        delCurrentMsg(message.del.name);
      }
      //console.log(message) 
      if (message.init  ){
        handleCurrentMsg(message.init,vscode.postMessage)        
      }  
      if (message.run){
        console.log("run",solidConfig)
        //showMenu=false
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
<ShowSolid postMessage={vscode.postMessage} {showMenu}></ShowSolid> 

