const os = require('os');
const userInfo = os.userInfo();
console.log('get user information', userInfo);

// The method below returns the uptime of the system in seconds //
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOs = {
	name: os.type(),
	release: os.release(),
	totalMem: os.totalmem(),
	freemem: os.freemem(),
};
console.log('get currentOs =>', currentOs);
