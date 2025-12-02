<script lang="ts" >
  import { onMount } from 'svelte';
  import {initSolidPage} from './lib/ShowSolid.svelte';
  //import Menu  from './lib/Menu.svelte'
  //import { CSG2Three } from "./lib/function/csg2Three";
  //import {runWorker} from "./lib/function/worker"
  import type { sConfig,workerConfigType } from './lib/function/utils';
    
  import HandlePage,{ HandleMessage,Direction,solidConfig} from './lib/HandleMessagePage.svelte';
  //import {onWindowResize,startSceneOBJ,addSceneOBJ} from "./lib/function/threeScene" ;
  solidConfig.setWorkerMsg = (w:workerConfigType)=>{
    //w.src = "src"
    //w.pageType="run"
    solidConfig.workermsg = w
  }
  solidConfig.oldMenu = 1 | (1<<1) | (1<<2) | (1<<3);
  //let oldMenu:number =1 | (1<<1) | (1<<2) | (1<<3);
 /*
  solidConfig.postMessage = (e:{type:string,path?:string,msg?:any})=>{
    fetch("/api",{
      method:"POST",
      headers: {
        "Content-Type": "application/json", 
      },
      body:JSON.stringify(e)
    }).then(data=>{
      data.json().then(db=>{
        HandleMessage(db,solidConfig.postMessage)
      })
    })
  }
    */
  const loadedFetch = ()=>{
    fetch("/api",{
      method:"POST",
      headers: {
        "Content-Type": "application/json", 
      },
      body:JSON.stringify({ 
      msg: {direction:Direction.map(v=>{ 
        return v.name}),pageType:solidConfig.workermsg.pageType||"run"}, 
      type:'loaded'
    })
    }).then(data=>{
      data.json().then(db=>{
        HandleMessage(db,solidConfig.postMessage)
      })
    })
  }

  onMount(() => {
    initSolidPage(solidConfig)
    loadedFetch();
    /*
    solidConfig.postMessage({ 
      msg:JSON.stringify({direction:Direction.map(v=>{ 
        return v.name}),pageType:solidConfig.workermsg.pageType||"run"}), 
      type:'loaded'
    });
    */
    //runWorker(solidConfig)
  })
   
    
  </script> 
<HandlePage  ></HandlePage> 