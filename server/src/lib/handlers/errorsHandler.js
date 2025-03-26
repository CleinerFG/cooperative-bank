const { serverErrorsLogger } = require('../utils/loggers');

module.exports = {
  serverErrorHandler: (error) => {
    console.error(error);
    serverErrorsLogger.error(error.message);
    return { error: 'server' };
  },

  clientErrorsHandler: (fields) => {
    return { error: 'client', fields };
  },
};
