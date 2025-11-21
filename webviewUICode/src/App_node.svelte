<script lang="ts" >
    import { onMount } from 'svelte';
    import ShowSolid ,{initSolidPage} from './lib/ShowSolid.svelte';
    import Menu  from './lib/Menu.svelte'
    //import { CSG2Three } from "./lib/function/csg2Three";
    import {runWorker} from "./lib/function/worker"
    import type { sConfig,workerConfigType } from './lib/function/utils';
    //import {onWindowResize,startSceneOBJ,addSceneOBJ} from "./lib/function/threeScene" ;

   const solidConfig:sConfig=$state({ 
    showMenu: 1,
    oldMenu:1 | (1<<1) | (1<<2) | (1<<3),
   // baseUrl:"./worker.js" ,
    setWorkerMsg:(w:workerConfigType)=>{
      w.src = "src"
    solidConfig.workermsg = w
   }})
   //let oldMenu:number =1 | (1<<1) | (1<<2) | (1<<3);
 
   //solidConfig.postMessage = console.log
    onMount(() => {
      initSolidPage(solidConfig)
      runWorker(solidConfig)
      
})
   
    
  </script> 
 
  <ShowSolid></ShowSolid> 
  <Menu  {solidConfig}  ></Menu>