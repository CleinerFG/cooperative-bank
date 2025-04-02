const InvalidJsonError = require('../errors/InvalidJsonError');
const { serverErrorsLogger } = require('../lib/utils/loggers');

module.exports = (err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return new InvalidJsonError().sendResponse(res);
  }
  serverErrorsLogger.error(err);
  return new BaseError().sendResponse(res);
};