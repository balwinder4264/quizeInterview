const http = require('http');
const fs = require('fs')
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
fs.readFile('data.json', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    let total=0;
    JSON.parse(data).forEach(element => {
     total+=(element).value
    });
    console.log("total=>",total)
  })