const http = require('http');
const fs = require('fs');
const path = require('path');

const BASE = 'C:\\Users\\HP\\Downloads\\Growth OS\\growth-os';
const PORT = 3000;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.svg':  'image/svg+xml',
  '.json': 'application/json',
  '.png':  'image/png',
};

const server = http.createServer(function(req, res) {
  const url = (req.url === '/' ? '/index.html' : req.url).split('?')[0];
  const fp = path.join(BASE, url);
  const ext = path.extname(fp).toLowerCase();
  const ct = MIME[ext] || 'text/plain';

  fs.readFile(fp, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Not found: ' + url);
      return;
    }
    res.writeHead(200, {
      'Content-Type': ct,
      'Cache-Control': 'no-cache, no-store',
    });
    res.end(data);
  });
});

server.listen(PORT, '127.0.0.1', function() {
  console.log('Growth OS running at http://localhost:' + PORT);
});

server.on('error', function(e) {
  console.error('Server error: ' + e.message);
  process.exit(1);
});
