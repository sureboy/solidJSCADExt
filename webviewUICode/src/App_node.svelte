<script lang="ts" >
    import { onMount } from 'svelte';
    import ShowSolid ,{initSolidPage} from './lib/ShowSolid.svelte';
    import Menu  from './lib/Menu.svelte'
    import { CSG2Three } from "./lib/function/csg2Three";
    import type { sConfig,workerConfigType } from './lib/function/utils';
    import {onWindowResize,startSceneOBJ,addSceneOBJ} from "./lib/function/threeScene" ;
   const solidConfig:sConfig=$state({ showMenu:1,setWorkerMsg:(w:workerConfigType)=>{
    solidConfig.workermsg = w
   }})
   let oldMenu:number = 0;
   //const worker = new Worker("./worker.js",{type: "module"});
   solidConfig.postMessage = console.log
    onMount(() => {
      initSolidPage(solidConfig)
      window.addEventListener("solidMsg",function(event ) {
        const customEvent = event as CustomEvent;
        const msg:any=customEvent.detail
        if (msg.start ){
      try{
        startSceneOBJ(solidConfig.el);
      }catch(err){
        solidConfig.postMessage({
          type:'initError',
          msg:err.error
        });
      }
      
    }
    if (msg.ver){
      addSceneOBJ(solidConfig.el, CSG2Three(msg.ver,{}) );
      //console.log("update",(Date.now()-tmpDate) /1000)
    }
    if (msg.module){
      solidConfig.workermsg.module(msg.module);
    }
    if (msg.end ){

      //console.log("cameraType",conf.workermsg.cameraType);
      onWindowResize(solidConfig.el!,solidConfig.workermsg.cameraType )	;
      solidConfig.postMessage({
        type:'end'
      });
      solidConfig.showMenu =oldMenu;// 1 | (1<<1) | (1<<2) | (1<<3);
    }
    if (msg.options){
      solidConfig.workermsg.options =Object.assign(solidConfig.workermsg.options||{},msg.options);
      //console.log(msg.options);
    }
    if (msg.log){
      solidConfig.postMessage({
        type:'log',
        msg:msg.log
      });
    }
    if (msg.error){
      solidConfig.postMessage({
        type:'error',
        msg:msg.error
      });
    }  
      })
   
    }) 
  </script> 
 <svelte:head>
 
  <script type="module" src="./main.js"></script>
 </svelte:head>
  <ShowSolid></ShowSolid> 
  <Menu  {solidConfig}  ></Menu>