<script lang="ts" >
    import { Exporter} from "./function/threeScene" 
    import {getCurrent,getCurrentCode} from "./function/ImportParser"  
    let {workermsg}:{workermsg:{name:string,index:string,main:string} } = $props()
 
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
    const downCodeclick = async ()=>{
      if (!window.CompressionStream || !window.DecompressionStream) {
        console.log("down code err")
        return
      }
      //const res = Exporter() 
      let indexName = workermsg.index;
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

<details    >
    <summary style="cursor:pointer;height:48px;text-align:left;line-height: 48px;" >
       Download
    </summary>
 
    <div >
       
            <button style="height:48:px;line-height:48px;cursor: pointer;" onclick="{downSTLclick}" >STL</button> 
         
            <button style="height:48:px;line-height:48px;cursor: pointer;" onclick={downCodeclick} >Gzip</button> 
              
    </div>
</details>
 