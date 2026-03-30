import { spawn,SpawnOptionsWithoutStdio } from 'child_process';
import type {postTypeStr,HandMessageFuncMap} from './util'; 

type commandConfigType = {
  command?:string,
  args?:string[],
  option?:SpawnOptionsWithoutStdio
}
export const CommandConfig:commandConfigType = {
  //command:"",
}; 
export const handleCommand = (
  TypeTag:Map<postTypeStr,number>,
  postMsg:(e:any)=>any,
handMap:HandMessageFuncMap)=>{
  const start = handMap.get("start");
  if (start){start({},postMsg);}
  const {command,args,option} = CommandConfig;
  console.log(command,args,option);

  const proc = spawn(command||"",args,option);
  const chunks: Buffer[] = [];

  proc.stdout.on('data', (chunk: Buffer) => {
      chunks.push(chunk);
  });

  proc.stderr.on('data', (chunk: Buffer) => {
      console.error(chunk.toString());
  });
  proc.on('close', (code) => {
      // 合并所有数据块
      console.log(code);
    const fullBuffer = Buffer.concat(chunks);
    if (fullBuffer.length < 8) {
      console.log(new Error('Insufficient data'));
      return;
    }
    postMsg({type:TypeTag.get("bufferDB"),msg:{db:fullBuffer.buffer}});
    return;
 
  });

  proc.on('error', (e)=>{
    console.error(e);
  });
  //pythonProcess.once
};