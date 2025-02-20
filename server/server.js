require('dotenv').config();
const fs = require('fs').promises;
const users = require('./data/db/users.js');
const { cpfValidator } = require('./utils/validators');

const { formatTime } = require('./utils/formatters');
const SERVER_IP = process.env.SERVER_IP;

const express = require('express');
const path = require('path');
const { log } = require('console');

const app = express();

// Constants
const PROFILE_STATIC_DIR = path.resolve(
  __dirname,
  'data/uploads/profile-images'
);
const PUBLIC_STATIC_DIR = path.resolve(
  __dirname,
  '../client/dist/public/static'
);
const PUBLIC_PAGES_DIR = path.resolve(__dirname, '../client/dist/public');
const APP_STATIC_DIR = path.resolve(__dirname, '../client/dist/app/static');
const APP_DIR = path.resolve(__dirname, '../client/dist/app');
const DB_DIR = path.resolve(__dirname, 'data/db');

// Middleware for public static files
app.use('/public/static', express.static(PUBLIC_STATIC_DIR));

// Middleware for app static files
app.use('/app/static', express.static(APP_STATIC_DIR));

// Middleware for public static files
// Test: serve profile image!
app.use('/app/profile-image', express.static(PROFILE_STATIC_DIR));

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`[${formatTime(new Date())}] ${req.method} ${req.url}`);
  next();
});

app.use(express.json());

// Helper function to serve files
const serveFile = (directory, filename) => (req, res) => {
  const filePath = path.join(directory, filename);
  console.log(`Sending file: ${filePath}`);
  console.log(`Filename: ${filename}`);
  console.log('----//----');

  res.sendFile(filePath, (err) => {
    if (err) {
      console.error(`Error sending file: ${filePath}`, err);
      res.status(500).send('Error loading file.');
    }
  });
};

// JSON files route handlers
app.get('/api/account/amount', serveFile(DB_DIR, 'account-amount.json'));

app.get(
  '/api/loan/overview/payable',
  serveFile(DB_DIR, 'loan-overview-payable.json')
);

app.get(
  '/api/loan/overview/receivable',
  serveFile(DB_DIR, 'loan-overview-receivable.json')
);

app.get('/api/loan/details/:category', async (req, res) => {
  const getFilePath = (category) => {
    return path.join(DB_DIR, `loan-${category}-details.json`);
  };

  try {
    const id = req.query.id;
    const category = req.params.category;

    const filePath = getFilePath(category);

    const jsonFile = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(jsonFile);

    const loanDetails = data.find((item) => item.id === id);
    if (!loanDetails) {
      return res.status(404).json({ error: 'Loan details not found' });
    }

    res.json(loanDetails);
  } catch (error) {
    console.error('Error reading JSON file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get(
  '/api/loan/requests/opened',
  serveFile(DB_DIR, 'loan-request-opened.json')
);

app.get(
  '/api/loan/requests/received',
  serveFile(DB_DIR, 'loan-request-received.json')
);

app.get('/api/loan/installments', serveFile(DB_DIR, 'loan-installments.json'));

app.get('/api/users', (req, res) => {
  const { cpf } = req.query;

  try {
    cpfValidator(cpf);
    const parseCpf = cpf.replace(/[.-]/g, '');
    const user = users.find((u) => u.cpf === parseCpf);
    if (!user) {
      return res.status(404).json({ message: 'Not found user' });
    }
    return res.status(200).json(user);
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
});

app.get('/api/account/user', serveFile(DB_DIR, 'account-info.json'));

app.get('/api/notifications', serveFile(DB_DIR, 'notifications.json'));

// Page route handlers
app.get('*', (req, res) => {
  if (req.path.startsWith('/app')) {
    serveFile(APP_DIR, 'index.html')(req, res);
    return;
  }
  serveFile(PUBLIC_PAGES_DIR, 'index.html')(req, res);
});

app.post('/api/auth/transaction', (req, res) => {
  const { pass } = req.body;
  const isAuthenticated = pass === '123456';
  return res
    .status(isAuthenticated ? 200 : 401)
    .json({ success: isAuthenticated });
});

// Start server
const PORT = 8080;
app.listen(PORT, SERVER_IP, () => {
  console.log(`Server running at http://${SERVER_IP}:${PORT}`);
});
