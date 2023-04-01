const http = require('http');

const hostname = '127.0.0.1';
const port  = 5000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// https://github.com/Work-Station-101/daily-circular-server
// https://expressjs.com/en/starter/hello-world.html
// https://nodejs.dev/en/learn/
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status