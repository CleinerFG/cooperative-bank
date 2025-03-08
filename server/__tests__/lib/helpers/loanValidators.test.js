const InvalidLoanRequestCategoryError = require('../../../src/errors/loan/InvalidLoanRequestCategoryError');
const {
  requestCategoryIsValid,
} = require('../../../src/lib/helpers/loanValidators');

describe('Helpers - Loan Validators', () => {
  test('requestCategoryIsValid should return true for valid loan request categories and throw InvalidLoanRequestCategoryError for invalid category', () => {
    expect(requestCategoryIsValid('open')).toBe(true);
    expect(requestCategoryIsValid('received')).toBe(true);
    expect(() => requestCategoryIsValid('other')).toThrowError(
      InvalidLoanRequestCategoryError
    );
  });
});
