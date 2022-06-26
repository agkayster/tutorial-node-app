const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./backend/content/first.txt', 'utf8');
const second = readFileSync('./backend/content/second.txt', 'utf-8');

writeFileSync(
	'./backend/content/result-sync.txt',
	`Here is the result: ${first}, ${second}`
);
