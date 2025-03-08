const StringError = require('../../../src/errors/StringError');
const InvalidCpfError = require('../../../src/errors/InvalidCpfError');
const { isString, cpfValidator } = require('../../../src/lib/utils/validators');

describe('Utils - Validators', () => {
  test('isString should return true for valid strings and throw StringError for invalid input', () => {
    expect(isString('chars')).toBe(true);
    expect(isString('123')).toBe(true);
    expect(() => isString(123)).toThrowError(StringError);
  });

  test('cpfValidator should return true for valid CPF and throw InvalidCpfError for invalid CPF', () => {
    expect(cpfValidator('117.079.600-11')).toBe(true);
    expect(cpfValidator('78833075095')).toBe(true);
    expect(() => cpfValidator('12345678912')).toThrowError(InvalidCpfError);
  });
});
