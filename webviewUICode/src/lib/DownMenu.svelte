<script lang="ts" >
    import { Exporter} from "./function/threeScene" 
    import {getCurrent,getCurrentCode} from "./function/ImportParser"  
    let {workermsg}:{
      
      workermsg:{     
      postMessage: (m: any) => void, 
      showMenu:number
      name:string,
      in:string,
      func:string} } = $props()
    const downSrcClick = ()=>{
      console.log("down src")
      workermsg.postMessage({
            type:"downSrc"
        }) 
        return;
      let indexName = workermsg.in;
      if (!indexName.startsWith("./")){
        indexName = "./"+indexName;
      }
      getCurrent(indexName,workermsg.postMessage).then(
        current=>{   
          console.log(current)     
        getCurrentCode(current,(name:string,code:string)=>{
          workermsg.postMessage({
            type:"src",
            name,
            code
            //code:new TextEncoder().encode(code)
          }) 
        }).then(()=>{
          getCurrent("./lib/csgChange.js",workermsg.postMessage).then(c=>{
            getCurrentCode(c,(name:string,code:string)=>{
              workermsg.postMessage({
                type:"src",
                name,
                code
                //code:new TextEncoder().encode(code)
              }) 
            }).then(()=>{
              workermsg.postMessage({
            type:"src"
          }) 
            })
          });
          
        })
      })
    }
    const downSTLclick = ()=>{
      const res = Exporter() 
      const blob = new Blob([res.buffer as ArrayBuffer], { type: 'application/octet-stream' })
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      //console.log(workermsg)
      link.download = `${workermsg.func}_${workermsg.in.split(".").shift()}_${workermsg.name}_${Date.now()}.stl`; 
      link.click();
      URL.revokeObjectURL(link.href); 
    } 
    const downCodeclick = async ()=>{
      if (!window.CompressionStream || !window.DecompressionStream) {
        console.log("down code err")
        return
      }
      //const res = Exporter() 
      let indexName = workermsg.in;
      if (!indexName.startsWith("./")){
        indexName = "./"+indexName;
      }
      const csgObj = await getCurrent("./lib/csgChange.js");
      const current =await getCurrent(indexName)  
      //console.log(current)
      let codeSrc = ""
      await getCurrentCode(csgObj,(name:string,code:string)=>{
        codeSrc +=`
/**${name}*/
${code}
`        //codeList.push(code)
      })
      await getCurrentCode(current,(name:string,code:string)=>{
        codeSrc +=`
/**${name}*/
${code}
`        //codeList.push(code)
      })
      //console.log("codeSrc",codeSrc)
      const chunks = await stringToGzip(codeSrc)
      const compressedBlob = new Blob(chunks, { type: 'application/gzip' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(compressedBlob);
      link.download = `${workermsg.func}_${workermsg.in.split(".").shift()}_${workermsg.name}_${Date.now()}.solidjscad.gz`; 
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
<details    >
    <summary style="cursor:pointer;height:48px;text-align:left;line-height: 48px;" >
       Download
    </summary>
    <div >
      {#if (workermsg.showMenu & (1<<2))}
      <button style="height:48:px;line-height:48px;cursor: pointer;" onclick="{downSTLclick}" >STL</button>  
      {/if}
      {#if (workermsg.showMenu & (1<<3))}
      <button style="height:48:px;line-height:48px;cursor: pointer;" onclick={downCodeclick} >Gzip</button>      
      {/if}
      {#if (workermsg.showMenu & (1<<4))}
      <button style="height:48:px;line-height:48px;cursor: pointer;" onclick={downSrcClick} >Src</button>      
      {/if}
    </div>
</details>
 