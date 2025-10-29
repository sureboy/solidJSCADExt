import {
	DirectionalLight,
	HemisphereLight,
	AmbientLight,
	PerspectiveCamera,
	OrthographicCamera,
	BufferGeometry,
	Scene,
	WebGLRenderer, 
	Box3,
	Vector3,
	Group,
    Object3D,
	Mesh,
	MeshPhongMaterial,
	AxesHelper
} from "three"; 
//import { WebGPURenderer } from '';
//import {	
//  WebGPURenderer
//} from "three/webgpu"
//import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import {STLExporter} from "three/addons/exporters/STLExporter.js" 
//const cube = new Mesh();
//const loader = new STLLoader()

const scene = new Scene();
const group = new Group();
const LightGroup = new Group();

const hemisphereLight = new HemisphereLight(
	0xffffbb, // 天空颜色
	0xffffbb, // 地面颜色
	0.6 // 强度
  );
  scene.add(hemisphereLight);
const directionalLight = new DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 7);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.width = 2048;
directionalLight.shadow.mapSize.height = 2048;
LightGroup.add(directionalLight);

// 2. 环境光 - 填充阴影，避免完全黑暗的区域
const ambientLight = new AmbientLight(0x404040, 0.3);
LightGroup.add(ambientLight);

// 3. 补光 - 从相反方向提供柔和光线
const fillLight = new DirectionalLight(0xffffff, 0.3);
fillLight.position.set(-5, 5, -5);
LightGroup.add(fillLight);

// 4. 边缘光/轮廓光 - 增强物体轮廓
const rimLight = new DirectionalLight(0xffffff, 0.4);
rimLight.position.set(0, 5, -10);
LightGroup.add(rimLight)

const axes = new AxesHelper(20);
LightGroup.add(axes)

scene.background = null; 

const cameraP = new PerspectiveCamera(40, 1, 0.1, 2000);// new PerspectiveCamera(50, 1, 0.1, 2000); 
const camerak = new OrthographicCamera(0,0,0,0,0.1,2000)
let camera:OrthographicCamera|PerspectiveCamera =cameraP ; 
let renderer:WebGLRenderer;
let OrbControls:OrbitControls;
let _el: HTMLCanvasElement;
/*
const directionalLight = new DirectionalLight( 0xffffff, 0.2 );
directionalLight.position.set(0, 1, 0)  

const hemisphereLight = new HemisphereLight(0xffffff, 0x444444);
//hemisphereLight.position.set(1, 1, 1);
const axes = new AxesHelper(20);
LightGroup.add(directionalLight,axes,hemisphereLight)
*/
scene.add(group)
scene.add(LightGroup)
const getSize = (obj:Object3D)=>{
	const fobj = new Box3().setFromObject(obj)
	const sceneSize = fobj.getSize(new Vector3())
	let size =   sceneSize.length();
	if (!size) size= getSize(axes)
	return size
}
const ExporterSTL =new STLExporter()
export const Exporter  = ()=> ExporterSTL.parse(group,{binary: true})
	

 
export function onWindowResize(el: HTMLCanvasElement, changeCamera:string = "Perspective" ) {
	if (!renderer)return;
	//if (group.children.length===0)return;
	//console.log(el.width,el.height,orthographic,changeCamera,group)
 
		if (changeCamera ==="Orthographic"){ 
			
			//let  size = getSize(group);
			const k = el.width/el.height
			const s = getSize(group)/2;
			camera = camerak;
			//camera = new OrthographicCamera( -s *k,s*k,s,-s,0.1,2000)
			camera.left = -s *k;
			camera.right = s*k;
			camera.top = s;
			camera.bottom = -s;
			//camera = new OrthographicCamera( -1,1,1,-1,0.1,2000)
			//console.log(s)
			camera.position.set(0,0,s); 
			initOrb(el)
			//camera.lookAt(scene.position)
		}else if (changeCamera==="Perspective"){
		
			 
			camera =cameraP
			const  size = getSize(group);
			const fov =  camera.fov*(Math.PI /180); 	 
			camera.position.z = size /2/Math.tan(fov/2); 	 	
			camera.aspect = el.width/el.height	
			initOrb(el)		
		}
 
	
	//OrbControls.object = camera	 
	camera.updateProjectionMatrix()
	renderer.setSize(el.width,el.height)	
	renderer.render(scene, camera)
}
const AnimationFrame = ()=>{
	requestAnimationFrame(() => {
		renderer.render(scene, camera)
		//OrbControls.update();
	}); 	
}
const initOrb = (el:HTMLCanvasElement)=>{
	if (OrbControls){
		OrbControls.object = camera
		OrbControls.removeEventListener("change",AnimationFrame)
		//return;
		//OrbControls.dispose()
	}else{
		OrbControls = new OrbitControls(camera, el); 
	}
	
	OrbControls.addEventListener("change",AnimationFrame)

	/*
	OrbControls.addEventListener("start",(e)=>{ 
		if (stopAnimate){
			stopAnimate=false
			animate(0)
		}			
	})
	OrbControls.addEventListener("end",(e)=>{ 
		stopAnimate=true
	})	
	*/
};
 
const initRender = (el:HTMLCanvasElement,orthographic:boolean=false)=>{
	renderer = new WebGLRenderer({ antialias: true,alpha:true, canvas: el,preserveDrawingBuffer:true, });
	//camera =orthographic?(new OrthographicCamera(el.width/-2,el.width/2,el.height/2,el.height/-2,1,1000)):(new PerspectiveCamera(50, 1, 1, 1000)); 
	//renderTarget = new WebGLRenderTarget( el.width,el.height );
	//renderer.setRenderTarget(renderTarget)
	
	initOrb(el) ;
 
	//onWindowResize(el,true,orthographic)
	
};
export const  startSceneOBJTF = (el: HTMLCanvasElement,...object: Object3D[])=>{
	if (el !== _el){
		_el = el
		initRender(el)
		 
	}	else{
		group.clear();
		/*
		const al = 0.3
		const directionalLight1 = new DirectionalLight( 0xffffff, al );
		directionalLight1.position.set(-1, -1, -1)  
		const directionalLight2 = new DirectionalLight( 0xffffff, al );
		directionalLight2.position.set(1, 1, 1)  
		group.add(...object)
		
		*/
	}

	//group.add(hemisphereLight);
	//onWindowResize(el)	 

}
 
export const  startSceneOBJ = (el: HTMLCanvasElement)=>{
	if (el !== _el){
		_el = el;
		initRender(el);
		 
	}	else{
		group.clear();
		//cube.clear();
		//group.add(hemisphereLight,axes)
	}

	//group.add(hemisphereLight);
	//onWindowResize(el)	 

}
const materialSTL = new MeshPhongMaterial({
	color: 0x0078d4,
	specular: 0x111111,
	shininess: 200
});
export const addSceneSTL = (el:HTMLCanvasElement,m:BufferGeometry) =>{
	if (el !== _el){
		_el = el;
		initRender(el);
	}	
	group.add(new Mesh(m,materialSTL));
	onWindowResize(el);
	return;
};
export const  addSceneOBJ = (el: HTMLCanvasElement,...m:Object3D[])=>{
	if (el !== _el){
		_el = el
		initRender(el)
	}	
	//console.log(m)
 
	group.add(...m )
	
	
	//group.updateMatrix()
	return

}
 