module.exposts = class PasswordHashingError extends Error {
  constructor(message) {
    super(message);
    this.name = 'passwordHashingError';
  }
};
