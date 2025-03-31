require('dotenv').config();
require('express-async-errors');

const { host, port } = require('./config/config.js');
const { APP_STATIC_DIR, PUBLIC_STATIC_DIR } = require('./config/constants.js');

const cookierParser = require('cookie-parser');

const authTokenMiddleware = require('./middlewares/authTokenMiddleware.js');
const {
  globalErrorsMiddleware,
  jsonInvalidMiddleware,
} = require('./middlewares/errorsMiddlewares.js');
const logMiddleware = require('./middlewares/logMiddleware.js');
const simulateDelayMiddleware = require('./middlewares/simulateDelayMiddleware.js');

const express = require('express');

const app = express();

app.use(express.json());
app.use(jsonInvalidMiddleware);
app.use(cookierParser());

app.use('/app/static', express.static(APP_STATIC_DIR));
app.use('/public/static', express.static(PUBLIC_STATIC_DIR));

app.use(logMiddleware);

app.use('/api', simulateDelayMiddleware);

// New routes structure
const authRoutes = require('./routes/authRoutes.js');
const accountRoutes = require('./routes/accountRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const loanRoutes = require('./routes/loanRoutes.js');
// const loanRequestsRoutes = require('./routes/loanRequestRoutes.js');
// const loanInstallmentsRoutes = require('./routes/loanInstallmentsRoutes.js');
// const notificationsRoutes = require('./routes/notificationsRoutes.js');
const spaRoutes = require('./routes/spaRoutes.js');

app.use('/api/auth', authRoutes);
app.use('/api/account', accountRoutes);
app.use('/api/users', userRoutes);
app.use('/api/loans', loanRoutes);
// app.use('/api/loans/requests', loanRequestsRoutes);
// app.use('/api/loans/installments', loanInstallmentsRoutes);
// app.use('/api/notifications', notificationsRoutes);
app.use(spaRoutes);
app.use(globalErrorsMiddleware);

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
