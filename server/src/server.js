require('dotenv').config();

const {
  APP_STATIC_DIR,
  PUBLIC_STATIC_DIR,
} = require('./constants/spaConstants.js');
const { IP, PORT } = require('../config/serverConfig.js');

const logMiddleware = require('./middlewares/logMiddleware.js');
const simulateDelayMiddleware = require('./middlewares/simulateDelayMiddleware.js');

const express = require('express');

const app = express();

app.use('/app/static', express.static(APP_STATIC_DIR));
app.use('/public/static', express.static(PUBLIC_STATIC_DIR));

app.use(logMiddleware);
app.use(express.json());
app.use('/api', simulateDelayMiddleware);

// New routes structure
const authRoutes = require('./routes/authRoutes.js');
const accountRoutes = require('./routes/accountRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const loansRoutes = require('./routes/loansRoutes.js');
const loanRequestsRoutes = require('./routes/loanRequestRoutes.js');
const loanInstallmentsRoutes = require('./routes/loanInstallmentsRoutes.js');
const notificationsRoutes = require('./routes/notificationsRoutes.js');
const spaRoutes = require('./routes/spaRoutes.js');

app.use('/api/auth', authRoutes);
app.use('/api/account', accountRoutes);
app.use('/api/users', userRoutes);
app.use('/api/loans', loansRoutes);
app.use('/api/loans/requests', loanRequestsRoutes);
app.use('/api/loans/installments', loanInstallmentsRoutes);
app.use('/api/notifications', notificationsRoutes);
app.use(spaRoutes);

app.post('/api/auth/transaction', (req, res) => {
  const { operationPassword } = req.body;

  const isAuthenticated = operationPassword === 123456;
  if (isAuthenticated) {
    return res
      .status(200)
      .json({ success: isAuthenticated, token: 'token-123' });
  }
  return res.status(401).json({
    success: isAuthenticated,
    token: null,
    errors: [{ componentId: 'operationPassword', error: 'incorrectPassword' }],
  });
});

// Start server
app.listen(PORT, IP, () => {
  console.log(`Server running at http://${IP}:${PORT}`);
});
