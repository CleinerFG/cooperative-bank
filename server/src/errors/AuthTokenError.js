const BaseError = require('./BaseError');

class AuthTokenError extends BaseError {
  constructor(message) {
    super({ error: 'token', message }, 401);
  }
}

module.exports = AuthTokenError;
