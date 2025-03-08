const { formatTime } = require('../lib/utils/formatters');

module.exports = (req, res, next) => {
  console.log(`[${formatTime(new Date())}] ${req.method} ${req.url}`);
  next();
};
