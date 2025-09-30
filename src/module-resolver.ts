import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import { ESMModule, ResolvedImport } from './types';

export class ESModuleResolver {
    private importCache: Map<string, string> = new Map();

    // 解析 ESM 导入语句
    private parseImports(code: string): string[] {
        const imports: string[] = [];
        
        // 匹配各种 import 语法
        const importPatterns = [
            ///import\s+(?:\*\s+as\s+(\w+)|{([^}]+)}|(\w+))\s+from\s+['"]([^'"]+)['"]/g,
            /import\s+(?:\*\s+as\s+\w+|[\w{},\s]+)\s+from\s+['"]([^'"]+)['"]/g,
            /import\s+['"]([^'"]+)['"]/g,
            /export\s+(?:\*\s+from|{[^}]+}\s+from)\s+['"]([^'"]+)['"]/g
        ];

        for (const pattern of importPatterns) {
            let match;
            while ((match = pattern.exec(code)) !== null) {
                console.log(match);
                if (match[1] && match[1].startsWith('.')) {
                    imports.push(match[1]);
                }
            }
        }

        return [...new Set(imports)]; // 去重
    }

    // 解析 ESM 导出语句
    private parseExports(code: string): string[] {
        const exports: string[] = [];
        
        const exportPatterns = [
            /export\s+default\s+(\w+)/g,
            /export\s+(?:const|let|var|function|class)\s+(\w+)/g,
            /export\s+{([^}]+)}/g
        ];

        for (const pattern of exportPatterns) {
            let match;
            while ((match = pattern.exec(code)) !== null) {
                if (match[1]) {
                    if (pattern === exportPatterns[2]) {
                        // 处理 export { a, b, c } 语法
                        const items = match[1].split(',').map(item => item.trim().split(/\s+as\s+/)[0]);
                        exports.push(...items);
                    } else {
                        exports.push(match[1]);
                    }
                }
            }
        }

        return [...new Set(exports)];
    }

    // 解析相对路径导入
    private async resolveRelativeImport(specifier: string, basePath: string): Promise<ResolvedImport | null> {
        try {
            if (specifier.startsWith('.')) {
                const resolvedPath = path.resolve(path.dirname(basePath), specifier);
                
                // 尝试不同的文件扩展名
                const extensions = ['.js', '.mjs', '/index.js', '/index.mjs'];
                for (const ext of extensions) {
                    const fullPath = resolvedPath.endsWith('.js') || resolvedPath.endsWith('.mjs') 
                        ? resolvedPath 
                        : resolvedPath + ext;
                    
                    if (fs.existsSync(fullPath)) {
                        const code = fs.readFileSync(fullPath, 'utf-8');
                        return {
                            specifier,
                            resolvedCode: code,
                            isExternal: false
                        };
                    }
                }
            }
            
            return null;
        } catch (error) {
            console.error(`解析导入失败: ${specifier}`, error);
            return null;
        }
    }
 
    // 转换导入语句为动态导入
    private transformImports(code: string): string {
        return code
            // 转换静态导入为动态导入
            .replace(/import\s+(?:\*\s+as\s+(\w+)|{([^}]+)}|(\w+))\s+from\s+['"]([^'"]+)['"]/g, 
                (match, namespaceImport, namedImport, defaultImport, specifier) => {
                    if (specifier.startsWith('.')) {
                        // 相对路径 - 转换为动态导入
                        const varName = namespaceImport || defaultImport || namedImport?.split(',')[0]?.trim();
                        return `const ${varName} = await import('${specifier}');`;
                    } else {
                        // 外部模块 - 保留原样（将在浏览器中处理）
                        return match;
                    }
                })
            // 处理 import 'module' 语法
            .replace(/import\s+['"]([^'"]+)['"]/g, 
                (match, specifier) => {
                    if (specifier.startsWith('.')) {
                        return `await import('${specifier}');`;
                    }
                    return match;
                });
    }

    // 分析 ESM 模块
    public analyzeModule(code: string, filePath?: string): ESMModule {
        return {
            code,
            imports: this.parseImports(code),
            exports: this.parseExports(code),
            filePath
        };
    }

    // 准备在 Webview 中运行的代码
    public async prepareForWebview(module: ESMModule): Promise<string> {
        let preparedCode = module.code;

        // 转换相对路径导入
        preparedCode = this.transformImports(preparedCode);

        // 包装代码以便在 Webview 中执行
        const wrappedCode = `
// ESM Webview Runner - 生成的代码
(async function() {
    try {
        // 设置全局 console 以捕获输出
        const originalConsole = console;
        window.vscodeConsole = {
            log: (...args) => parent.postMessage({ type: 'log', data: args.map(arg => 
                typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
            ).join(' ') }),
            error: (...args) => parent.postMessage({ type: 'error', data: args.join(' ') }),
            warn: (...args) => parent.postMessage({ type: 'log', data: 'WARN: ' + args.join(' ') }),
            info: (...args) => parent.postMessage({ type: 'log', data: 'INFO: ' + args.join(' ') })
        };

        // 临时替换 console
        const originalConsoleMethods = {};
        for (const method of ['log', 'error', 'warn', 'info']) {
            originalConsoleMethods[method] = console[method];
            console[method] = window.vscodeConsole[method];
        }

        // 执行用户代码
        ${preparedCode}

        // 恢复原始 console
        for (const method of ['log', 'error', 'warn', 'info']) {
            console[method] = originalConsoleMethods[method];
        }

        // 发送执行完成消息
        parent.postMessage({ type: 'result', data: '代码执行完成' });

    } catch (error) {
        parent.postMessage({ 
            type: 'error', 
            data: '执行错误: ' + error.message,
            stack: error.stack 
        });
    }
})();
`;

        return wrappedCode;
    }

    // 获取外部 CDN 链接
    public getCDNUrl(moduleName: string): string {
        const cdnMap: { [key: string]: string } = {
            'react': 'https://esm.sh/react@18',
            'react-dom': 'https://esm.sh/react-dom@18',
            'vue': 'https://esm.sh/vue@3',
            'lodash': 'https://esm.sh/lodash',
            'axios': 'https://esm.sh/axios',
            'moment': 'https://esm.sh/moment',
            'dayjs': 'https://esm.sh/dayjs',
            'rxjs': 'https://esm.sh/rxjs',
            // 添加更多常用库...
        };

        return cdnMap[moduleName] || `https://esm.sh/${moduleName}`;
    }
}