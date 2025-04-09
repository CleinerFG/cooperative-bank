const BaseError = require('./BaseError');

class InvalidRequestError extends BaseError {
  constructor(message) {
    super({ error: 'request', message }, 400);
  }
}

module.exports = InvalidRequestError;
