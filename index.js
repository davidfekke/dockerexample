const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, World!');
}).listen(3000, '0.0.0.0', () => {
    console.log('Server listening on port 3000');
});