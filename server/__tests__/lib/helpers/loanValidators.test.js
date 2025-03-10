const InvalidLoanRequestCategoryError = require('../../../src/errors/loan/InvalidLoanRequestCategoryError');
const InvalidLoanCategoryError = require('../../../src/errors/loan/InvalidLoanCategoryError');
const {
  requestCategoryIsValid,
  loanCategoryIsValid,
} = require('../../../src/lib/helpers/loanValidators');

describe('Helpers - Loan Validators', () => {
  test('requestCategoryIsValid should return true for valid loan request categories and throw InvalidLoanRequestCategoryError for invalid category', () => {
    expect(requestCategoryIsValid('open')).toBe(true);
    expect(requestCategoryIsValid('received')).toBe(true);
    expect(() => requestCategoryIsValid('other')).toThrowError(
      InvalidLoanRequestCategoryError
    );
  });

  test('loanCategoryIsValid should return true for valid loan request categories and throw InvalidLoanCategoryError for invalid category', () => {
    expect(loanCategoryIsValid('payable')).toBe(true);
    expect(loanCategoryIsValid('receivable')).toBe(true);
    expect(() => loanCategoryIsValid('other')).toThrowError(
      InvalidLoanCategoryError
    );
  });
});
