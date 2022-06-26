const path = require('path');

const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log('get file path =>', filePath);

// To get the last path/base name of the file path //
const base = path.basename(filePath);
console.log('get base name =>', base);

// To get the absolute path from the current directory to latest file path "test.txt" //
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log('resolve file path =>', absolute);
