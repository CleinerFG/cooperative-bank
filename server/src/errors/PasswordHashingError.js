module.exports = class PasswordHashingError extends Error {
  constructor(message) {
    super(message);
  }
};
