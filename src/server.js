const express = require('express');
const path = require('path');

const app = express();

// Constants
const GLOBAL_STATIC_DIR = path.resolve(__dirname, 'client/global');
const PUBLIC_STATIC_DIR = path.resolve(__dirname, 'client/public/static');
const PUBLIC_PAGES_DIR = path.resolve(__dirname, 'client/public/pages');
const APP_STATIC_DIR = path.resolve(__dirname, 'client/app/static');
const APP_DIR = path.resolve(__dirname, 'client/app/');

// Middleware for global static files
app.use('/global', express.static(GLOBAL_STATIC_DIR));

// Middleware for public static files
app.use('/public/static', express.static(PUBLIC_STATIC_DIR));

// Middleware for app static files
app.use('/app/static', express.static(APP_STATIC_DIR));

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Helper function to serve files
const serveFile = (directory, filename) => (req, res) => {
  const filePath = path.join(directory, filename);
  console.log(`Sending file: ${filePath}`);
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error(`Error sending file: ${filePath}`, err);
      res.status(500).send('Error loading file.');
    }
  });
};

// Route handlers
app.get('/', serveFile(PUBLIC_PAGES_DIR, 'index.html'));
app.get('/login', serveFile(PUBLIC_PAGES_DIR, 'login.html'));
app.get('/register', serveFile(PUBLIC_PAGES_DIR, 'register.html'));
app.get('/app/*', serveFile(APP_DIR, 'index.html'));

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
