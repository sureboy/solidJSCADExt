import * as os from "os"; 
export type postTypeStr = 'begin'|'init'|'del'|'run'|'getSrc'|'gzData'|'stlData'
export function getNonce() {
	let text = '';
	const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (let i = 0; i < 32; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
}
export const getLocalIp = ()=> {
	const interfaces = os.networkInterfaces();
	for (const name of Object.keys(interfaces)) {
		if (!interfaces[name]){
			continue;
		}
	  for (const netInterface  of interfaces[name]) {
		// 跳过内部地址和非IPv4地址
		if (netInterface.internal || netInterface.family !== 'IPv4') {
		  continue;
		}
		// 返回第一个找到的非内部IPv4地址
		return netInterface.address;
	  }
	}
	return 'localhost'; // 默认回退地址
};

export const  setCSPMetaInHtml = (html:string, contentValue:string) => {
  // 匹配 <meta http-equiv="Content-Security-Policy" ... content="...">
  // 支持属性值使用单引号或双引号，属性间可能有任意空白
  const regex = /<meta\s+http-equiv=(["'])Content-Security-Policy\1\s+content=(["'])(.*?)\2\s*\/?>/i;
  
  const match = html.match(regex);
  
  if (match) {
    // 如果存在，替换 content 属性值
    // 需要构造新的标签字符串，保留原来的属性顺序和引号风格
    // 简单起见，我们可以用 replace 方法，将 content 的值替换为新值
    // 注意：如果 content 值本身包含引号等，简单的字符串替换可能不安全，但这里假设 content 是合法值
    const newTag = match[0].replace(/(content=)(["']).*?\2/, `$1$2${contentValue}$2`);
    return html.replace(regex, newTag);
  } else {
    // 不存在，在 </head> 前插入（假设有 <head>，如果无 head 则追加到开头或 body 前，这里简化为在头部插入）
    const metaTag = `<meta http-equiv="Content-Security-Policy" content="${contentValue}">`;
    // 尝试在 </head> 前插入，如果没有 head 则插入到 <html> 后或开头
    if (/<\/head>/i.test(html)) {
      return html.replace(/<\/head>/i, metaTag + '</head>');
    } else {
      // 没有 head 标签，直接插入到开头（可能不是最佳位置，但简单处理）
      return metaTag + html;
    }
  }
};

export const insertScriptAtBodyStart = (html: string, codeToInsert: string)=> {
  const bodyRegex = /<body\b[^>]*>/i;
  const bodyMatch = html.match(bodyRegex);
  if (!bodyMatch) {return html;}

  const bodyOpenTag = bodyMatch[0];
  const newScript = `<script>${codeToInsert}</script>`;

  // 在 body 开始标签后立即插入新脚本
  const modifiedHtml = html.replace(bodyRegex, bodyOpenTag + newScript);
  return modifiedHtml;
};
export const  setScriptNonce = (html: string, nonceValue: string): string => {
  // 正则匹配所有 script 开始标签（不包括闭合部分）
  // 捕获属性部分（不含 'script' 和 '>'）
  const scriptOpenTagRegex = /<script\b([^>]*?)>/gi;

  return html.replace(scriptOpenTagRegex, (match, attributes) => {
    // 处理属性字符串，检查是否存在 nonce 属性（不区分大小写）
    const noncePattern = /\bnonce\s*=\s*(["']?)([^"'\s>]*)\1?/i;
    const nonceMatch = attributes.match(noncePattern);

    if (nonceMatch) {
      // 情况1：nonce 属性已存在，替换其值（保留原有引号风格，统一改为双引号）
      const newAttributes = attributes.replace(
        noncePattern,
        `nonce="${nonceValue}"`
      );
      return `<script ${newAttributes}>`;
    } else {
      // 情况2：nonce 属性不存在，添加属性
      // 如果原属性字符串非空，需加空格分隔
      const trimmed = attributes.trim();
      const separator = trimmed ? ' ' : '';
      return `<script ${trimmed}${separator}nonce="${nonceValue}">`;
    }
  });
};
export const  replaceAssetPathsAdvanced = (html: string, replacer: (originalPath: string) => string): string => {
  // 匹配 link 标签，捕获整个 href 属性值
  html = html.replace(/(<link\s+[^>]*\bhref=["'])([^"']+)(["'][^>]*>)/gi, 
    (match, prefix, oldPath, suffix) => prefix + replacer(oldPath) + suffix
  );

  // 匹配 script 标签，捕获整个 src 属性值
  html = html.replace(/(<script\s+[^>]*\bsrc=["'])([^"']+)(["'][^>]*>)/gi, 
    (match, prefix, oldPath, suffix) => prefix + replacer(oldPath) + suffix
  );

  return html;
};