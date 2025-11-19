<script lang="ts">
import type { sConfig,workerConfigType } from './function/utils';
import Options from "./OptionsMenu.svelte"
import DownMenu from "./DownMenu.svelte";
import MainMenu,{moduleInit} from "./MainMenu.svelte"; 
import Camera,{toggleCamera,initView} from "./Camera.svelte"; 
import {onWindowResize,switchView } from "./function/threeScene" 
import { changeWorker } from "./function/worker";  
const { solidConfig }:{ solidConfig:sConfig} = $props();
const myConfig = (window as any).myConfig as {
    pageType:'run'|'gzData'|'stlData',
    name:string,
    in:string,
    func:string}
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
    {#if  (solidConfig.showMenu & 1)} 
     <MainMenu   Clickhandle = {(n:string)=>{            
        solidConfig.workermsg.func = n    
        initView()
        changeWorker(solidConfig )
            }} ></MainMenu>
    {/if}    
    {#if  (solidConfig.showMenu & (1<<1))}  
    <Camera    Clickhandle={(n)=>{
        console.log(n)
        if (handleView.has(n)){
            handleView.get(n)();
        } else{
            switchView(n)  
        }           
    }} ></Camera>
    {/if}   
    {#if  ((solidConfig.showMenu >>2 )!==0 )}   
    <DownMenu workermsg={{showMenu:solidConfig.showMenu,postMessage:solidConfig.postMessage,...solidConfig.workermsg}} ></DownMenu>  
    {/if} 
    {#if (solidConfig.workermsg.options)} 
    <Options name="Options" options={solidConfig.workermsg.options} >
    <div style="padding-left:20px;" ><input type="submit" onclick={(e)=>{
        initView()
        changeWorker(solidConfig )
    }}/></div>    
    </Options>
    
    {/if}
</div>