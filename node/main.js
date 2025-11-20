import * as csg  from './lib/csgChange.js';
import * as src  from './src/index.js';
 
const main = "main";
const list = Object.keys(src);
const module = {list,basename:main?main:list[0]};
    //self.postMessage({module});
//window.postMessage({module});
const postMsg = (msg )=>{
    window.dispatchEvent(new CustomEvent('solidMsg', {
        detail: msg
      }));
};
postMsg({module});
csg.getCsgObjArray(src[module.basename](),(msg)=>{
    //self.postMessage(msg);
    postMsg(msg);
}) ;