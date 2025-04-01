const passMatchHandler = (str, regex, negate) => {
  const match = str.match(regex);
  const boolMatch = Boolean(match);
  return negate !== boolMatch;
};

module.exports = {
  datetimeValidator: (str) => {
    const date = new Date(str);
    if (isNaN(date.getTime())) return false;
    return true;
  },

  isGreater18: (str) => {
    const birthDate = new Date(str);
    const today = new Date();

    const age = today.getUTCFullYear() - birthDate.getUTCFullYear();
    const month = today.getUTCMonth() - birthDate.getUTCMonth();
    const day = today.getUTCDate() - birthDate.getUTCDate();

    return age > 18 || (age === 18 && month >= 0 && day >= 0);
  },

  cpfValidator: (str) => {
    if (!/^[0-9]{11}$/.test(str)) return false;

    if (/^(\d)\1{10}$/.test(str)) return false;

    let sum = 0,
      remainder;

    for (let i = 1; i <= 9; i++) sum += parseInt(str[i - 1]) * (11 - i);
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(str[9])) return false;

    sum = 0;
    for (let i = 1; i <= 10; i++) sum += parseInt(str[i - 1]) * (12 - i);
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(str[10])) return false;

    return true;
  },

  passHave8Chars: (str) => {
    const regex = /^.{8,}$/;
    const negate = false;

    return passMatchHandler(str, regex, negate);
  },

  passHaveLowerCase: (str) => {
    const regex = /[a-z]/;
    const negate = false;

    return passMatchHandler(str, regex, negate);
  },

  passHaveUpperCase: (str) => {
    const regex = /[A-Z]/;
    const negate = false;

    return passMatchHandler(str, regex, negate);
  },

  passHaveNumber: (str) => {
    const regex = /\d/;
    const negate = false;

    return passMatchHandler(str, regex, negate);
  },

  passHaveSpecialChar: (str) => {
    const regex = /[\W]/;
    const negate = false;

    return passMatchHandler(str, regex, negate);
  },

  passDontHaveBlankSpace: (str) => {
    const regex = /\s/;
    const negate = true;

    return passMatchHandler(str, regex, negate);
  },

  passDontHaveSeqPattern: (str) => {
    const regex =
      /(012|123|234|345|456|567|678|789|890|abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz)/i;
    const negate = true;

    return passMatchHandler(str, regex, negate);
  },

  passDontHaveCharSequence: (str) => {
    const regex = /(.)\1{2,}/;
    const negate = true;

    return passMatchHandler(str, regex, negate);
  },
};
