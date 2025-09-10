<script lang="ts">
  import { onMount } from 'svelte';
  import { vscode } from './vscodeApi';
  //import workerCode from './worker/myWorker?raw'; 
  import { createCanvasElement } from "three";
  import {onWindowResize,startSceneOBJ,addSceneOBJ,addSceneSTL} from "./lib/function/threeScene" 
  import { CSG2Three } from "./lib/function/csg2Three";
  import {STLLoader} from "three/addons/loaders/STLLoader.js"
  let container:HTMLElement; 
  //let worker: Worker; 
  let el:HTMLCanvasElement|null; 
  //let svg:HTMLElement
  let tmpDate = 0
 
  //const blob = new Blob([workerCode,`workerLib.getCsgObjArray(userModule.main(),self.postMessage);`], { type: 'application/javascript' });
  onMount(() => {
    const hasWebGPU = !!navigator["gpu"];
    //console.log("gpu",hasWebGPU)
    //vscode.postMessage({ supportsWebGPU: hasWebGPU });
    const stlLoader = new STLLoader()

    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      console.error("WebGL is not supported in this Webview!");
    } else {
      console.log("WebGL is working! 🎉");
    }
    vscode.postMessage({
      command: 'code',
      supportsWebGPU: hasWebGPU,
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

  function toggleCamera() {
    isPerspective = !isPerspective;
    
    // 切换图标透明度
    perspectiveIcon.setAttribute('opacity', isPerspective ? '1' : '0.5');
    orthographicIcon.setAttribute('opacity', isPerspective ? '0.5' : '1');
    
    // 移动切换指示器
    toggleIndicator.setAttribute('x', isPerspective ? '12' : '24');
    
    // 更新文字标签
    //label.textContent = isPerspective ? 'Perspective' : 'Orthographic';
    onWindowResize(el,isPerspective ? 'Perspective' : 'Orthographic')
    // 实际切换相机逻辑
 
  }

  svg.addEventListener('click', toggleCamera);

  const updateSize = ()=>{
      el!.width = document.body.clientWidth;
      el!.height = document.body.clientHeight; 

      //console.log("z")
      onWindowResize(el!)		
    }
    window.addEventListener('resize',updateSize);   

  window.addEventListener('message', (event:any) => {
      //worker.postMessage(event.data)
      const message = event.data;
      //console.log(message)
      if (message.time){
        tmpDate = message.time
        //console.log(tmpDate)
      }
      switch (message.type) {
        //case 'code':
        //  if (worker)
        //    worker.postMessage(message.data)
        //  break;
        case 'start':
          startSceneOBJ(el);
          break;
        case 'stlData':
          addSceneSTL(el,stlLoader.parse(message.data));
          vscode.postMessage({type:"loadend",time:tmpDate});
          break;
        case 'end':
          onWindowResize(el!)	;
          break;
      }
     /*
      if (message.start || message.type === "start"){
        startSceneOBJ(el);
      }else if (message.ver){
        addSceneOBJ(el, CSG2Three(message.ver, {}));
      }else if (message.end || message.type === "end"){
        onWindowResize(el!)	
      }else if (message.type  === "stlData" ){
        STLLoader.parse(message.data)
        console.log(message)
        //vscode.postMessage(message);
      }
     */ 
   
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