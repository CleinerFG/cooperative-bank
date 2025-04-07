// const auth = require('./authRoutes');
const user = require('./userRoutes');
const account = require('./accountRoutes');
const spa = require('./spaRoutes');

module.exports = (app) => {
  // app.use('/api/auth', auth);
  app.use('/api/user', user);
  app.use('/api/account', account);
  app.use(spa);
};
