<script lang="ts">
  import { onMount } from 'svelte';
  import { vscode } from './vscodeApi';
 // import workerCode from './worker/worker?raw'; 
  import { createCanvasElement } from "three";
  import {onWindowResize,startSceneOBJ,addSceneOBJ,Exporter} from "./lib/function/threeScene" 
  import { CSG2Three } from "./lib/function/csg2Three";

  //import {STLLoader} from "three/addons/loaders/STLLoader.js"
  let container:HTMLElement; 
  let worker: Worker; 
  let el:HTMLCanvasElement|null; 
  //let svg:HTMLElement
  let tmpDate = Date.now()
  let basename = "main"
 
  const consoleLog = `
  const originalLog = console.log;
  console.log = (...e)=>{
  originalLog(e)
    self.postMessage({ 
      log: e
    });
  }
  const originalError = console.error;
  console.error = (...e)=>{
  originalError(e)
    self.postMessage({ 
      error: e
    });
  }
  try{
`

 
  //const blob = new Blob([workerCode,`workerLib.getCsgObjArray(userModule.main(),self.postMessage);`], { type: 'application/javascript' });
  onMount(() => {
    document.getElementById("downSTL").addEventListener("click",e=>{
      const res = Exporter() 
      const blob = new Blob([res.buffer as ArrayBuffer], { type: 'application/octet-stream' })
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `${basename}.stl`;
      //document.body.appendChild(link);
      link.click();
      URL.revokeObjectURL(link.href);
            //document.body.removeChild(link);
    })
    //const hasWebGPU = !!navigator["gpu"];
    //console.log("gpu",hasWebGPU)
    //vscode.postMessage({ supportsWebGPU: hasWebGPU });
    //const stlLoader = new STLLoader()

 
  vscode.postMessage({ 
    //  supportsWebGPU: hasWebGPU,
      type:'loaded'
    });



    el = createCanvasElement() ;   
    el.width = document.body.clientWidth;
    el.height = document.body.clientHeight;
    container.innerHTML=""
    container.appendChild(el) 
    

   /* */

  //})
  const svg = document.getElementById('camera-toggle');
  const perspectiveIcon = document.getElementById('perspective-icon');
  const orthographicIcon = document.getElementById('orthographic-icon');
  const toggleIndicator = document.getElementById('toggle-indicator');
  //const label = document.querySelector('text');

  let isPerspective = true;
  let cameraType = "Perspective"

  function toggleCamera() {
    isPerspective = !isPerspective;
    
    // 切换图标透明度
    perspectiveIcon.setAttribute('opacity', isPerspective ? '1' : '0.5');
    orthographicIcon.setAttribute('opacity', isPerspective ? '0.5' : '1');
    
    // 移动切换指示器
    toggleIndicator.setAttribute('x', isPerspective ? '12' : '24');
    
    // 更新文字标签
    cameraType = isPerspective ? 'Perspective' : 'Orthographic';
    onWindowResize(el, cameraType)
    // 实际切换相机逻辑
 
  }

  svg.addEventListener('click', toggleCamera);

  const updateSize = ()=>{
      el!.width = document.body.clientWidth;
      el!.height = document.body.clientHeight; 

      //console.log("z")
      onWindowResize(el!,cameraType)		
    }
    window.addEventListener('resize',updateSize);   

  window.addEventListener('message', (event:any) => {
      //worker.postMessage(event.data)
      const message = event.data;
      if (message.code){
        if (worker)return;
        //console.log(message)
        basename = message.basename
        //console.log("down",(Date.now()-tmpDate) /1000)
        tmpDate = Date.now()
      
        const blob = new Blob([consoleLog,message.code,`${basename}.default(self.postMessage);
        }catch(error){
          const msg = []
          error.stack.split('\\n').slice(2).reverse().forEach(v=>{
            msg.push(v.trim().replace(/\\([^\\)]+\\)/g,''));  
          })
          console.error(...msg)
        };`])
          const _blobURL = URL.createObjectURL(blob)
          worker = new Worker(_blobURL);
          //console.log((Date.now()-tmpDate) /1000)
          worker.onmessage = function(e) {
            const msg = e.data;
            //console.log(msg)
            if (msg.start ){

              startSceneOBJ(el);
            }else if (msg.ver){
              addSceneOBJ(el, CSG2Three(msg.ver,{}) );
              //console.log("update",(Date.now()-tmpDate) /1000)
            }else if (msg.end ){
              onWindowResize(el!,message.open?cameraType:"")	
              worker.terminate()
              URL.revokeObjectURL(_blobURL);
              worker= null
              //console.log("end",(Date.now()-tmpDate) /1000)
              vscode.postMessage({
                type:'end'
              });
            }else if (msg.log){
              vscode.postMessage({
                type:'log',
                msg:msg.log
              });
            }else if (msg.error){
              vscode.postMessage({
                type:'error',
                msg:msg.error
              });
            }
          }
   
      }
    });
    return () =>{
     // window.removeEventListener('resize', updateSize);      
      //worker.terminate();
      //worker = null;
    } 
  });

 


