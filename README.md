# solidJScad README

一个基于JSCAD/modeling和Three.js的3D模型生成与预览VSCode扩展，支持模型的创建、预览以及多种格式的导出。

## 功能特性

- **模型创建**: 基于 `jscad/modeling` 和 ESM 模块系统
- **实时预览**: 集成 `three.js` 引擎，提供高质量的3D模型预览
- **多格式支持**: 
  - 预览 STL 和 solidjscad.GZ 格式的模型文件
  - 导出 STL、PNG 和 solidjscad.GZ 格式的模型文件
- **Web预览**: 内置HTTP服务器，可在浏览器中实时预览模型

## 安装方法

安装本插件非常简便，您可以选择以下任一方式：

### 方法一：通过VSCode应用市场安装（推荐）

1. 打开VSCode编辑器
2. 进入扩展视图（点击左侧活动栏的扩展图标或使用快捷键 `Ctrl+Shift+X`）
3. 在搜索框中输入solidJScad进行搜索
4. 在搜索结果中找到solidJScad，点击"安装"按钮

### 方法二：通过VSIX文件离线安装

1. 获取本插件的`.vsix`安装文件
2. 在VSCode中，使用快捷键 `Ctrl+Shift+P` 打开命令面板
3. 输入并选择"Extensions: Install from VSIX..."
4. 在打开的文件选择器中，找到并选择下载的`.vsix`文件进行安装

或者，您也可以在终端中使用命令行安装 ：

bash
code --install-extension xxxx.vsix

## 使用指南

### 启动插件

插件安装成功后，您可以通过以下两种方式启动：

1.  **基于配置文件启动**：
    在您的项目目录下放置或创建 `solidjscad.json` 配置文件，插件会自动识别并据此启动相应的3D模型功能。

2.  **通过VSCode命令启动**：
    - 使用快捷键 `Ctrl+Shift+P` 打开VSCode命令面板。
    - 输入命令 `solidjscad create` 并执行。
    - 插件将会创建一个新的文件夹，其中包含初始的配置文件（如 `solidjscad.json`）以及开始使用插件所需的其他必要文件。

### 开始使用

成功启动后，您可以根据插件提供的界面或功能进行3D模型的创建、预览和导出操作。

## 技术支持

Email:zaddone@qq.com。