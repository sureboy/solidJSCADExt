(function() {
    let renderer, scene, camera, mesh;
    let container, infoDiv;
    
    const vscode = acquireVsCodeApi();
    
    document.addEventListener('DOMContentLoaded', init);
    
    function init() {
        container = document.getElementById('container');
        infoDiv = document.getElementById('info');
        
        // 通知扩展webview已加载
        vscode.postMessage({ type: 'loaded' });
        
        // 设置Three.js场景
      
        
        // 处理来自扩展的消息
        window.addEventListener('message', event => {
            const message = event.data;
            console.log(message);
            switch (message.type) {
                case 'stlData':
                    loadSTLModel(message.data);
                    break;
            }
        });
        setupThreeJS();
    }
    
    function setupThreeJS() {
        // 创建场景
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x1e1e1e);
        
        // 创建相机
        const aspectRatio = container.clientWidth / container.clientHeight;
        camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
        camera.position.z = 5;
        
        // 创建渲染器
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);
        
        // 添加光源
        const ambientLight = new THREE.AmbientLight(0x404040);
        scene.add(ambientLight);
        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(1, 1, 1);
        scene.add(directionalLight);
        
        // 添加网格辅助工具
        const gridHelper = new THREE.GridHelper(10, 10);
        scene.add(gridHelper);
        
        const axesHelper = new THREE.AxesHelper(5);
        scene.add(axesHelper);
        
        // 处理窗口大小变化
        window.addEventListener('resize', onWindowResize);
        
        // 添加鼠标控制
        setupMouseControls();
        
        // 开始动画循环
        animate();
    }
    
    function loadSTLModel(data) {
        const loader = new THREE.STLLoader();
        const geometry = loader.parse(new Uint8Array(data));
        
        // 清除现有模型
        if (mesh) {
            scene.remove(mesh);
            mesh.geometry.dispose();
            mesh.material.dispose();
        }
        
        // 计算居中位置
        geometry.computeBoundingBox();
        const center = new THREE.Vector3();
        geometry.boundingBox.getCenter(center);
        geometry.translate(-center.x, -center.y, -center.z);
        
        // 创建材质和网格
        const material = new THREE.MeshPhongMaterial({
            color: 0x0078d4,
            specular: 0x111111,
            shininess: 200
        });
        
        mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        
        // 调整相机位置以适应模型
        const boundingBox = new THREE.Box3().setFromObject(mesh);
        const size = boundingBox.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const fov = camera.fov * (Math.PI / 180);
        let cameraZ = Math.abs(maxDim / (2 * Math.tan(fov / 2)));
        cameraZ *= 1.5; // 稍微后退一点
        
        camera.position.z = cameraZ;
        camera.lookAt(new THREE.Vector3(0, 0, 0));
        
        // 更新信息显示
        updateInfo(geometry, data.length);
    }
    
    function updateInfo(geometry, fileSize) {
        const triangleCount = geometry.index ? geometry.index.count / 3 : geometry.attributes.position.count / 3;
        const fileSizeKB = (fileSize / 1024).toFixed(2);
        
        infoDiv.innerHTML = `
            Triangles: ${triangleCount.toLocaleString()}<br>
            File Size: ${fileSizeKB} KB<br>
            Use mouse to rotate, scroll to zoom
        `;
    }
    
    function onWindowResize() {
        const width = container.clientWidth;
        const height = container.clientHeight;
        
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        
        renderer.setSize(width, height);
    }
    
    function setupMouseControls() {
        let isDragging = false;
        let previousMousePosition = {
            x: 0,
            y: 0
        };
        
        container.addEventListener('mousedown', (e) => {
            isDragging = true;
        });
        
        container.addEventListener('mousemove', (e) => {
            if (!isDragging || !mesh) return;
            
            const deltaMove = {
                x: e.offsetX - previousMousePosition.x,
                y: e.offsetY - previousMousePosition.y
            };
            
            mesh.rotation.y += deltaMove.x * 0.01;
            mesh.rotation.x += deltaMove.y * 0.01;
            
            previousMousePosition = {
                x: e.offsetX,
                y: e.offsetY
            };
        });
        
        container.addEventListener('mouseup', () => {
            isDragging = false;
        });
        
        container.addEventListener('mouseleave', () => {
            isDragging = false;
        });
        
        container.addEventListener('wheel', (e) => {
            if (!mesh) return;
            
            e.preventDefault();
            camera.position.z += e.deltaY * 0.01;
        });
        
        container.addEventListener('click', (e) => {
            previousMousePosition = {
                x: e.offsetX,
                y: e.offsetY
            };
        });
    }
    
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
})();