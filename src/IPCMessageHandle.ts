import * as net from "net";
import {HandMessageFuncMap} from "./util";

export const  initIPCMessageHandle = (getMsg:HandMessageFuncMap)=>{
    getMsg.set('ipc',(e:any,postMsg:(e:any)=>any)=>{
        postMsg(e);
    });
};