const http = require('http');
const Database = require('./DB');
const f = require('./func');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const result = f.add(10, 5);
  
    console.log('The result is:', result);
  res.end('Hello, World!\n'+Database.rows);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});