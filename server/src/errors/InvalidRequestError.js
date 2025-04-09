const BaseError = require('./BaseError');

class InvalidRequestError extends BaseError {
  static messages = {
    opaqueId: 'invalidOpaqueId',
  };
  constructor(key) {
    const message = InvalidRequestError.messages[key];
    super({ error: 'request', message }, 400);
  }
}

module.exports = InvalidRequestError;
