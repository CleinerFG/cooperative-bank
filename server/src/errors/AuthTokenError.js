const BaseError = require('./BaseError');

class AuthTokenError extends BaseError {
  constructor(message) {
    super({ error: 'token', message }, 400);
  }
}

module.exports = AuthTokenError;
