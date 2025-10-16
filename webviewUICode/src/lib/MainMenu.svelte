<script lang="ts" module>
let menu:HTMLElement
let tmpDiv:HTMLButtonElement 
let solidName = "..."
export const moduleInit = (modulelist:{list:string[],basename:string})=>{
    menu.innerHTML=""
    console.log(modulelist)
    solidName = modulelist.basename
     modulelist.list.forEach(m=>{
       const div = tmpDiv.cloneNode(true)
       div.textContent = m;
       
       menu.appendChild(div)
     })
     menu.appendChild(tmpDiv)
}
</script>
<script lang="ts" >
   // import { runWorker } from "./function/worker"; 
   export let Clickhandle:(name:string)=>void
   export let showName = solidName
   
</script>
<details name="moduleMenu"  >
    <summary style="cursor: pointer;height:48px;text-align: center;line-height: 48px;"  >
{showName}
</summary>
<div  style="color:white;text-align: center;" id="module_list" bind:this={menu}>
 
    <button bind:this={tmpDiv} onclick="{e=>{console.log(e);Clickhandle("main")}}" class="option-text" style="height:48:px;line-height:48px;cursor: pointer;" >
      ...
    </button>
 
 
</div>
</details>