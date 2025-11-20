<script lang="ts">
  import { onMount } from 'svelte';
 
  import { initSolidPage} from './lib/ShowSolid.svelte';
  import HandlePage,{ HandleMessage,Direction,solidConfig} from './lib/HandleMessagePage.svelte';
  type dbMsgType = {type:number,msg:{db?:string|ArrayBuffer,name?:string,len?:number}}
 
  let wss:WebSocket
  let WebSocketisOpen = false
  const postMessage = (msg:any)=>{
    if (!WebSocketisOpen){
      console.log("not open",msg)
      return
    }

    wss.send(JSON.stringify(msg))
  }
  solidConfig.showMenu = 1 | (1<<1) | (1<<2) | (1<<3);
  onMount(() => {
    
    console.log("href",window.location.href)
    //window.localStorage.getItem(window.location.href)
    initSolidPage(solidConfig)
    wss = new WebSocket(`ws://${window.location.host}`);
    //
    const  waitBlobMsg = (msg:dbMsgType)  => (db:ArrayBuffer)=>{
      msg.msg.db = db
      HandleMessage(msg,postMessage)
    }
    let  lastWaitMsg :((db:ArrayBuffer)=>void)|null = null
    wss.onopen = (e)=>{
      //console.log(e)
      // wss = this
      WebSocketisOpen = true
      postMessage({ 
      msg:JSON.stringify({direction:Direction.map(v=>{ 
        return v.name}),pageType:solidConfig.workermsg.pageType}), 
      type:'loaded'
    });
    /*
      postMessage({
        msg:Direction.map(v=>{ 
          return v.name}).join("|"),
        type:'loaded'
      })   
    */    
    }
    wss.onclose=(e)=>{
      console.log("close",e)
      setTimeout(()=>window.location.reload(),1000)      
    }
    wss.onmessage = (event)=>{
      //console.log(typeof event.data ,event.data)
      
      if (event.data instanceof Blob ){
        if (lastWaitMsg){
          event.data.arrayBuffer().then(db=>{
            lastWaitMsg(db)
          })
          
        }else{
          event.data.text().then(db=>{
            const index = db.indexOf('\n');
            //console.log(index,db.substring(0,index),db.substring(index+1))
            const data = JSON.parse(db.substring(0,index))
            data.msg.db = db.substring(index+1)
            HandleMessage(data,postMessage)
          })
        }
        
         return
      }
      if (typeof event.data !== "string"){ 
        return
      }
      const message = JSON.parse(event.data) as dbMsgType;
      if (message.msg.len){
        lastWaitMsg = waitBlobMsg(message)
         
      }else{
        HandleMessage(message,postMessage)
      }
      
      

    }
    
   
  })
  solidConfig.postMessage  = postMessage
</script>
<HandlePage  ></HandlePage> 