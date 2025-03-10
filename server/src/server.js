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

const APP_STATIC_DIR = path.resolve(__dirname, '../../client/dist/app/static');

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
const spaRoutes = require('./routes/spaRoutes.js');

app.use('/api/account', accountRoutes);
app.use('/api/users', userRoutes);
app.use('/api/loans', loansRoutes);
app.use('/api/loans/requests', loanRequestsRoutes);
app.use('/api/loans/installments', loanInstallmentsRoutes);
app.use('/api/notifications', notificationsRoutes);
app.use(spaRoutes);

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
