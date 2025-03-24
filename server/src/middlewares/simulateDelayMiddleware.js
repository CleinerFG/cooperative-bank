const { simulateResDelayMs } = require('../config/config');

const waitMiddleware = (req, res, next) => {
  setTimeout(() => {
    next();
  }, simulateResDelayMs);
};

module.exports = waitMiddleware;
