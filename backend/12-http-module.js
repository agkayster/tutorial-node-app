const http = require('http');

// Here we create our web server //
// const server = http.createServer((req, res) => {
// 	// res.write is our response to the request //
// 	res.write('Welcome to our home page');
// 	// res.end is the end of our response//
// 	res.end();
// });

// Here we create our web server instance //
const server = http.createServer((req, res, error) => {
	// if user is requesting for the home page //
	if (req.url === '/') {
		res.end('Welcome to our home page');
	} // if user is requesting for the about page //
	else if (req.url === '/about') {
		res.end('This is the history about us');
	} else {
		// if a user is requesting for a page that is not available //
		res.end(
			`
			<div>
				<h2>404</h2>
				<p>This page is not available</p>
				<a href='/'>back home</a>
			</div>
      `
		);
	}
	console.log(error);
});

// we tell our server to listen to port 5000 for any messages //
server.listen(5000);
