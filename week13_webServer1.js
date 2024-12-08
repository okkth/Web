const http = require('http');

const server = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end("<h3>Hello World!</h3>");
});

server.listen(1000, () => {
	console.log("Server listener on port 1000!");
});