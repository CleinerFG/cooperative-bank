module.exports = class InvalidCpfError extends Error {
  constructor() {
    super('Invalid CPF');
  }
};
