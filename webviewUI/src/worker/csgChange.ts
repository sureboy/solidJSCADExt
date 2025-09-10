//import modeling from '@jscad/modeling'; 
//const {geometries} = modeling
const geometries = {
  geom3:{isA:(object:any) => {
    if (object && typeof object === 'object') {
      if ('polygons' in object && 'transforms' in object) {
        if (Array.isArray(object.polygons) && 'length' in object.transforms) {
          return true
        }
      }
    }
    return false
  }},
  geom2:{isA:(object:any) => {
    if (object && typeof object === 'object') {
      if ('sides' in object && 'transforms' in object) {
        if (Array.isArray(object.sides) && 'length' in object.transforms) {
          return true
        }
      }
    }
    return false
  }},
  path2:{isA:(object:any) =>  {
    if (object && typeof object === 'object') {
      // see create for the required attributes and types
      if ('points' in object && 'transforms' in object && 'isClosed' in object) {
        // NOTE: transforms should be a TypedArray, which has a read-only length
        if (Array.isArray(object.points) && 'length' in object.transforms) {
          return true
        }
      }
    }
    return false
  }},
}
type Geom2 =any
type Geom3 = any
type Path2 =any
type Vec3 = any
type Vec2 =any
//import type { TypedArray} from "three" ;
type TypedArray =
    | Int8Array
    | Uint8Array
    | Uint8ClampedArray
    | Int16Array
    | Uint16Array
    | Int32Array
    | Uint32Array
    | Float32Array
    | Float64Array;
type Matrix4Tuple = [
  n11: number,
  n12: number,
  n13: number,
  n14: number,
  n21: number,
  n22: number,
  n23: number,
  n24: number,
  n31: number,
  n32: number,
  n33: number,
  n34: number,
  n41: number,
  n42: number,
  n43: number,
  n44: number,
];
interface csgObj {
    polygons:TypedArray
    list:TypedArray,
    vertices:TypedArray;
    indices?:TypedArray; 
    normals?:TypedArray;
    color?:TypedArray;
    colors?:TypedArray;
    isTransparent?:boolean;
    opacity? :any;
    transforms?:Matrix4Tuple;
    type?:any;

    //csg:Geometry;
}  
 

type  WorkerMsg = {captcha?:boolean,show?:boolean,Flist?:string[][],code?:string,name?:string,ver?:csgObj ,
    errMsg?:string,end?:boolean,start?:boolean,camera?:number,file?:string }


self.onmessage = (e:any) => { 
  console.log(e)
    try{
      e.data.output?.forEach((f:any)=>{
        console.log(f)
        const fn = new Function(f.code);
        fn()
        //eval(f.code)
        //console.log(f)
        //const blob = new Blob([f.code], { type: 'application/javascript' });
        //let w = new Worker(URL.createObjectURL(blob)) 
        //w.terminate()
       // console.log(f.);
      })
  }catch(e){
    console.log(e)
  }
    
//  console.log(e.data.output[0]);
  //self.postMessage(e.data);
    //
    //handCode(e.data,self)
};
  /*

export const baseObject = {
  cube  : modeling.primitives.cube,
   
  primitives  : modeling.primitives,
  colors : modeling.colors,
  booleans  : modeling.booleans,
  

  curves  : modeling.curves,
  geometries  : modeling.geometries,

  maths : modeling.maths,
  measurements  : modeling.measurements,

  text  : modeling.text,
  utils  : modeling.utils,
  expansions  : modeling.expansions,
  extrusions  : modeling.extrusions,

  hulls  : modeling.hulls,
  modifiers  : modeling.modifiers,
  transforms  : modeling.transforms 

 

};// Object.assign({},objs);
*/
export const getCsgObjArray = (db:any[],back:Function)=>{
  try{
      back(<WorkerMsg>{start:true});
      //tmpdb = obj?.main() || []    
      for (let i=0;i<db.length;i++){
          back(<WorkerMsg>{ver:getCsgObj(db[i],back),index:i})    ;     
      } 
      back(<WorkerMsg>{end:true });
  }catch(e:any){ 
      //back(<WorkerMsg>{errMsg:e.toString})
      back(<WorkerMsg>{errMsg:e.toString(),end:true});
  } 
};
const getCsgObj = (v:any,back?:Function )=>{
    try{
      

      
        if (geometries.geom3.isA(v)){ 
            return CSG2Vertices(v)   ;         
        }
        if (geometries.geom2.isA(v)){ 
            return CSGSides2LineSegmentsVertices(v)  ;              
        }
        if (geometries.path2.isA(v)){         
            return CSG2LineVertices(v);
        }   
    
    }catch(e:any){ 
        //back(<WorkerMsg>{errMsg:e.toString})
        if (back) {back(<WorkerMsg>{errMsg:e.toString(),end:true});}
    }      
};

