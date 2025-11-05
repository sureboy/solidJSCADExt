<script lang="ts" module>
let isPerspective = true;
let view = $state(["View",""])
let cameraType:'[ V ]' | '[ U ]' = $state("[ U ]")
export function initView(){
  
  view[0] = isPerspective ?'[ V ]' : '[ U ]';
  view[1] = '[ Z ]'
}
export function toggleCamera() {
    isPerspective = !isPerspective; 
    cameraType = isPerspective ?'[ U ]' : '[ V ]';
    return isPerspective ? 'Perspective' : 'Orthographic'; 
}
</script>
<script lang="ts" >
  let {Clickhandle}:{Clickhandle:(name:string)=>void} = $props()
</script>
<details>
  <summary style="cursor:pointer;height:48px;text-align:left;line-height: 48px;" >
    {view.join(" ")}
  </summary>
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions --> 
<div style="color:white;" onclick="{(e)=>{
  const button = (e.target  as HTMLInputElement).closest('button');
  //console.log(button.textContent)
  if (!button.id ){
    return;
  }
  if (button.id !== "camera"){
    view[1] = button.textContent
  }else{
    view[0] = button.textContent
    view[1] = "[ Z ]"
  }
 
  Clickhandle(button.id)
}}" >
<button id="camera" class="option-text" style="height:48:px;line-height:48px;cursor: pointer;" >{cameraType}</button>
<button id="front"  class="option-text" style="height:48:px;line-height:48px;cursor: pointer;">[ Z ]</button>
<button id="back"   class="option-text" style="height:48:px;line-height:48px;cursor: pointer;">[-Z ]</button>
<button id="top"    class="option-text" style="height:48:px;line-height:48px;cursor: pointer;">[ Y ]</button>
<button id="bottom" class="option-text" style="height:48:px;line-height:48px;cursor: pointer;">[-Y ]</button>
<button id="left"   class="option-text" style="height:48:px;line-height:48px;cursor: pointer;">[ X ]</button>
<button id="right"  class="option-text" style="height:48:px;line-height:48px;cursor: pointer;">[-X ]</button>
</div>
</details>