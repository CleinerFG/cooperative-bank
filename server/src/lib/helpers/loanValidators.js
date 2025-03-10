const InvalidLoanRequestCategoryError = require('../../errors/loan/InvalidLoanRequestCategoryError.js')
const InvalidLoanCategoryError = require('../../errors/loan/InvalidLoanCategoryError.js');

const requestCategoryIsValid = (category) => {
  if (!['open', 'received'].includes(category)) {
    throw new InvalidLoanRequestCategoryError();
  }
  return true;
};

const loanCategoryIsValid = (category) => {
  if (!['payable', 'receivable'].includes(category)) {
    throw new InvalidLoanCategoryError();
  }
  return true;
};

module.exports = { requestCategoryIsValid, loanCategoryIsValid };
