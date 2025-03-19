const StringError = require('../../errors/StringError');

const isString = (value) => {
  if (typeof value !== 'string') {
    throw new StringError('id');
  }
  return true;
};

const emailValidator = (value) => {
  const localPart = /^[\w._%+-]+/;
  const domainName = /[\w.-]+/;
  const topLevelDomain = /\.[\w]{2,}$/;

  const regex = new RegExp(
    `^${localPart.source}@${domainName.source}${topLevelDomain.source}$`
  );
  if (!regex.test(value)) return false;
  return true;
};

const cpfValidator = (value) => {
  value = value.replace(/[.-]/g, '');

  if (!/^[0-9]{11}$/.test(value)) return false;

  if (/^(\d)\1{10}$/.test(value)) return false;

  let sum = 0,
    remainder;

  for (let i = 1; i <= 9; i++) sum += parseInt(value[i - 1]) * (11 - i);
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(value[9])) return false;

  sum = 0;
  for (let i = 1; i <= 10; i++) sum += parseInt(value[i - 1]) * (12 - i);
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(value[10])) return false;

  return true;
};

module.exports = { isString, cpfValidator, emailValidator };
