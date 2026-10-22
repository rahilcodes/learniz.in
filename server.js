/**
 * Learniz Preview Server
 * Zero-dependency Node.js HTTP server supporting clean URLs and base path
 */

import http from 'http';
import fs from 'fs';
import path from 'path';

const PORT = process.env.PORT || 3000;
const DIST = path.resolve('dist');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8'
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  try {
    reqPath = decodeURIComponent(reqPath);
  } catch (e) {
    // ignore decode error
  }

  // Strip /learniz.in prefix if requested
  let cleanPath = reqPath;
  if (cleanPath.startsWith('/learniz.in')) {
    cleanPath = cleanPath.slice('/learniz.in'.length) || '/';
  }

  // Potential file candidates
  const candidates = [
    path.join(DIST, cleanPath),
    path.join(DIST, cleanPath, 'index.html'),
    path.join(DIST, cleanPath + '.html'),
    path.join(DIST, cleanPath.replace(/\/$/, '') + '.html')
  ];

  let filePath = null;
  for (const c of candidates) {
    if (fs.existsSync(c) && fs.statSync(c).isFile()) {
      filePath = c;
      break;
    }
  }

  if (filePath) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=3600'
    });
    const stream = fs.createReadStream(filePath);
    stream.on('error', (err) => {
      if (!res.headersSent) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
      }
      res.end('Internal Server Error');
    });
    stream.pipe(res);
  } else {
    // 404 handler
    const notFoundPath = path.join(DIST, '404.html');
    if (fs.existsSync(notFoundPath)) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      const stream = fs.createReadStream(notFoundPath);
      stream.on('error', () => res.end('<h1>404 Not Found</h1>'));
      stream.pipe(res);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('<h1>404 Not Found</h1>');
    }
  }
});

process.on('uncaughtException', (err) => {
  console.error('Server process uncaughtException:', err.message);
});

process.on('unhandledRejection', (reason) => {
  console.error('Server process unhandledRejection:', reason);
});

server.on('error', (err) => {
  console.error('HTTP Server error:', err.message);
});

server.listen(PORT, () => {
  console.log(`=== Learniz Server Running ===`);
  console.log(`Local URL: http://localhost:${PORT}/`);
  console.log(`Serving from: ${DIST}`);
});
