<script lang="ts" module>
let perspectiveIcon:SVGGElement ;
let orthographicIcon:SVGGElement;
let toggleIndicator:SVGGElement;
let isPerspective = true;
let cameraType = $state("Orthographic")

export function toggleCamera() {
    isPerspective = !isPerspective; 
 
    cameraType = isPerspective ?'Orthographic' : 'Perspective';
    return isPerspective ? 'Perspective' : 'Orthographic'; 
}
</script>
<script lang="ts" >
  // import { runWorker } from "./function/worker"; 
  //export let Clickhandle:(name:string)=>void
  let {Clickhandle}:{Clickhandle:(name:string)=>void} = $props()
</script>
<details>
  <summary style="cursor:pointer;height:48px;text-align:left;line-height: 48px;" >
    View
  </summary>
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions --> 
<div style="color:white;" onclick="{(e)=>{
  const button = (e.target  as HTMLInputElement).closest('button');
  //console.log(button.textContent)
  if (!button.id ){
    return;
  }
  Clickhandle(button.id)
}}" >
<button id="camera" class="option-text" style="height:48:px;line-height:48px;cursor: pointer;" >{cameraType}</button>
<button id="front"  class="option-text" style="height:48:px;line-height:48px;cursor: pointer;">Front</button>
<button id="back"   class="option-text" style="height:48:px;line-height:48px;cursor: pointer;">Back</button>
<button id="top"    class="option-text" style="height:48:px;line-height:48px;cursor: pointer;">Top</button>
<button id="bottom" class="option-text" style="height:48:px;line-height:48px;cursor: pointer;">Bottom</button>
<button id="left"   class="option-text" style="height:48:px;line-height:48px;cursor: pointer;">Left</button>
<button id="right"  class="option-text" style="height:48:px;line-height:48px;cursor: pointer;">Right</button>
</div>
</details>