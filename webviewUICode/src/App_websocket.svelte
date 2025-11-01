<script lang="ts">
  import { onMount } from 'svelte';
 
  import { initSolidPage} from './lib/ShowSolid.svelte';
  import HandlePage,{ HandleMessageNew,Direction} from './lib/HandleMessagePage.svelte';
 
 
  let wss:WebSocket
  let WebSocketisOpen = false
  const postMessage = (msg:any)=>{
    if (!WebSocketisOpen){
      console.log("not open",msg)
      return
    }

    wss.send(JSON.stringify(msg))
  }
  onMount(() => {
    
    console.log("href",window.location.href)
    //window.localStorage.getItem(window.location.href)
    initSolidPage()
    wss = new WebSocket(`ws://${window.location.host}`);
    //
    wss.onopen = (e)=>{
      //console.log(e)
     // wss = this
      WebSocketisOpen = true
      postMessage({
        msg:Direction.map(v=>{ 
          return v.name}).join("|"),
        type:'loaded'
      })
       
    }
    wss.onmessage = (event)=>{
      console.log(typeof event.data ,event.data)
      
      if (event.data instanceof Blob ){
        event.data.text().then(db=>{
          const index = db.indexOf('\n');
          //console.log(index,db.substring(0,index),db.substring(index+1))
          const data = JSON.parse(db.substring(0,index))
          data.msg.db = db.substring(index+1)
          HandleMessageNew(data,postMessage)
        })
         return
      }
      if (typeof event.data !== "string"){ 
        return
      }
      const message = JSON.parse(event.data);
      HandleMessageNew(message,postMessage)
      

    }
    
   
  })
</script>
<HandlePage {postMessage}  ></HandlePage> 