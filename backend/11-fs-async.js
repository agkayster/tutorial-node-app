const { readFile, writeFile } = require('fs');

readFile('./backend/content/first.txt', 'utf8', (err, result) => {
	if (err) {
		console.log(err);
		return;
	}
	const first = result;
	readFile('./backend/content/second.txt', 'utf-8', (err, result) => {
		if (err) {
			console.log(err);
			return;
		}
		const second = result;
		writeFile(
			'./backend/content/result-async.txt',
			`Here is the result: ${first}, ${second}`,
			(err, result) => {
				if (err) {
					console.log(err);
					return;
				}
				console.log(result);
			}
		);
	});
});
