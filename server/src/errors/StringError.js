module.exports = class StringError extends Error {
  constructor(value) {
    super(`"${value}" is not a valid string`);
  }
};
