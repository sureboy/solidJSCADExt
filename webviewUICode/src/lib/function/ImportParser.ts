type messageObj = {
    name:string,
    db?:AllowSharedBufferSource | string
}
type currentObj = { 
    url?:string;
    persons:Set<currentObj>;
    //code?: string; 
    srcList?:((()=>Promise<currentObj> )|string)[]
    getUri:()=>Promise<string>;
    //toString:()=>string;
    //children?:Set<currentObj>;
    //update?:()=>void;
    //reload?:(db:AllowSharedBufferSource)=>void;
 
} & messageObj
type importType = {
    moduleName:string,
    startPosition:number,
    endPosition:number,
    //fullImport:string,
    obj:currentObj,
}
const currentMap = new Map<string,currentObj>();
const waitGetMap = new Map<string,(c:currentObj)=>void>();
const includeImport = (window as any).includeImport;
Object.keys(includeImport).forEach(k=>{
    currentMap.set(k,{
         
        persons:new Set<currentObj>(),
        name:k,
        getUri:async ()=>{return includeImport[k];}});
});
 
//console.log(includeImportKeys);
export const regexExec = (code:string,
    regex:RegExp 
    ,back:(r:RegExpExecArray,lastIndex:number)=>void
)=>{
    let match:RegExpExecArray|null;
    while ((match = regex.exec(code)) !== null) {
        
        back(match,regex.lastIndex);
    }
};
const  importParser = (code:string)=> {
    const regex = /import\s*(?:(?:(?:\w+|\*\s*as\s*\w+|\{[^}]*\})\s+from\s+)?['"]([^'"]+)['"]|['"]([^'"]+)['"])/g;
    const imports:importType[] = [];
    regexExec(code,regex,(match,i)=>{
        //console.log(match,match[0].length,i);
        const moduleName = match[1] || match[2];

        const quoteIndex = Math.max(
            match[0].indexOf("'"),
            match[0].indexOf('"')
        );
        const startPosition = match.index + quoteIndex + 1;
        
        imports.push({
            moduleName:moduleName,//.startsWith(".")?moduleName.split("/").pop():moduleName ,
            startPosition: startPosition,
            endPosition: startPosition + moduleName.length,
            // fullImport: match[0]
        } as importType);
    });
   
    //console.log(imports);
    return imports;
};
 
//const encoder = new TextEncoder();
export const getCurrentCode =async ( src:currentObj,back:(name:string,code:string)=>void,children = new Set<currentObj>()) => {
    let code = "";    
    children.add(src);
    if (!src.srcList){
        return;
    }
    for (const _src of src.srcList){
 
        if (typeof _src ==="string"){
            code+=_src;
            continue;
        }
        const ___src =await _src();

         
        //if (!___src.name)console.log(___src);
        if (___src.db){
            
            if (!children.has(___src)) {
               
                await getCurrentCode(___src,back,children);
            }
            //code+= "./" + ___src.name;   
        }//else{
            code+=  ___src.name;      
        //}    
        
        
    };
    if (code){
        //console.log(code);
        back(src.name,code);
    }
};
export const getCurrent =async (name:string,reqMessage?:(e:{type:"req",path:string})=>void )=>{
    //this.persons

     
    return new Promise<currentObj|null>((resolve, reject)=>{
       
        if (currentMap.has(name)){
            resolve(currentMap.get(name));
            return ;
        }
        if (!reqMessage){
            console.log("not reqmsg");
            resolve(InitCurrentMap({name}));
            //reject("Found Not");
            return;
        }
     
        reqMessage({type:"req",path:name});
        waitGetMap.set(name,(c:currentObj)=>{
            
            resolve(c);
           
            
            waitGetMap.delete(name);
        });
        
    });
    
    //return getMsg(name);

    //return currentMap.has(name)?currentMap.get(name):name;
    

     
};
const decoder = new TextDecoder();
const updateCurrent = (c:currentObj)=>{
    //console.log("update",c.name);
    if (!c.url){
        return;
    }
    URL.revokeObjectURL(c.url);
    c.url = '';
    
    c.persons.forEach((p:currentObj)=>{
        updateCurrent(p);
    });
};
const reloadCurrent = (c:currentObj,msg:messageObj,postMessage?:(e:any)=>void)=>{
    updateCurrent(c);

    //this.code = ;
    //this.src = [];
    c.srcList = [];
    if (!msg.db){
        return;
    }
    const src = (typeof msg.db ==="string")?msg.db: decoder.decode(msg.db);
    let tmpEndPos:number = 0;
   

    //let indexPos = 0;
    importParser(src).forEach(p=>{
        //let url:currentObj = getCurrent(p.moduleName);
        /*
        if (currentMap.has(p.moduleName)){
            url = currentMap.get(p.moduleName);           
        } else{
            url = {name:p.moduleName,toString:function(){
                return currentMap.get(this.name).toString();
            }};
        }*/
        c.srcList.push( src.slice(tmpEndPos,p.startPosition) );
        c.srcList.push( ()=>{
            return  getCurrent(p.moduleName,postMessage);
        } );
        tmpEndPos = p.endPosition;

        //console.log(p);
        //return p;
    });
    c.srcList.push( src.slice(tmpEndPos) );
    //console.log(this.toString());
    
    //if (this.persons)

};
const toStringCurrent =async (c:currentObj)=>{
    if (c.url){
        return c.url;
    }
    if (!c.srcList){
        return c.name;
    }
    let code ="";
    for (const src of c.srcList){ 
        if (typeof src ==="string"){
            code+=src;
        }else{
            const obj =await src();
            code+= await obj.getUri();
            if (typeof obj !=="string" && obj.persons){
                obj.persons.add(c);
            }
        }
    };
    if (!code){
        return c.name;
    }
    
    c.url = URL.createObjectURL(new Blob([code],{type:'application/javascript'}));
    //console.log(code);
    return c.url;  
};
const InitCurrentMap = (v:messageObj)=>{
    // v.code = decoder.decode(v.db)
    const cur = {
        persons:new Set<currentObj>(),
        getUri:async ()=>{
            return toStringCurrent(cur);            
        },        
        ...v
    } as currentObj;
    return cur;
};

 
export const handleCurrentMsg = (message:messageObj,postMessage?:(e:any)=>void)=>{
    if (!message.name){         
        return;
    }  
    let cur:currentObj;
    if (!currentMap.has(message.name)){
        cur = InitCurrentMap(message);
        currentMap.set(message.name,cur);

    }else{
        cur = currentMap.get(message.name);        
    }
    reloadCurrent(cur,message,postMessage);
    if (waitGetMap.has(message.name)){
        waitGetMap.get(message.name)(cur);  
    }
    
    //msg.reload(message.db);   
       
};