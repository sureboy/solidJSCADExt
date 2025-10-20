<script lang="ts" module >
import { createCanvasElement } from "three";
import {onWindowResize } from "./function/threeScene" 
import Camera,{toggleCamera} from "./Camera.svelte"; 
import Menu,{workermsg} from "./Menu.svelte";

let container:HTMLElement;  
//export let cameraType:string=""
// let el:HTMLCanvasElement|null;  
export const solidConfig:{el?:HTMLCanvasElement,workermsg:any} = { workermsg}

//workermsg.cameraType = cameraType
export const initSolidPage = ()=>{
    solidConfig.el = createCanvasElement() ;   
    solidConfig.el.width = document.body.clientWidth;
    solidConfig.el.height = document.body.clientHeight;
    container.innerHTML=""
    container.appendChild(solidConfig.el)  
    const updateSize = ()=>{
        solidConfig.el!.width = document.body.clientWidth;
        solidConfig.el!.height = document.body.clientHeight; 
      onWindowResize(solidConfig.el!,workermsg.cameraType)
    }
    const svg = document.getElementById('camera-toggle'); 
    svg.addEventListener('click',()=>{
        workermsg.cameraType = toggleCamera()
        console.log(workermsg)
        onWindowResize(solidConfig.el!,workermsg.cameraType)
    } );
    window.addEventListener('resize',updateSize);   
}
</script>
<script lang="ts">
  import { runWorker } from "./function/worker";
    export let postMessage:(db:any)=>void;

</script>

<div bind:this={container}  style="position: absolute;left:0;top:0;z-index: 1;" > 
</div> 
<div style="position: absolute;left:5px;top:5px;z-index: 11;cursor: pointer;" class="pointer-events-auto" id="camera-toggle">
    <Camera ></Camera>
</div>
<Menu  Clickhandle={(n)=>{
    workermsg.main = n
    
    console.log(workermsg) 
    runWorker(solidConfig.el,workermsg,postMessage)
}}></Menu>
 