function CSG2Vertices (csg:Geom3) { 
  let vLen = 0; let iLen = 0;
  for (const poly of csg.polygons) {
    const len = poly.vertices.length;
    vLen += len * 3;
    iLen += 3 * (len - 2);
  }
  const vertices = new Float32Array(vLen);
  const normals = new Float32Array(vLen);
  const indices = vLen > 65535 ? new Uint32Array(iLen) : new Uint16Array(iLen);
  const color = csg.color;
  let vertOffset = 0;
  let indOffset = 0;
  let posOffset = 0 ;
  let first = 0;
  for (const poly of csg.polygons) {
    const arr = poly.vertices;
    const normal = calculateNormal(arr);
    const len = arr.length;
    first = posOffset;
    vertices.set(arr[0], vertOffset);
    normals.set(normal, vertOffset);
    vertOffset += 3;
    vertices.set(arr[1], vertOffset);
    normals.set(normal, vertOffset);
    vertOffset += 3;
    posOffset += 2;
    for (let i = 2; i < len; i++) {
      vertices.set(arr[i], vertOffset);
      normals.set(normal, vertOffset);

      indices[indOffset++] = first;
      indices[indOffset++] = first + i -1;
      indices[indOffset++] = first + i;
      vertOffset += 3;
      posOffset += 1;
    }
  }
  return { type: 'mesh', vertices, indices,color, normals ,transforms:csg.transforms} as csgObj;
}
const calculateNormal = (vertices:any) => {
    const v0 = vertices[0];
    const v1 = vertices[1];
    const v2 = vertices[2];
  
    const Ax = v1[0] - v0[0];
    const Ay = v1[1] - v0[1];
    const Az = v1[2] - v0[2];
  
    const Bx = v2[0] - v0[0];
    const By = v2[1] - v0[1];
    const Bz = v2[2] - v0[2];
  
    const Nx = Ay * Bz - Az * By;
    const Ny = Az * Bx - Ax * Bz;
    const Nz = Ax * By - Ay * Bx;
  
    const len = Math.hypot(Nx, Ny, Nz);
    return [Nx / len, Ny / len, Nz / len];
  };
  function CSGSides2LineSegmentsVertices (csg:Geom2) {
    const vLen = csg.sides.length * 6;
    //const {transforms} = csg
    const vertices = new Float32Array(vLen);
    csg.sides.forEach((side:any, idx:any) => {
      const i = idx * 6;
      setPoints(vertices, side[0], i);
      setPoints(vertices, side[1], i + 3);
    });
    return { type: 'lines', vertices, transforms:csg.transforms } as csgObj;
  }

  const setPoints = (points:TypedArray, p:Vec2|Vec3, i:number) => {
    points[i++] = p[0];
    points[i++] = p[1];
    points[i++] = p[2] || 0;
  };
  function CSG2LineVertices (csg:Path2) {
    let vLen = csg.points.length * 3;
    if (csg.isClosed) {vLen += 3;}  
    const vertices = new Float32Array(vLen) ; 
    csg.points.forEach((p:any, idx:any) => setPoints(vertices, p, idx * 3))  ;
    if (csg.isClosed) {
      setPoints(vertices, csg.points[0], vertices.length - 3);
    }
    return { type: 'line', vertices ,transforms:csg.transforms} as csgObj;
  }