require('dotenv').config();
const fs = require('fs').promises;

const logMiddleware = require('./middlewares/logMiddleware.js');

const { IP, PORT } = require('../config/serverConfig.js');

const express = require('express');
const path = require('path');

const app = express();

// Constants
const PROFILE_STATIC_DIR = path.resolve(
  __dirname,
  'data/uploads/profile-images'
);
const PUBLIC_STATIC_DIR = path.resolve(
  __dirname,
  '../../client/dist/public/static'
);
const PUBLIC_PAGES_DIR = path.resolve(__dirname, '../../client/dist/public');
const APP_STATIC_DIR = path.resolve(__dirname, '../../client/dist/app/static');
const APP_DIR = path.resolve(__dirname, '../../client/dist/app');
const DB_DIR = path.resolve(__dirname, 'data/db');

// Middleware for public static files
app.use('/public/static', express.static(PUBLIC_STATIC_DIR));

// Middleware for app static files
app.use('/app/static', express.static(APP_STATIC_DIR));

// Middleware for public static files
// Test: serve profile image!
app.use('/app/profile-image', express.static(PROFILE_STATIC_DIR));

app.use(logMiddleware);
app.use(express.json());

// New routes structure

const accountRoutes = require('./routes/accountRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const loansRoutes = require('./routes/loansRoutes.js');
const loanRequestsRoutes = require('./routes/loanRequestRoutes.js');
const loanInstallmentsRoutes = require('./routes/loanInstallmentsRoutes.js');
const notificationsRoutes = require('./routes/notificationsRoutes.js');

app.use('/api/account', accountRoutes);
app.use('/api/users', userRoutes);
app.use('/api/loans', loansRoutes);
app.use('/api/loans/requests', loanRequestsRoutes);
app.use('/api/loans/installments', loanInstallmentsRoutes);
app.use('/api/notifications', notificationsRoutes);

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

app.get(
  '/api/loan/overview/payable',
  serveFile(DB_DIR, 'loan-overview-payable.json')
);

app.get(
  '/api/loan/overview/receivable',
  serveFile(DB_DIR, 'loan-overview-receivable.json')
);

app.get('/api/loan/:category/details', async (req, res) => {
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
      return res.status(404).json({ error: 'LOAN_001' });
    }

    res.json(loanDetails);
  } catch (error) {
    console.error('Error reading JSON file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/loan/installments', serveFile(DB_DIR, 'loan-installments.json'));

app.get('/api/loan/installments/payment', async (req, res) => {
  try {
    const id = req.query.id;
    const filePath = path.join(DB_DIR, `loan-installment-payments.json`);

    const jsonFile = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(jsonFile);

    const payment = data.find((item) => item.id === id);
    if (!payment) {
      return res.status(404).json({ error: 'notFoundInstallmentPay' });
    }
    res.json(payment);
  } catch (error) {
    console.error('Error reading JSON file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Page route handlers
app.get('*', (req, res) => {
  if (req.path.startsWith('/app')) {
    serveFile(APP_DIR, 'index.html')(req, res);
    return;
  }
  serveFile(PUBLIC_PAGES_DIR, 'index.html')(req, res);
});

app.post('/api/auth/transaction', (req, res) => {
  const { transactionPassword } = req.body;
  const isAuthenticated = transactionPassword === 123456;
  if (isAuthenticated) {
    return res
      .status(200)
      .json({ success: isAuthenticated, token: 'token-123' });
  }
  return res.status(401).json({
    success: isAuthenticated,
    token: null,
    errors: [
      { componentId: 'transactionPassword', error: 'incorrectPassword' },
    ],
  });
});

// Start server
app.listen(PORT, IP, () => {
  console.log(`Server running at http://${IP}:${PORT}`);
});
