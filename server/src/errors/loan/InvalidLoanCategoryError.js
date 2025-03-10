module.exports = class InvalidLoanCategoryError extends Error {
  constructor() {
    super('invalidLoanCategory');
  }
};
