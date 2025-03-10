class InvalidLoanCategoryError extends Error {
  constructor() {
    super('invalidLoanCategory');
  }
}

class InvalidLoanRequestCategoryError extends Error {
  constructor() {
    super('invalidLoanRequestCategory');
  }
}

module.exports = { InvalidLoanCategoryError, InvalidLoanRequestCategoryError };
