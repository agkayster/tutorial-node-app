// npm: global command, comes with node //
// npm --version

// local dependency: use it only on this particular project
// npm i <packageName>

// global dependency: use it on any project
// npm i -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json: manifest file (stores important info about project/package)
// manual setup approach: create package.json in root file, create properties, etc...
// OR npm init (step by step process, press enter to skip)
// OR npm init -y (setup everything default)

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
