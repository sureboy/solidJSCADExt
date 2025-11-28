import {RunHttpServer} from './nodeServer.ts'; 
import * as fs from 'fs';
import * as path from 'path';

fs.readFile(path.join("dist","solidjscad.json"),"utf8",(err,data)=>{
    if (err){
        console.error(err);
        return;
    }
    const conf:{
        src: string;
        name: string;
        func: string;
        in: string;
        port: number;
    }=JSON.parse(data);
    RunHttpServer({ 
        rootPath:path.join('.'),
        srcPath:path.join("test"),
        indexHtml:"",...conf
    },(ser)=>{
        console.log(ser);
    });
});

