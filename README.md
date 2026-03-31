# SolidJSCAD

SolidJSCAD 是一个 VS Code 插件，让你在本地使用 **ESM 模块化 JavaScript** 编写参数化 3D 模型，并实时预览。它基于 **@jscad/modeling** 或 **manifold-3d** 进行几何计算，使用 **Three.js** 渲染，内置 HTTP 服务器，支持浏览器、WebView 和局域网内多设备预览。预览界面提供截图、STL/3MF 导出以及 JS 代码合并 GZ 文件的下载功能，并与在线编辑网站 [solidjscad.com](https://solidjscad.com) 保持同步。

> **solidjscad.com** 是一个在线建模可视化环境，支持云端临时存储（有效期一个月），方便你在任何地方编辑和分享模型。

## 特性

- **零配置自动启动**：当在 VS Code 中打开包含 `solidjscad.json` 的项目时，插件会自动启动 HTTP 服务器并在 WebView 中预览模型，无需任何命令。
- **状态栏快捷菜单**：右下角状态栏提供一键操作：创建项目、重新加载、停止服务器。
- **多模型函数切换**：支持在同一文件中定义多个导出函数，通过 WebView 工具栏下拉菜单实时切换预览模型，`func` 字段仅指定首次加载时默认显示的函数。
- **外部命令集成**：支持在 `solidjscad.json` 中配置 `command` 字段，每次保存前自动执行外部命令（如 Python 脚本），并通过 stdout 传递二进制网格数据，实现与其他语言（Python、C++ 等）的无缝集成。
- **本地 ESM 模块化编程**：直接在 VS Code 中编写现代 JavaScript，使用 `import/export` 组织模型代码。
- **双几何内核**：同时支持 **@jscad/modeling** 和 **manifold-3d** 两种 npm 包，灵活选择。
- **实时 Three.js 渲染**：高亮、旋转、缩放、平移模型，所见即所得。
- **内置 HTTP 服务器**：启动后可通过浏览器或 WebView 访问，支持局域网内其他设备预览（手机、平板等）。
- **丰富的导出功能**（在预览界面工具栏中）：
  - 截图（PNG）
  - 网格文件：STL（ASCII/Binary）、3MF
  - 完整项目：将 JS 代码合并并压缩为 GZ 文件，便于分享或存档
- **开箱即用**：无需额外配置，自动处理依赖和构建。

## 安装

### 方式一：VS Code 商店安装

1. 在 VS Code 扩展商店中搜索 `SolidJSCAD`。
2. 点击安装。
3. 重启 VS Code（如果需要）。

### 方式二：下载 VSIX 文件安装

1. 从 [GitHub Releases](https://github.com/sureboy/solidJSCADExt/releases) 下载最新的 `.vsix` 文件。
2. 在 VS Code 中，打开扩展面板（`Ctrl+Shift+X`），点击右上角的 `...`，选择 **从 VSIX 安装**。
3. 选择下载的 `.vsix` 文件，完成安装。

## 使用方法

### 1. 创建新项目

- 点击右下角状态栏的 **SolidJSCAD** 图标，选择 **Create**。
- 或使用命令面板（`Ctrl+Shift+P`）输入 **SolidJSCAD: Create**。

插件会：
- 创建 `solidjscad.json` 配置文件。
- 生成一个示例模型文件（如 `index.js`），包含两种几何内核的多个示例函数。
- 自动安装必要的 npm 依赖（可选）。

你也可以手动创建以下文件：

#### 示例：模型文件 `index.js`（包含多个导出函数）

```javascript
import modeling from '@jscad/modeling';
import manifold from 'manifold-3d';

// 异步初始化 manifold-3d（WASM 模块）
const Manifold = await manifold();
Manifold.setup();

// 使用 manifold-3d 内核的模型函数
export const manifold_main = (opt) => {
  const option = Object.assign({ size: 2 }, opt);
  const box = Manifold.Manifold.cube(option.size, true);
  const sphere = Manifold.Manifold.sphere(1.2, 48);
  const sphereTranslated = sphere.translate([0.8, 0.8, 0.8]);
  const result = box.subtract(sphereTranslated);
  const meshData = result.getMesh();
  const vertices = meshData.vertProperties;
  const indices = meshData.triVerts;

  // 清理内存（可选）
  box.delete();
  sphere.delete();
  sphereTranslated.delete();
  result.delete();

  return [{ vertices, indices }, option];
};

// 使用 @jscad/modeling 内核的模型函数
export const main = (opt) => {
  const option = Object.assign({ size: 10 }, opt);
  return [modeling.primitives.cube(option), option];
};

// 另一个使用 @jscad/modeling 的模型函数
export const sphere_model = (opt) => {
  const option = Object.assign({ radius: 5 }, opt);
  return [modeling.primitives.sphere(option), option];
};
```

> **说明**：
> - 所有 `export` 的函数都会出现在 WebView 的切换菜单中。
> - `main` 和 `manifold_main` 仅是示例名称，你可以自由命名。
> - manifold 函数需要返回 `{ vertices, indices }` 格式的网格数据，而 JSCAD 函数返回 JSCAD 几何体对象。插件会自动处理这两种返回格式，并渲染为 Three.js 场景。

#### 示例：配置文件 `solidjscad.json`

```json
{
  "in": "index.js",          // 入口文件，相对于工作目录
  "func": "main",            // 首选显示的函数（WebView 中可切换其他函数）
  "date": "1771730448907",   // 时间戳，插件自动维护
  "src": "src",              // 源码目录（可选），存放其他模块
  "name": "test",            // 项目名称
  "command": "python ./test.py"  // 外部命令，每次保存前执行
}
```

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `in` | string | ✅ | 入口文件路径（相对于工作目录） |
| `func` | string | ❌ | 默认显示的函数名，WebView 中可通过下拉菜单切换到其他导出函数 |
| `src` | string | ❌ | 源码目录，插件会将其加入模块解析路径，默认同工作目录 |
| `name` | string | ❌ | 项目名称，用于导出文件命名，默认取入口文件名 |
| `date` | string | ❌ | 时间戳，插件自动维护 |
| `command` | string | ❌ | 每次保存前执行的命令（如 `python ./test.py`），可留空。命令的 stdout 将被解析为二进制网格数据（协议见下文） |

> **配置详情**：插件的所有内部设置（如端口、是否自动启动等）均保存在插件自身的 `config.json` 中，无需在 README 中赘述。如需修改，请直接编辑该文件。

### 2. 外部命令集成（command 字段详解）

`command` 字段允许你调用外部程序（如 Python、C++ 可执行文件）来生成网格数据。当每次保存模型文件或配置文件后，插件会使用 `child_process.spawn` 执行该命令，并捕获其标准输出（stdout）。外部程序需要将网格数据以特定二进制格式写入 stdout，插件解析后将数据传递给 Three.js 进行渲染。

#### 二进制协议

外部程序必须按以下顺序输出：

1. **顶点数量**：4 字节，无符号 32 位整数（`uint32`），小端序。
2. **索引数量**：4 字节，无符号 32 位整数（`uint32`），小端序。
3. **顶点数据**：每个顶点 3 个 `float32` 值（x, y, z），连续存储。总字节数 = `顶点数量 * 3 * 4`。
4. **索引数据**：每个索引 1 个 `uint32` 值（小端序），连续存储。总字节数 = `索引数量 * 4`。

**注意**：索引数组存储的是三角形的三个顶点索引，即每三个索引构成一个三角形，且为无符号 32 位整数。整个索引数组的长度应为 `3 * 三角形数量`。

#### Python 示例

以下是一个使用 `manifold3d` 和 `trimesh` 生成网格数据并通过 stdout 输出的 Python 脚本（`test.py`）：

```python
import manifold3d as manifold
import trimesh
import numpy as np
import sys
import struct

def manifold_to_trimesh(manifold_obj):
    """Convert a Manifold object to a trimesh object"""
    mesh_data = manifold_obj.to_mesh()
    vertices = np.array(mesh_data.vert_properties)
    faces = np.array(mesh_data.tri_verts)
    return trimesh.Trimesh(vertices=vertices, faces=faces)

def main():
    cube = manifold.Manifold.cube([2, 2, 2])
    sphere = manifold.Manifold.sphere(1.2, circular_segments=64)

    # Position sphere
    sphere = sphere.translate([1, 0.5, 0])

    # Boolean operations
    difference = cube - sphere

    # Convert to trimesh
    mesh = manifold_to_trimesh(difference)

    # Get vertices (N x 3) and indices (M x 3)
    vertices = mesh.vertices.astype(np.float32)   # shape (N, 3)
    indices = mesh.faces.flatten().astype(np.uint32)  # shape (M*3,)

    # Write protocol: vertex count, index count
    sys.stdout.buffer.write(struct.pack('<I', len(vertices)))
    sys.stdout.buffer.write(struct.pack('<I', len(indices)))

    # Write vertex data (float32, each vertex 3 floats)
    sys.stdout.buffer.write(vertices.tobytes())
    # Write index data (uint32)
    sys.stdout.buffer.write(indices.tobytes())

    sys.stdout.buffer.flush()

if __name__ == "__main__":
    main()
```

将此脚本放在项目根目录，并在 `solidjscad.json` 中设置 `"command": "python ./test.py"`。每次保存文件时，插件会执行该脚本，并将输出的网格数据实时显示在预览窗口中。

> **提示**：
> - 外部命令的 stdout 必须完全按照上述协议输出，否则解析会失败。
> - stderr 会被记录到插件的输出通道（可通过 VS Code 的“输出”面板查看），便于调试。
> - 如果命令执行失败或返回非零退出码，插件会回退到使用 JavaScript 入口文件中的模型函数。

### 3. 自动预览

当你打开包含 `solidjscad.json` 的工作区时，插件会自动：

- 启动本地 HTTP 服务器（默认端口 `3000`）。
- 在 VS Code 的 WebView 中打开预览窗口。
- 实时监听文件变化，自动更新模型。

你也可以通过浏览器访问 `http://localhost:3000`，或局域网内使用 `http://<你的IP>:3000` 访问（需在插件的 `config.json` 中启用局域网访问）。

### 4. 状态栏菜单

右下角状态栏显示 **SolidJSCAD** 图标，点击后可执行以下操作：

- **Create**：创建新项目（生成配置文件及示例代码）。
- **Reload**：重新加载配置并重启服务器（当修改了 `solidjscad.json` 或需要刷新时使用）。
- **Stop**：停止预览服务器。

> **注**：这些操作也对应各自的命令，可通过命令面板快速调用（命令 ID：`solidjscad.create`、`solidjscad.reload`、`solidjscad.stopPreview`）。不提供“在浏览器中打开”的命令，你可以直接访问 `http://localhost:3000`。

### 5. 切换模型函数

在 WebView 或浏览器的预览界面中，工具栏会显示一个下拉菜单，其中列出了入口文件中所有导出的模型函数。你可以随时切换，预览将实时更新为所选函数的输出。`solidjscad.json` 中的 `func` 字段仅决定首次加载时的默认选择。

### 6. 实时更新

每次保存模型文件（或 `solidjscad.json`），插件会自动重新计算几何体并更新 Three.js 场景，无需手动刷新。如果配置了 `command`，则会先执行命令，使用命令输出的数据；否则使用入口文件中指定的函数。

### 7. 导出与分享

在 WebView 或浏览器的预览界面中，点击工具栏按钮可执行以下操作：

- **截图**：保存当前视角的 PNG 图片。
- **导出 STL/3MF**：下载模型网格文件。
- **下载 GZ 包**：将所有依赖和主文件合并为一个 `.js.gz` 文件，方便分享或作为离线备份。

## 命令

| 命令 ID | 说明 |
|---------|------|
| `solidjscad.create` | 创建新项目（生成配置文件及示例代码） |
| `solidjscad.reload` | 重新加载配置并重启服务器 |
| `solidjscad.stopPreview` | 停止预览服务器 |

> **提示**：预览服务器会在检测到 `solidjscad.json` 时自动启动，无需手动执行 `startPreview` 命令。

## 技术栈

- **几何计算**：[@jscad/modeling](https://www.npmjs.com/package/@jscad/modeling) 或 [manifold-3d](https://www.npmjs.com/package/manifold-3d)（WASM），以及通过 `command` 调用的外部程序（如 Python + manifold3d）
- **渲染**：Three.js
- **模块化**：ES Modules（原生支持，无需打包）
- **服务器**：基于 Express 的轻量 HTTP 服务
- **通信**：WebSocket（用于实时更新预览）

## 常见问题

### Q: 如何选择几何内核？

A: 你可以在同一文件中编写使用不同内核的导出函数，并通过 WebView 下拉菜单切换。插件会根据函数返回值的类型自动适配渲染逻辑。如果使用外部命令，则完全由外部程序决定几何生成。

### Q: 为什么 manifold 函数需要异步初始化？

A: `manifold-3d` 依赖 WASM 模块，需要异步加载。插件会在运行时动态导入模块，你可以在模型文件中直接使用 `await manifold()` 进行初始化，并导出函数。

### Q: 如何切换模型函数？

A: 在预览界面工具栏上有一个下拉菜单，列出了入口文件中所有导出的函数。点击即可切换，切换后模型会立即更新。

### Q: 外部命令（command）何时执行？执行失败怎么办？

A: 每次保存文件时，插件会先执行 `command`（如果非空）。如果命令执行成功（退出码 0）且输出了有效的二进制网格数据，则使用该数据更新预览；如果执行失败或输出无效，插件会回退到使用入口文件中的 JavaScript 模型函数（如果存在）。命令的 stderr 会被打印到 VS Code 的输出面板（选择“SolidJSCAD”通道），便于调试。

### Q: 如何调试外部命令的 stdout 输出？

A: 可以在命令中重定向输出到文件，例如 `python ./test.py > output.bin`，然后使用十六进制编辑器检查是否符合协议格式。插件也会在输出面板中记录命令的退出状态和错误信息。

### Q: 局域网预览无法访问？

A: 请确保在插件的 `config.json` 中启用了局域网访问（`lanAccess: true`），并检查防火墙是否允许 Node.js 进程使用当前端口。

### Q: 如何自定义模块解析路径？

A: 在 `solidjscad.json` 中设置 `src` 字段，插件会将该目录加入模块搜索路径。你也可以在 `package.json` 中使用 `imports` 字段，但请注意插件不支持 `node_modules` 自动解析，所有依赖需通过相对路径导入。

### Q: 导出 GZ 文件后如何使用？

A: 该文件是完整的 JavaScript 代码合并压缩包，可以在 solidjscad.com 的导入功能中直接上传，或解压后作为本地项目使用。

### Q: 配置文件中的 `command` 何时执行？

A: 每次保存模型文件或配置文件后，插件会先执行 `command` 中指定的命令（如果非空），等待命令完成后再启动预览服务器。可用于在预览前进行代码转换或打包，或调用外部程序生成几何数据。

### Q: 如何停止自动启动？

A: 如果你不希望自动启动预览，可以在插件的 `config.json` 中将 `autoStart` 设为 `false`。之后你需要通过状态栏菜单或命令 `SolidJSCAD: Reload` 手动启动服务器（或者重新打开工作区）。

## 开发与贡献

欢迎提交 Issue 和 Pull Request！项目源码托管在 [GitHub](https://github.com/sureboy/solidJSCADExt) 上。

### 本地开发

```bash
git clone https://github.com/sureboy/solidJSCADExt
cd solidJSCADExt
npm install
npm run compile
```

按 F5 启动调试。

## 许可证

MIT © SolidJSCAD Team