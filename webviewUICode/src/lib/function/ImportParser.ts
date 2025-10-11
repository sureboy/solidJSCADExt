type messageObj = {
    name:string,
    db?:AllowSharedBufferSource
}
type currentObj = { 
    url?:string;
    persons:Set<currentObj>;
    //code?: string; 
    srcList?:((()=>currentObj|string )|string)[]
    toString:()=>string;
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
const includeImport = (window as any).includeImport;
Object.keys(includeImport).forEach(k=>{
    currentMap.set(k,{
         
        persons:new Set<currentObj>(),
        name:k,
        toString:function(){return includeImport[k];}});
});
//console.log(includeImportKeys);
const  importParser = (code:string)=> {
    const regex = /import\s*(?:(?:(?:\w+|\*\s*as\s*\w+|\{[^}]*\})\s+from\s+)?['"]([^'"]+)['"]|['"]([^'"]+)['"])/g;
    const imports:importType[] = [];
    
    let match:RegExpExecArray|null;
    while ((match = regex.exec(code)) !== null) {
        const moduleName = match[1] || match[2];
        //if (!moduleName.startsWith(".")){
        //    continue;
        //}
        const quoteIndex = Math.max(
            match[0].indexOf("'"),
            match[0].indexOf('"')
        );
        const startPosition = match.index + quoteIndex + 1;
        
        imports.push({
            moduleName: moduleName,
            startPosition: startPosition,
            endPosition: startPosition + moduleName.length,
            // fullImport: match[0]
        } as importType);
    }
    
    return imports;
};
 
//const encoder = new TextEncoder();

export const getCurrent = (name:string )=>{
    //this.persons
    
    return currentMap.has(name)?currentMap.get(name):name;

     
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
const reloadCurrent = (c:currentObj,msg:messageObj)=>{
    updateCurrent(c);

    //this.code = ;
    //this.src = [];
    const src = decoder.decode(msg.db);
    let tmpEndPos:number = 0;
    c.srcList = [];

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
        c.srcList.push(()=> getCurrent(p.moduleName));
        tmpEndPos = p.endPosition;

        //console.log(p);
        //return p;
    });
    c.srcList.push( src.slice(tmpEndPos) );
    //console.log(this.toString());
    
    //if (this.persons)

};
const toStringCurrent = (c:currentObj)=>{
    if (c.url){
        return c.url;
    }
    let code ="";
    c.srcList.forEach(src=>{
        
        if (typeof src ==="string"){
            code+=src;
        }else{
            const obj = src();
            code+=obj.toString();
            if (typeof obj !=="string" && obj.persons){
                obj.persons.add(c);
            }
        }
    });
    
    c.url = URL.createObjectURL(new Blob([code],{type:'application/javascript'}));
    //console.log(code);
    return c.url;  
};
const InitCurrentMap = (v:messageObj)=>{
    // v.code = decoder.decode(v.db)
    return {
        persons:new Set<currentObj>(),
        toString:function(){
            return toStringCurrent(this);            
        },
        
        
        ...v
    } as currentObj;
};

 
export const handleCurrentMsg = (message:messageObj)=>{
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
    reloadCurrent(cur,message);
    //msg.reload(message.db);   
       
};