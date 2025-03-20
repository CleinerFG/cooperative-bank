const {
  datetimeValidator,
  emailValidator,
  passwordValidator,
  cpfValidator,
} = require('../../../src/lib/utils/validators');

describe('Utils - validators', () => {
  test('datetimeValidator', () => {
    expect(datetimeValidator('2025-03-20T18:01:04.823Z')).toBe(true);
    expect(datetimeValidator('2025-03-20')).toBe(true);
    expect(datetimeValidator('2025/03/20')).toBe(true);
    expect(datetimeValidator('2025-3-20')).toBe(true);
    expect(() => datetimeValidator('20-03-2025')).toThrow('invalidDatetime');
  });

  test('emailValidator', () => {
    expect(emailValidator('jhoe.mail@sample.com')).toBe(true);
    expect(emailValidator('my_email.jhoe@sample.com.ind')).toBe(true);
    expect(emailValidator('jhoe_%san-123@ind.email.com')).toBe(true);
    expect(() => emailValidator('invalid#$chars@email.com')).toThrow(
      'invalidEmail'
    );
    expect(() => emailValidator('blank space@other.email')).toThrow(
      'invalidEmail'
    );
    expect(() => emailValidator(' email.other.com')).toThrow('invalidEmail');
    expect(() => emailValidator(' email@other')).toThrow('invalidEmail');
  });

  test('passwordValidator', () => {
    expect(() => passwordValidator('mypass')).toThrow('must8CharsLong');
    expect(() => passwordValidator('mypass12')).toThrow('mustUppercaseChar');
    expect(() => passwordValidator('mypass12A')).toThrow('mustSpecialChar');
    expect(() => passwordValidator('mypass12A_')).toThrow('mustSpecialChar');
    expect(() => passwordValidator('mypass123A$')).toThrow('cannotSeqPattern');
    expect(() => passwordValidator('mypass179Babc$')).toThrow(
      'cannotSeqPattern'
    );
    expect(() => passwordValidator('mypass14A$bbb')).toThrow('cannotCharSeq');
    expect(() => passwordValidator('MYPASS#20')).toThrow('mustLowercaseChar');
    expect(() => passwordValidator('myPass #37')).toThrow('cannotBlankSpace');
    expect(passwordValidator('my#2Safe_pASs%7')).toBe(true);
  });

  test('cpfValidator', () => {
    expect(cpfValidator('117.079.600-11')).toBe(true);
    expect(cpfValidator('78833075095')).toBe(true);
    expect(() => cpfValidator('12345678912')).toThrow('invalidCpf');
  });
});
