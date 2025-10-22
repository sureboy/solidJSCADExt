<script lang="ts" >
    import { Exporter} from "./function/threeScene" 
    import {getCurrent,getCurrentCode,regexExec} from "./function/ImportParser"  
    export let workermsg:{name:string,index:string,main:string}
 
    const downSTLclick = ()=>{
      const res = Exporter() 
      const blob = new Blob([res.buffer as ArrayBuffer], { type: 'application/octet-stream' })
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      //console.log(workermsg)
      link.download = `${workermsg.name}_${workermsg.main}_${workermsg.index.split(".").shift()}_${Date.now()}.stl`; 
      link.click();
      URL.revokeObjectURL(link.href); 
    } 
    const downCodeclick = async (e)=>{
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
      link.download = `${workermsg.name}_${workermsg.main}_${workermsg.index.split(".").shift()}_${Date.now()}.mgtoy.gz`; 
      link.click();
      URL.revokeObjectURL(link.href); 
    }   

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
    
</script>
<details name="downMenu"  >
    <summary class="download-summary" >
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 32L24 16M24 32L18 26M24 32L30 26" stroke="#3498db" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10 38H38" stroke="#3498db" stroke-width="3" stroke-linecap="round"/>
      </svg>
    </summary>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="download-options">
        <div class="download-option"    >
            <div class="option-text" onclick="{downSTLclick}" >STL</div> 
        </div>        
        <div class="download-option"   > 
            <div class="option-text" onclick={downCodeclick} >Gzip</div> 
        </div>        
    </div>
</details>

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