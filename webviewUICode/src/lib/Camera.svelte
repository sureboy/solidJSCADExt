<script lang="ts" module>
let perspectiveIcon:SVGGElement ;
let orthographicIcon:SVGGElement;
let toggleIndicator:SVGGElement;
let isPerspective = true;
//let cameraType = "Perspective"

export function toggleCamera() {
    isPerspective = !isPerspective; 
    perspectiveIcon.setAttribute('opacity', isPerspective ? '1' : '0.5');
    orthographicIcon.setAttribute('opacity', isPerspective ? '0.5' : '1'); 
    toggleIndicator.setAttribute('x', isPerspective ? '12' : '24'); 
    return isPerspective ? 'Perspective' : 'Orthographic'; 
}
</script>

<svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" >
    <!-- 按钮背景 -->
    <rect x="1" y="1" width="46" height="46" rx="4" fill="#2d2d2d" stroke="#555" stroke-width="1"/>
    
    <!-- 透视相机图标 -->
    <g id="perspective-icon" bind:this={perspectiveIcon} transform="translate(8, 8) scale(0.8)">
      <!-- 视锥体 -->
      <path d="M6 6 L26 6 L36 26 L16 26 Z" fill="none" stroke="#4fc3f7" stroke-width="2" stroke-linejoin="round"/>
      <path d="M6 6 L16 26" stroke="#4fc3f7" stroke-width="2"/>
      <path d="M26 6 L36 26" stroke="#4fc3f7" stroke-width="2"/>
      <!-- 相机位置 -->
      <circle cx="21" cy="1" r="3" fill="#4fc3f7"/>
      <line x1="21" y1="4" x2="21" y2="6" stroke="#4fc3f7" stroke-width="2"/>
    </g>
    
    <!-- 正交相机图标 -->
    <g id="orthographic-icon" bind:this={orthographicIcon} transform="translate(8, 8) scale(0.8)" opacity="0.5">
      <!-- 平行投影体 -->
      <rect x="6" y="6" width="30" height="20" fill="none" stroke="#81c784" stroke-width="2" stroke-linejoin="round"/>
      <!-- 投影线 -->
      <line x1="6" y1="6" x2="1" y2="1" stroke="#81c784" stroke-width="2"/>
      <line x1="36" y1="6" x2="41" y2="1" stroke="#81c784" stroke-width="2"/>
      <line x1="36" y1="26" x2="41" y2="31" stroke="#81c784" stroke-width="2"/>
      <line x1="6" y1="26" x2="1" y2="31" stroke="#81c784" stroke-width="2"/>
    </g>
    
    <!-- 切换指示器 -->
    <rect x="12" y="36" width="24" height="4" rx="2" fill="#555"/>
    <rect id="toggle-indicator" bind:this={toggleIndicator} x="12" y="36" width="12" height="4" rx="2" fill="#4fc3f7"/>
    
 
  </svg>