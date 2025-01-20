const express = require('express');
const path = require('path');

const app = express();

// Constants
const GLOBAL_STATIC_DIR = path.resolve(__dirname, '../client/src/global');
const PUBLIC_STATIC_DIR = path.resolve(
  __dirname,
  '../client/dist/public/static'
);
const PUBLIC_PAGES_DIR = path.resolve(__dirname, '../client/dist/public');
const APP_STATIC_DIR = path.resolve(__dirname, '../client/dist/app/static');
const APP_DIR = path.resolve(__dirname, '../client/dist/app');
const DB_DIR = path.resolve(__dirname, 'db');

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

// JSON files route handlers
app.get('/app/data/events/payment', serveFile(DB_DIR, 'events-payment.json'));
app.get(
  '/app/data/events/investment',
  serveFile(DB_DIR, 'events-investment.json')
);
app.get(
  '/app/data/financial-statement',
  serveFile(DB_DIR, 'financial-statement.json')
);
app.get(
  '/app/data/loan/overview/payable',
  serveFile(DB_DIR, 'loan-overview-payable.json')
);
app.get(
  '/app/data/loan/overview/receivable',
  serveFile(DB_DIR, 'loan-overview-receivable.json')
);
app.get(
  '/app/data/loan/request/opened',
  serveFile(DB_DIR, 'loan-request-opened.json')
);
app.get(
  '/app/data/loan/request/received',
  serveFile(DB_DIR, 'loan-request-received.json')
);
app.get('/app/data/users', serveFile(DB_DIR, 'users.json'));

// Page route handlers
app.get(['/app*'], serveFile(APP_DIR, 'index.html'));
app.get('/*', serveFile(PUBLIC_PAGES_DIR, 'index.html'));

// Start server
const PORT = 8080;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
