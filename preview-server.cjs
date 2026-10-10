const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, 'dist');
http.createServer((req,res)=>{
  if (req.url === '/favicon.ico') { res.writeHead(204); res.end(); return; }
  const file = path.join(root, 'index.html');
  res.writeHead(200, {'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store'});
  fs.createReadStream(file).pipe(res);
}).listen(8765,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:8765'));
