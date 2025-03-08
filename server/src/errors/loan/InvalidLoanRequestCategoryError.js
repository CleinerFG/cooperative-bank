module.exports = class InvalidLoanRequestCategoryError extends Error {
  constructor() {
    super('invalidLoanRequestCategory');
  }
};
