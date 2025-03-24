const datetimeValidator = (str) => {
  const date = new Date(str);
  if (isNaN(date.getTime())) throw new Error('invalidDatetime');
  return true;
};

const emailValidator = (str) => {
  const localPart = /^[\w._%+-]+/;
  const domainName = /[\w.-]+/;
  const topLevelDomain = /\.[\w]{2,}$/;

  const regex = new RegExp(
    `^${localPart.source}@${domainName.source}${topLevelDomain.source}$`
  );
  if (!regex.test(str)) throw new Error('invalidEmail');
  return true;
};

const passwordValidator = (str) => {
  const rules = [
    { regex: /^.{8,}$/, error: 'must8CharsLong' },
    { regex: /[a-z]/, error: 'mustLowercaseChar' },
    { regex: /[A-Z]/, error: 'mustUppercaseChar' },
    { regex: /\d/, error: 'mustNumber' },
    { regex: /[\W]/, error: 'mustSpecialChar' },
    { regex: /\s/, error: 'cannotBlankSpace', negate: true },
    {
      regex:
        /(012|123|234|345|456|567|678|789|890|abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz)/i,
      error: 'cannotSeqPattern',
      negate: true,
    },
    { regex: /(.)\1{2,}/, error: 'cannotCharSeq', negate: true },
  ];

  for (const { regex, error, negate } of rules) {
    const match = str.match(regex);
    if ((negate && match) || (!negate && !match)) {
      throw new Error(error);
    }
  }
  return true;
};

const cpfValidator = (str) => {
  str = str.replace(/[.-]/g, '');

  if (!/^[0-9]{11}$/.test(str)) throw new Error('invalid');

  if (/^(\d)\1{10}$/.test(str)) throw new Error('invalid');

  let sum = 0,
    remainder;

  for (let i = 1; i <= 9; i++) sum += parseInt(str[i - 1]) * (11 - i);
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(str[9])) throw new Error('invalid');

  sum = 0;
  for (let i = 1; i <= 10; i++) sum += parseInt(str[i - 1]) * (12 - i);
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(str[10])) throw new Error('invalid');

  return true;
};

module.exports = {
  datetimeValidator,
  cpfValidator,
  emailValidator,
  passwordValidator,
};
