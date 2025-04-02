const BaseError = require('./BaseError');

class InvalidJsonError extends BaseError {
  constructor() {
    super({ error: 'syntax', message: 'invalidJson' }, 400);
  }
}

module.exports = InvalidJsonError;
