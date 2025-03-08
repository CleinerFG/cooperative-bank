module.exports = class StringError extends Error {
  constructor() {
    super('invalidString');
  }
};
