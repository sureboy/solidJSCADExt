<script lang="ts" module >
import ShowSolid,{ solidConfig} from './ShowSolid.svelte';
import { runWorker } from "./function/worker";
import {delCurrentMsg,handleCurrentMsg,getCurrent,getCurrentCode}  from "./function/ImportParser"
import type {messageObj} from "./function/ImportParser"
import {gzipToString,srcStringToJsFile} from "./function/utils"
import { addSceneSTL} from "./function/threeScene" 
import {STLLoader} from "three/addons/loaders/STLLoader.js"


let showMenu = true
type  handlePostMsg = (msg:any,postMessage?: (e: {name:string,db:string|ArrayBuffer,open:boolean}) => void)=>void
const del:{name:string,fn:handlePostMsg} = {
  name:"del",
  fn:(msg:{name:string})=> {    
    delCurrentMsg(msg.name);
  }
}

const init:{name:string,fn:handlePostMsg} = {
  name:"init",
  fn:(msg:messageObj&{open:boolean},postMessage?: (e: any) => void) =>{
  handleCurrentMsg(msg,postMessage)
  }
}
const run:{name:string,fn:handlePostMsg} ={
  fn:(msg:{open:boolean},postMessage?: (e: any) => void) =>{ 
    runWorker(solidConfig.el,Object.assign({},solidConfig.workermsg,{cameraType:msg.open?solidConfig.workermsg.cameraType:''}),postMessage);    
  },
  name:"run"
}
const getSrc:{name:string,fn:handlePostMsg} = {
  fn:(msg:any,postMessage?: (e: any) => void) =>{
  let indexName = solidConfig.workermsg.index;
      if (!indexName.startsWith("./")){
        indexName = "./"+indexName;
      }
    getCurrent(indexName,postMessage).then(
        current=>{   
          console.log(current)     
        getCurrentCode(current,(name:string,code:string)=>{
          postMessage({
            type:"src",
            name,
            code
            //code:new TextEncoder().encode(code)
          }) 
        }).then(()=>{
          getCurrent("./lib/csgChange.js",postMessage).then(c=>{
            getCurrentCode(c,(name:string,code:string)=>{
              postMessage({
                type:"src",
                name,
                code
                //code:new TextEncoder().encode(code)
              }) 
            }).then(()=>{
              postMessage({
            type:"src"
          }) 
            })
          });
          
        })
      })
  },
  name:"getSrc"
}
const gzData:{name:string,fn:handlePostMsg} = {
  fn:(message:{db:ArrayBuffer},postMessage?: (e: any) => void)=>{
  gzipToString(message.db).then(src=>{
    
    srcStringToJsFile(src,(db)=>{ 
      
        handleCurrentMsg(db) 
        console.log(db.name);
    }) 
    console.log(solidConfig)
    runWorker(solidConfig.el,solidConfig.workermsg,postMessage);
  }) 
  },
  name:'gzData'
}
const stlData:{name:string,fn:handlePostMsg} = {
  fn:(message:{db:ArrayBuffer},)=>{
  addSceneSTL(solidConfig.el,new STLLoader().parse(message.db));
    showMenu=false
  },
name:"stlData"
}
export const Direction:{name:string,fn:handlePostMsg}[] =[ init, del,run,getSrc,gzData,stlData ] 
const getMsgHandle = (type:number )=>{
  function* getTag  () {
    
    //const out =[]
    for (let i = 0; i < Direction.length; i ++) {    
      if ((type & (1<<i)) !==0){
        yield Direction[i]
      }
    }
    //return out 
  }
  return getTag()
}

export const HandleMessageNew = ( 
  message:{type:number,msg:any},
  postMessage?: (e: any) => void)=>{
    console.log("messagepost",message)
    for (const type of getMsgHandle(message.type)) {
      type.fn(message.msg,postMessage)
    }

}
export const HandleMessage = (message:{
    del?:{name:string},
    init?:{name:string,db?:any},
    run?:string|boolean,
    open?:boolean|string,
    getSrc?:boolean|string,
    gzData?:any,
    stlData?:any,
},postMessage?: (e: any) => void)=>{
    if (message.gzData){
        gzipToString(message.gzData).then(src=>{
          
          srcStringToJsFile(src,(db)=>{ 
           
              handleCurrentMsg(db) 
              console.log(db.name);
          }) 
          console.log(solidConfig)
          runWorker(solidConfig.el,solidConfig.workermsg,postMessage);
        }) 
      }
      if (message.stlData){
        console.log(message)
        addSceneSTL(solidConfig.el,new STLLoader().parse(message.stlData));
        showMenu=false
        //document.getElementById("downMenuList").style.display="none"
      }else{
        showMenu=true
        //document.getElementById("downMenuList").style.display="block"
      }
      if (message.getSrc){
        getCurrent(solidConfig.workermsg.index,postMessage).then(
          current=>{   
            console.log(current)     
          getCurrentCode(current,(name:string,code:string)=>{
            postMessage({
              type:"src",
              name,
              code:new TextEncoder().encode(code)
            }) 
          }).then(()=>{
            postMessage({
              type:"src"
            }) 
          })
        })
  
      }
    if (message.del){
      delCurrentMsg(message.del.name);
    }
    //console.log(message) 
    if (message.init  ){
      handleCurrentMsg(message.init,postMessage)        
    }  
    if (message.run){
      console.log("run",solidConfig)
      //showMenu=false
      //if (!message.open) solidConfig.workermsg.cameraType = "" 
      runWorker(solidConfig.el,Object.assign({},solidConfig.workermsg,{cameraType:message.open?solidConfig.workermsg.cameraType:''}),postMessage);
      //console.log
    }
  }
</script>
<script lang="ts" >
  export let postMessage :(msg:any)=>void
</script>
<ShowSolid {postMessage}  {showMenu}></ShowSolid> 