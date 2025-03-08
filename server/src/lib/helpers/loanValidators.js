const InvalidLoanRequestCategoryError = require('../../errors/loan/InvalidLoanRequestCategoryError');

const requestCategoryIsValid = (category) => {
  if (!['open', 'received'].includes(category)) {
    throw new InvalidLoanRequestCategoryError();
  }
  return true;
};

module.exports = { requestCategoryIsValid };
