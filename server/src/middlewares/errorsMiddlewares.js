const { serverErrorHandler } = require('../lib/handlers/errorsHandler');

module.exports = {
  jsonInvalidMiddleware: (err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
      return res.status(400).json({
        error: 'invalidJSON',
      });
    }
    next(err);
  },
  globalErrorsMiddleware: (err, req, res, next) => {
    res.status(500).json(serverErrorHandler(err));
  },
};
