// JavaScript source code
const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

var mongo = require('mongodb');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('AcidIntegrationTest.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

