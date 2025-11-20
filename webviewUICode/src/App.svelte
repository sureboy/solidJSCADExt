<script lang="ts" module >
  import { onMount } from 'svelte';
  import ShowSolid  from './lib/ShowSolid.svelte';
  import Menu  from './lib/Menu.svelte'
  import type { sConfig,workerConfigType } from './lib/function/utils';

 const solidConfig:sConfig=$state({ showMenu:1,setWorkerMsg:(w:workerConfigType)=>{
  solidConfig.workermsg = w
 }})
 /*
 const worker = new Worker("./assets/worker.js",{type: "module"});
 
  onMount(() => {
    const worker = new Worker("./assets/worker.js",{type: "module"});
  })*/
</script>
<h1>test</h1>
<ShowSolid></ShowSolid> 
<Menu  {solidConfig}  ></Menu>