const log = require('./consoleLogger');

module.exports = (error) => {
  if (error.errors) {
    error.errors.forEach((err, idx) => {
      log.error(`- [${idx}] ${err.code}: ${err.message}`);
    });
  } else {
    log.error(`- ${error.message || JSON.stringify(error)}`);
  }
};
