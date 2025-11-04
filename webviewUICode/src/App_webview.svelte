<script lang="ts">
  import { onMount } from 'svelte';
  import { initSolidPage} from './lib/ShowSolid.svelte';
  import HandlePage,{ HandleMessage,Direction,solidConfig} from './lib/HandleMessagePage.svelte';
  
  import { vscode } from './lib/function/vscodeApi';
  
  onMount(() => {
    initSolidPage(solidConfig) 
    vscode.postMessage({ 
      msg:Direction.map(v=>{ 
        return v.name}).join("|"),
    //  supportsWebGPU: hasWebGPU,
      type:'loaded'
    });
    
    window.addEventListener('message', (event:any) => { 
      HandleMessage(event.data,vscode.postMessage)
    });
    return () =>{
      
    } 
  });
  solidConfig.postMessage = vscode.postMessage
  
</script> 
<HandlePage  ></HandlePage> 