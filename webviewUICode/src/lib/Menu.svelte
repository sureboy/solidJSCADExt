<script lang="ts" module>
     
export const workermsg = {
      ...(window as any).myConfig as {name:string,main:string,index:string},
      cameraType:"Perspective",
      //solidName : "...",
      module:(m:{ list: string[];
        basename: string;})=>{
        //workermsg.solidName = m.basename
        moduleInit(m)
      } 
    }
</script>

<script lang="ts">
import DownMenu from "./DownMenu.svelte";
import MainMenu,{moduleInit} from "./MainMenu.svelte"; 
export let Clickhandle:(n:string)=>void;
//export let cameraType:string = ""

</script>
<div id="downMenuList">
    <div style="position: absolute;right:5px;top:5px;z-index: 11;cursor: pointer;" class="pointer-events-auto " >     
        <DownMenu {workermsg} ></DownMenu>     
    </div>
    <div style="position:absolute;left:0px;top:5px;z-index:10;width:100%;font-weight: 500;" class="pointer-events-auto">
        <MainMenu {Clickhandle}    ></MainMenu>
    </div>
</div>