const BaseError = require('./BaseError');

class InvalidFieldsError extends BaseError {
  constructor(fields) {
    super({ error: 'invalidFields', fields }, 400);
  }
}

module.exports = InvalidFieldsError;
