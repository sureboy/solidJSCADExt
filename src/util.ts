import * as os from "os"; 
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