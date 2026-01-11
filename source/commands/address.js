import scan from '../utils/handleData.js';

export default function address(chain, input, flags) {
	const data = scan(chain);
	const baseURL = data.url;
	const addressPath = data.scans.address;
	const url = `${baseURL}${addressPath}${input}`;
	return url;
}
