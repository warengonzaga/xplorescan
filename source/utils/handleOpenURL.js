import open from 'open';

export default function openURL(url) {
	console.log(`Opening ${url}...`);
	open(url)
		.then(() => {
			console.log(`Opened ${url} in your default browser.`);
		})
		.catch(err => {
			console.error(
				`Failed to open ${url} in your default browser. Error: ${err}`,
			);
		});
}
