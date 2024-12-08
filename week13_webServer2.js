const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {
    const filename = "week2.html";
    fs.readFile(filename, (err,data)=>{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
});

server.listen(3000, () => {
	console.log("Server listener on port 3000!");
});
