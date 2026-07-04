import scan from '../utils/handleData.js';

export default function transaction(chain, input, flags) {
	const data = scan(chain);
	const baseURL = data.url;
	const txPath = data.scans.tx;
	const url = `${baseURL}${txPath}${input}`;
	return url;
}
