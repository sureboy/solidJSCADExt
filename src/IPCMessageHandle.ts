import { spawn,SpawnOptionsWithoutStdio } from 'child_process';
import type {postTypeStr,HandMessageFuncMap} from './util'; 
import { arrayBuffer, buffer } from 'stream/consumers';

type commandConfigType = {
  command?:string,
  isRun?:boolean,
  args?:string[],
  option?:SpawnOptionsWithoutStdio
}
export const CommandConfig:commandConfigType = {
  //command:"",
}; 

export const runCommand = (
  TypeTag:Map<postTypeStr,number>,
  //postMsg:(e:any)=>any,
//handMap:HandMessageFuncMap
)=>{
  //const start = handMap.get("start");
  //if (start){start({},postMsg);
//}
  const {command,args,option} = CommandConfig;
  //console.log(command,args,option);
  return new Promise<{type:number,msg:{db:ArrayBuffer}}>((resolve, reject) => {
    const proc = spawn(command||"",args,option);
    const chunks: Buffer[] = [];

    proc.stdout.on('data', (chunk: Buffer) => {
        chunks.push(chunk);
    });

    proc.stderr.on('data', (chunk: Buffer) => {
        reject(chunk.toString());
    });
    proc.on('close', (code) => {
        // 合并所有数据块
      //  console.log(code);
      const fullBuffer = Buffer.concat(chunks);
      if (fullBuffer.length < 8) {
        reject(new Error('Insufficient data'));
        return;
      }
      //const msg:{type:Number,msg:{db:ArrayBuffer}} = 
      resolve({type:TypeTag.get("bufferDB")||0,msg:{db:fullBuffer.buffer}});
      return;
  
    });

    proc.on('error', (e)=>{
      reject(e);
    });
  });
  //pythonProcess.once
};