const BaseError = require('../errors/BaseError');
const InvalidJsonError = require('../errors/InvalidJsonError');

module.exports = (err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return new InvalidJsonError().sendResponse(res);
  }
  if (err instanceof BaseError) {
    return err.sendResponse(res);
  }
  return new BaseError({ err }).sendResponse(res);
};
