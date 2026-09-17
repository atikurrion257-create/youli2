#!/usr/bin/env node
/* YOU LI — zero-dependency static server with clean-URL support.
   Usage: node site/serve.js  (default port 8080) */
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = Number(process.env.PORT || 8080);
const ROOT = path.resolve(__dirname, '..', 'public');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
};

function send(res, code, body, headers) {
  res.writeHead(code, Object.assign({ 'Cache-Control': 'no-cache' }, headers));
  res.end(body);
}

const server = http.createServer((req, res) => {
  let urlPath;
  try { urlPath = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
  catch (e) { return send(res, 400, 'Bad request', { 'Content-Type': 'text/plain' }); }

  // prevent traversal
  const safe = path.normalize(urlPath).replace(/^(\.\.[/\\])+/, '');
  let file = path.join(ROOT, safe);
  if (!file.startsWith(ROOT)) return send(res, 403, 'Forbidden', { 'Content-Type': 'text/plain' });

  const tryServe = (p) => {
    let st = null;
    try { st = fs.statSync(p); } catch (e) {}
    if (st && st.isDirectory()) p = path.join(p, 'index.html');
    if (st && st.isFile()) {
      const ext = path.extname(p).toLowerCase();
      const type = MIME[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': type, 'Cache-Control': 'no-cache' });
      fs.createReadStream(p).pipe(res);
      return true;
    }
    return false;
  };

  if (tryServe(file)) return;
  // clean URL: /products/ → /products/index.html (covered above) or /page → /page.html
  if (!path.extname(file) && tryServe(file + '.html')) return;
  if (tryServe(path.join(file, 'index.html'))) return;

  const notFound = path.join(ROOT, '404.html');
  if (fs.existsSync(notFound)) {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-cache' });
    fs.createReadStream(notFound).pipe(res);
  } else {
    send(res, 404, 'Not found', { 'Content-Type': 'text/plain' });
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`YOU LI site running → http://0.0.0.0:${PORT}`);
});
