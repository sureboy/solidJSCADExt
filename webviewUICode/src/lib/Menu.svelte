<script lang="ts">
import type { sConfig,workerConfigType } from './function/utils';
import DownMenu from "./DownMenu.svelte";
import MainMenu,{moduleInit} from "./MainMenu.svelte"; 
import Camera,{toggleCamera,initView} from "./Camera.svelte"; 
import {onWindowResize,switchView } from "./function/threeScene" 
import { runWorker } from "./function/worker";  
const { solidConfig }:{ solidConfig:sConfig} = $props();
const myConfig = (window as any).myConfig as {name:string,main:string,index:string}
const workermsg:workerConfigType =  {
    ...myConfig,
    cameraType:"Perspective", 
    module:(m:{ list: string[];
    basename: string;})=>{ 
        moduleInit(m)
    }
}
solidConfig.workermsg = workermsg




const handleView = new Map<string,()=>void>()

handleView.set("camera",()=>{
    solidConfig.workermsg.cameraType = toggleCamera()
    onWindowResize(solidConfig.el!,solidConfig.workermsg.cameraType)
})

 
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions
 onclick="{()=>{
solidConfig.workermsg.cameraType = toggleCamera()
    onWindowResize(solidConfig.el!,solidConfig.workermsg.cameraType)
}}" 
-->

 
<div style="position: absolute;left:5px;top:5px;z-index: 11;cursor: pointer;" class="pointer-events-auto" id="camera-toggle">
    {#if  (( solidConfig.showMenu & 1) !== 0)}   <MainMenu   Clickhandle = {(n:string)=>{            
        solidConfig.workermsg.main = n    
        initView()
        runWorker(solidConfig )
            }} ></MainMenu>
             {/if}
    {#if (( solidConfig.showMenu & 1<<1) !== 0)}  <Camera   Clickhandle={(n)=>{
        console.log(n)
        if (handleView.has(n)){
            handleView.get(n)();
        } else{
            switchView(n)  
        }
           
    }} ></Camera>
    {/if}
    {#if  (( solidConfig.showMenu & 1<<2) !== 0)}    <DownMenu workermsg={myConfig} ></DownMenu>   {/if}
</div>

 