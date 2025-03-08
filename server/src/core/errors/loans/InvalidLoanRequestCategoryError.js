module.exports = class InvalidLoanRequestCategoryError extends Error {
  constructor() {
    super('Invalid loan request category');
  }
};
