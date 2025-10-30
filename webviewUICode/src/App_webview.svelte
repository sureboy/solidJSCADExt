<script lang="ts">
  import { onMount } from 'svelte';
  import { initSolidPage} from './lib/ShowSolid.svelte';
  import HandlePage,{ HandleMessage, HandleMessageNew} from './lib/HandlePage.svelte';
  
  import { vscode } from './lib/function/vscodeApi';
  
  onMount(() => {
    initSolidPage()
 
    vscode.postMessage({ 
    //  supportsWebGPU: hasWebGPU,
      type:'loaded'
    });
    
    window.addEventListener('message', (event:any) => { 
      HandleMessageNew(event.data,vscode.postMessage)
    });
    return () =>{
      
    } 
  });
</script> 
<HandlePage {postMessage}  ></HandlePage> 