module.exports = class InvalidCpfError extends Error {
  constructor() {
    super('invalidCpf');
  }
};
