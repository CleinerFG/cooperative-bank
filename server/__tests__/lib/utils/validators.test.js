const StringError = require('../../../src/errors/StringError');
const InvalidCpfError = require('../../../src/errors/InvalidCpfError');
const { isString, cpfValidator } = require('../../../src/lib/utils/validators');

describe('Utils - Validators', () => {
  test('String is valid', () => {
    expect(isString('chars')).toBe(true);
    expect(isString('123')).toBe(true);
    expect(() => isString(123)).toThrow(StringError);
  });

  test('Cpf is valid', () => {
    expect(cpfValidator('117.079.600-11')).toBe(true);
    expect(cpfValidator('78833075095')).toBe(true);
    expect(() => cpfValidator('12345678912')).toThrow(InvalidCpfError);
  });
});
