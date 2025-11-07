import {regexExec} from "./ImportParser";
export type workerConfigType = {
  pageType:'run'|'gzData'|'stlData',
  cameraType: 'Perspective' |'Orthographic';
  module: (modulelist: {
      list: string[];
      basename: string;
  }) => void;
  in: string;
  func: string;
  name:string;
}
export type sConfig = {el?:HTMLCanvasElement,workermsg?:workerConfigType,showMenu:number,postMessage?:(m:any)=>void}  
export const gzipToString= async (data: ArrayBuffer )=>{
    const decompressedStream = new DecompressionStream('gzip');
    const writer = decompressedStream.writable.getWriter();
    writer.write(data as BufferSource);
    writer.close();
    const decompressedResponse = new Response(decompressedStream.readable);
    const decompressedArrayBuffer = await decompressedResponse.arrayBuffer();
    //const decompressedArrayBuffer = await decompressedBlob.arrayBuffer();
    
    // 尝试将解压缩数据转换为文本，如果不是文本则显示为十六进制
    let resultText:string = "";
    try {
        const textDecoder = new TextDecoder();
        resultText = textDecoder.decode(decompressedArrayBuffer);
    } catch (e) {
      console.error(e);
        // 如果不是有效的文本，显示为十六进制
        //resultText = arrayBufferToHexString(decompressedArrayBuffer);
    }
    return resultText;
  };


  export  const srcStringToJsFile = (src:string,back:(msg:{name:string,db:string})=>void)=>{
    let name = "";
    let codeStart = 0;
    //let codeEnd  = 0
    //console.log(src)
    regexExec(src,/\/\*\*\s*([\w\.\/]+)\s*\*/g,(r,i)=>{      
      if (name){
        //codeEnd = 
        //console.log(r,codeStart,src.slice(r.index,i))
        //const db = src.slice(codeStart,r.index).trim()
        //if (db)
        back({name,db:src.slice(codeStart,r.index).trim()});
      }
      name = r[1];
      codeStart = i+1;

      // r[1]
      // r.index,i
    });
    if (name){
        back({name,db:src.slice(codeStart).trim()});
    }
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
  }  ;

