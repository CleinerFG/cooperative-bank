module.exports = class MustBeStringError extends Error {
  constructor(item) {
    super(`${item} - Must be a valid string`);
  }
};
