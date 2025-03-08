const InvalidLoanRequestCategoryError = require('../../../src/errors/loan/InvalidLoanRequestCategoryError');
const {
  requestCategoryIsValid,
} = require('../../../src/lib/helpers/loanValidators');

describe('Helpers - Loan Validators', () => {
  test('Loan request category is valid', () => {
    expect(requestCategoryIsValid('open')).toBe(true);
    expect(requestCategoryIsValid('received')).toBe(true);
    expect(() => requestCategoryIsValid('other')).toThrow(
      InvalidLoanRequestCategoryError
    );
  });
});
