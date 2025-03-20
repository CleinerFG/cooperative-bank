const {
  requestCategoryValidator,
  loanCategoryValidator,
} = require('../../../src/lib/helpers/loan/genericValidators');

describe('Helpers - globalLoanValidators', () => {
  test('requestCategoryValidator', () => {
    expect(requestCategoryValidator('open')).toBe(true);
    expect(requestCategoryValidator('received')).toBe(true);
    expect(() => requestCategoryValidator('other')).toThrow(
      'invalidLoanCategory'
    );
  });

  test('loanCategoryValidator', () => {
    expect(loanCategoryValidator('payable')).toBe(true);
    expect(loanCategoryValidator('receivable')).toBe(true);
    expect(() => loanCategoryValidator('other')).toThrow(
      'invalidLoanRequestCategory'
    );
  });
});
