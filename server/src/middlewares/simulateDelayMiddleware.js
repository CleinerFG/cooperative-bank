const { SIMULATE_RES_DELAY } = require('../config/constants');

const waitMiddleware = (req, res, next) => {
  setTimeout(() => {
    next();
  }, SIMULATE_RES_DELAY);
};

module.exports = waitMiddleware;
