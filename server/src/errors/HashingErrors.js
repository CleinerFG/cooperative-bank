class PasswordHashingError extends Error {
  constructor(message) {
    super(message);
    this.name = 'passwordHashingError';
  }
}

class ComparePasswordError extends Error {
  constructor(message) {
    super(message);
    this.name = 'comparePasswordError';
  }
}

module.exports = { PasswordHashingError, ComparePasswordError };
