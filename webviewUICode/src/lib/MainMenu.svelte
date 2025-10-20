<script lang="ts" module>
let menu:HTMLElement
let tmpDiv:HTMLButtonElement 
let solidName:HTMLElement;
export const moduleInit = (modulelist:{list:string[],basename:string} )=>{
    menu.innerHTML=""
    //menu.
    //console.log(modulelist)
    solidName.textContent = modulelist.basename 
    console.log("change Main name",solidName)
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

   //$: showName = solidName

   
</script>
<details name="moduleMenu"  >
    <summary bind:this={solidName} style="cursor: pointer;height:48px;text-align: center;line-height: 48px;"  >
...
</summary>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div  style="color:white;text-align: center;" id="module_list" bind:this={menu}    onclick="{(e)=>{
 const button = (e.target  as HTMLInputElement).closest('button');
      console.log(button.textContent)
      if (button.textContent==="..."){
        return;
      } 
      //solidName="...."
      //solidName = button.textContent
      solidName.textContent = "..."
      Clickhandle(button.textContent);
}}" >
 
    <button bind:this={tmpDiv} onclick="{e=>{console.log(e); }}" class="option-text" style="height:48:px;line-height:48px;cursor: pointer;" >
      ...
    </button>
 
 
</div>
</details>