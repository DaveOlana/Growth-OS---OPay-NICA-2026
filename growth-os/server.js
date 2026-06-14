const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3000;

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.json': 'application/json',
  '.svg':  'image/svg+xml',
  '.png':  'image/png',
};

const base = path.join(__dirname, '.');

http.createServer((req, res) => {
  let url = req.url === '/' ? '/index.html' : req.url;
  let fp = path.join(base, url);
  const ext = path.extname(fp);
  const ct = mime[ext] || 'text/plain';

  fs.readFile(fp, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not found: ' + url);
      return;
    }
    res.writeHead(200, {
      'Content-Type': ct,
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*'
    });
    res.end(data);
  });
}).listen(port, '0.0.0.0', () => {
  console.log('Growth OS live at http://localhost:' + port);
});
