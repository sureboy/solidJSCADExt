import * as csg  from './lib/csgChange.js';
import * as src  from './src/index.js';
 
  const main = "main";
  const list = Object.keys(src);
  const module = {list,basename:main?main:list[0]};
  console.log("run worker",list);
  self.onmessage = (e)=>{
    const {func,options} = e.data;
    if (func){ 
      csg.getCsgObjArray(src[e.data.func](options),(msg)=>{
        console.log(msg);
        self.postMessage(msg);
      });
    }
  };
  self.postMessage({module});
  csg.getCsgObjArray(src[module.basename](),(msg)=>{
  self.postMessage(msg);
}) ;