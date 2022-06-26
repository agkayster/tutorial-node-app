// Modules: Encapsulated code (Only share minimum)
//CommonJS - In CommonJS, every file is a module
// Node uses CommonJS library under the hood

const { john, peter } = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternativeFlavours');
require('./7-mind-grenade');

console.log('get data =>', data);

sayHi('Ejike');
sayHi(john);
sayHi(peter);
