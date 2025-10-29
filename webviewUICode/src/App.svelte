<script lang="ts">
  import { onMount } from 'svelte';
  
  //import { vscode } from './lib/function/vscodeApi';
 // import workerCode from './worker/worker?raw'; 
  import ShowSolid,{ initSolidPage,solidConfig} from './lib/ShowSolid.svelte';
 
  import { addSceneSTL} from "./lib/function/threeScene" 
  import {gzipToString,srcStringToJsFile} from "./lib/function/utils"
  //import { CSG2Three } from "./lib/function/csg2Three";
  import {delCurrentMsg,handleCurrentMsg,getCurrent,getCurrentCode} from "./lib/function/ImportParser"
  import { runWorker } from "./lib/function/worker";
  import {STLLoader} from "three/addons/loaders/STLLoader.js"
  let showMenu = true
  let wss:WebSocket
  let WebSocketisOpen = false
  const postMessage = (msg:any)=>{
    if (!WebSocketisOpen){
      console.log("not open",msg)
      return
    }

    wss.send(JSON.stringify(msg))
  }
  onMount(() => {
    console.log(window.location.host)
    initSolidPage()
    wss = new WebSocket(`ws://${window.location.host}`);
    //
    wss.onopen = (e)=>{
      //console.log(e)
     // wss = this
      WebSocketisOpen = true
      postMessage({
        type:'loaded'
      })
       
    }
    wss.onmessage = (event)=>{
      console.log(typeof event.data ,event.data)
      
        if (event.data instanceof Blob ){
        event.data.text().then(db=>{
          const index = db.indexOf('\n');
          //console.log(index,db.substring(0,index),db.substring(index+1))
          handleCurrentMsg({name:db.substring(0,index),db:db.substring(index+1)},postMessage)
        })
         return
      }
      if (typeof event.data !== "string"){
        return
      }
      const message = JSON.parse(event.data);
      if (message.gzData){
        gzipToString(message.gzData).then(src=>{
          
          srcStringToJsFile(src,(db)=>{ 
           
              handleCurrentMsg(db) 
              console.log(db.name);
          }) 
          console.log(solidConfig)
          runWorker(solidConfig.el,solidConfig.workermsg,postMessage);
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
        getCurrent(solidConfig.workermsg.index,postMessage).then(
          current=>{   
            console.log(current)     
          getCurrentCode(current,(name:string,code:string)=>{
            postMessage({
              type:"src",
              name,
              code:new TextEncoder().encode(code)
            }) 
          }).then(()=>{
            postMessage({
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
        handleCurrentMsg(message.init,postMessage)        
      }  
      if (message.run){
        console.log("run",solidConfig)
        //showMenu=false
        //if (!message.open) solidConfig.workermsg.cameraType = "" 
        runWorker(solidConfig.el,Object.assign({},solidConfig.workermsg,{cameraType:message.open?solidConfig.workermsg.cameraType:''}),postMessage);
        //console.log
      }

    }
    
   
  })
</script>
<ShowSolid {postMessage}  {showMenu}></ShowSolid> 