<script lang="ts">
  import { onMount } from 'svelte';
  import { vscode } from './lib/function/vscodeApi';
 // import workerCode from './worker/worker?raw'; 
  import { createCanvasElement } from "three";
  import {onWindowResize, Exporter,addSceneSTL} from "./lib/function/threeScene" 

  //import { CSG2Three } from "./lib/function/csg2Three";
  import {handleCurrentMsg,getCurrent,getCurrentCode,regexExec} from "./lib/function/ImportParser"
  import { runWorker } from "./lib/function/worker";
  import {STLLoader} from "three/addons/loaders/STLLoader.js"
  let container:HTMLElement;  
  let el:HTMLCanvasElement|null;  
  let showName = "...."   
  const stringToGzip= async (src:string)=>{
    const originalBytes = new TextEncoder().encode(src);
    const readableStream = new ReadableStream({
      start(controller) {
        controller.enqueue(originalBytes);
        controller.close();
      }
    });
    const compressionStream = new CompressionStream('gzip');
    const compressedStream = readableStream.pipeThrough(compressionStream);

    // 4. 从压缩流中读取数据块
    const reader = compressedStream.getReader();
    const chunks = [];
    while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value); // value 是 Uint8Array 类型的数据块
    }
    return chunks

  }
  const gzipToString= async (data:Uint8Array<ArrayBufferLike>)=>{
    const decompressedStream = new DecompressionStream('gzip');
    const writer = decompressedStream.writable.getWriter();
    writer.write(data.buffer as BufferSource);
    writer.close();
    const decompressedResponse = new Response(decompressedStream.readable);
    const decompressedArrayBuffer = await decompressedResponse.arrayBuffer();
    //const decompressedArrayBuffer = await decompressedBlob.arrayBuffer();
    
    // 尝试将解压缩数据转换为文本，如果不是文本则显示为十六进制
    let resultText;
    try {
        const textDecoder = new TextDecoder();
        resultText = textDecoder.decode(decompressedArrayBuffer);
    } catch (e) {
      console.error(e)
        // 如果不是有效的文本，显示为十六进制
        //resultText = arrayBufferToHexString(decompressedArrayBuffer);
    }
    return resultText
  }

  const srcStringToJsFile = (src:string,back:(msg:{name:string,db:string})=>void)=>{
    let name = ""
    let codeStart = 0
    //let codeEnd  = 0
    //console.log(src)
    regexExec(src,/\/\*\*\s*([\w\.]+)\s*\*/g,(r,i)=>{      
      if (name){
        //codeEnd = 
        //console.log(r,codeStart,src.slice(r.index,i))
        //const db = src.slice(codeStart,r.index).trim()
        //if (db)
        back({name,db:src.slice(codeStart,r.index).trim()})
      }
      name = r[1]
      codeStart = i+1

      // r[1]
      // r.index,i
    })
    if (name)
    back({name,db:src.slice(codeStart).trim()})
/*
    src.split("========").forEach(db=>{
     const name = getFileName(db)
     //console.log("filename",getFileName(db))
     if (name)
     back({
      name ,
      db,
     })
    })
     */
  }  
  onMount(() => {
    document.getElementById("downSTL").addEventListener("click",e=>{
      const res = Exporter() 
      const blob = new Blob([res.buffer as ArrayBuffer], { type: 'application/octet-stream' })
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `${workermsg.name}_${showName}_${workermsg.index.split(".").shift()}_${Date.now()}.stl`; 
      link.click();
      URL.revokeObjectURL(link.href); 
    })  
    document.getElementById("downCode").addEventListener("click",async (e)=>{
      //const res = Exporter() 
      const current = getCurrent(workermsg.index)  
      if (typeof current ==="string"){
        return
      }
      let codeSrc = ""
      //console.log(current)
      //current.children=new Set()
      getCurrentCode(current,(name:string,code:string)=>{
        codeSrc +=`
/**${name}*/
${code}
`        //codeList.push(code)
      })
      if (!window.CompressionStream || !window.DecompressionStream) {
        console.log("down code err")
        return
      }
      const chunks = await stringToGzip(codeSrc)
      const compressedBlob = new Blob(chunks, { type: 'application/gzip' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(compressedBlob);
      link.download = `${workermsg.name}_${showName}_${workermsg.index.split(".").shift()}_${Date.now()}.mgtoy.gz`; 
      link.click();
      URL.revokeObjectURL(link.href); 
    })  
    vscode.postMessage({ 
    //  supportsWebGPU: hasWebGPU,
      type:'loaded'
    });
    el = createCanvasElement() ;   
    el.width = document.body.clientWidth;
    el.height = document.body.clientHeight;
    container.innerHTML=""
    container.appendChild(el)  
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
    }

    svg.addEventListener('click', toggleCamera);

    const updateSize = ()=>{
      el!.width = document.body.clientWidth;
      el!.height = document.body.clientHeight; 

      //console.log("z")
      onWindowResize(el!,cameraType)
    }
    
    window.addEventListener('resize',updateSize);   
    const menu = document.getElementById("module_list")
    menu.addEventListener("click",e=>{
      const button = (e.target  as HTMLInputElement).closest('button');
      console.log(button.textContent)
      if (button.textContent==="..."){
        return
      }
      workermsg.main = button.textContent
      showName="...."
      runWorker(el,workermsg);
    })
    const tmpDiv = menu.firstChild
    const workermsg = {
      ...(window as any).myConfig as {name:string,main:string,index:string},
      cameraType:cameraType,
      module:(modulelist:{list:string[],basename:string})=>{
        showName =modulelist.basename;
        menu.innerHTML=""
     
        modulelist.list.forEach(m=>{
          const div = tmpDiv.cloneNode(true)
          div.textContent = m;
          
          menu.appendChild(div)
        })
        menu.appendChild(tmpDiv)
      }}
    //console.log(workermsg)
    window.addEventListener('message', (event:any) => {
        //worker.postMessage(event.data)
      const message = event.data;
      if (message.gzData){
        gzipToString(message.gzData).then(src=>{
          //console.log(src)
          srcStringToJsFile(src,(db)=>{
            
            //if (db.db) {
              //console.log(db);
              handleCurrentMsg(db)
            //}
            
          })
          console.log(workermsg)
          runWorker(el,workermsg);
        })
        //console.log()
      }
      if (message.stlData){
        console.log(message)
        addSceneSTL(el,new STLLoader().parse(message.stlData));
        document.getElementById("downMenuList").style.display="none"
      }else{
        document.getElementById("downMenuList").style.display="block"
      }
      if (message.getSrc){
        const current = getCurrent(workermsg.index)  
        if (typeof current ==="string"){
          return
        } 
        //current.children=new Set()
        getCurrentCode(current,(name:string,code:string)=>{
          vscode.postMessage({
            type:"src",
            name,
            code:new TextEncoder().encode(code)
          }) 
        })
        vscode.postMessage({
            type:"src"
          }) 

      }
      //console.log(message) 
      if (message.init  ){
        handleCurrentMsg(message.init)        
      }  
      if (message.run){
        workermsg.cameraType = message.open?cameraType:""
        //workermsg.basename = basename;
        runWorker(el,workermsg);
        //console.log
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
<div id="downMenuList">
<div style="position: absolute;right:5px;top:5px;z-index: 11;cursor: pointer;" class="pointer-events-auto " >
 
    <details name="downMenu"  >
        <summary class="download-summary" >
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 32L24 16M24 32L18 26M24 32L30 26" stroke="#3498db" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10 38H38" stroke="#3498db" stroke-width="3" stroke-linecap="round"/>
          </svg>
        </summary>
        <div class="download-options">
            <div class="download-option" id="downSTL">
 
                <span class="option-text"  >STL</span> 
            </div>
            
            <div class="download-option" id="downCode"> 
                <span class="option-text"  >Gzip</span> 
            </div>
 
            
        </div>
    </details>
 
</div>

<div style="position:absolute;left:0px;top:5px;z-index:10;width:100%;font-weight: 500;" class="pointer-events-auto">
  <details name="moduleMenu"  >
    <summary style="cursor: pointer;height:48px;text-align: center;line-height: 48px;"  >
{showName}
</summary>
<div  style="color:white;text-align: center;" id="module_list">
 
    <button class="option-text" style="height:48:px;line-height:48px;cursor: pointer;" >
      ...
    </button>
 
  <!--
  <div class="download-option"> 
      <span class="option-text" id="down3MF" >3MF</span> 
  </div>
  -->
</div>
</details>
</div>
</div>
<div style="position: absolute;left:5px;top:5px;z-index: 11;cursor: pointer;" class="pointer-events-auto" id="camera-toggle">
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