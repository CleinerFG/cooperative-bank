module.exports = class NotFoundDotenvFileError extends Error {
  constructor() {
    super(
      `You should create a .env file in "/databases/.env", see documentation in README.md`
    );
  }
};