</script>
<div bind:this={container}  style="position: absolute;left:0;top:0;z-index: 1;" > 
</div> 
<div style="position: absolute;right:5px;top:5px;z-index: 10;" class="pointer-events-auto ">
 
    <details  >
        <summary class="download-summary" >
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 32L24 16M24 32L18 26M24 32L30 26" stroke="#3498db" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10 38H38" stroke="#3498db" stroke-width="3" stroke-linecap="round"/>
          </svg>
        </summary>
        <div class="download-options">
            <div class="download-option">
 
                <span class="option-text" id="downSTL" >STL</span> 
            </div>
            <!--
            <div class="download-option"> 
                <span class="option-text" id="down3MF" >3MF</span> 
            </div>
            -->
        </div>
    </details>
 
</div>
<div style="position: absolute;left:5px;top:5px;z-index: 10;" class="pointer-events-auto" id="camera-toggle">

 
  <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" >
    <!-- 按钮背景 -->
    <rect x="1" y="1" width="46" height="46" rx="4" fill="#2d2d2d" stroke="#555" stroke-width="1"/>
    
    <!-- 透视相机图标 -->
    <g id="perspective-icon" transform="translate(8, 8) scale(0.8)">
      <!-- 视锥体 -->
      <path d="M6 6 L26 6 L36 26 L16 26 Z" fill="none" stroke="#4fc3f7" stroke-width="2" stroke-linejoin="round"/>
      <path d="M6 6 L16 26" stroke="#4fc3f7" stroke-width="2"/>
      <path d="M26 6 L36 26" stroke="#4fc3f7" stroke-width="2"/>
      <!-- 相机位置 -->
      <circle cx="21" cy="1" r="3" fill="#4fc3f7"/>
      <line x1="21" y1="4" x2="21" y2="6" stroke="#4fc3f7" stroke-width="2"/>
    </g>
    
    <!-- 正交相机图标 -->
    <g id="orthographic-icon" transform="translate(8, 8) scale(0.8)" opacity="0.5">
      <!-- 平行投影体 -->
      <rect x="6" y="6" width="30" height="20" fill="none" stroke="#81c784" stroke-width="2" stroke-linejoin="round"/>
      <!-- 投影线 -->
      <line x1="6" y1="6" x2="1" y2="1" stroke="#81c784" stroke-width="2"/>
      <line x1="36" y1="6" x2="41" y2="1" stroke="#81c784" stroke-width="2"/>
      <line x1="36" y1="26" x2="41" y2="31" stroke="#81c784" stroke-width="2"/>
      <line x1="6" y1="26" x2="1" y2="31" stroke="#81c784" stroke-width="2"/>
    </g>
    
    <!-- 切换指示器 -->
    <rect x="12" y="36" width="24" height="4" rx="2" fill="#555"/>
    <rect id="toggle-indicator" x="12" y="36" width="12" height="4" rx="2" fill="#4fc3f7"/>
    
 
  </svg>
</div>
<style>

.download-summary {   
  cursor: pointer;
    list-style: none; /* 移除默认箭头 */
}        
/* 自定义下拉箭头 */
.download-summary::-webkit-details-marker {
  cursor: pointer;
    display: none; /* 隐藏默认箭头 */
}
/* 下拉菜单样式 */
.download-options {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: white;
    border-radius: 15px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    margin-top: 10px;
    z-index: 100;
    overflow: hidden;
    animation: slideDown 0.3s ease forwards;
}
@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
.download-option {
    padding: 16px 0px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s ease;
    border-bottom: 1px solid #f0f0f0;
}
.download-option:last-child {
    border-bottom: none;
}
.download-option:hover {
    background: #f8f9fa;
    transform: translateX(5px);
}   
.option-text {
    flex: 1;
    text-align: center;
    font-weight: 500;
    color: #2c3e50;
}


 
</style>