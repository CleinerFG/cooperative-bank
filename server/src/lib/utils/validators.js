const StringError = require('../../errors/StringError');
const InvalidCpfError = require('../../errors/InvalidCpfError');

/**
 * @param {string} value
 */
const isString = (value) => {
  if (typeof value !== 'string') {
    throw new StringError('id');
  }
};

/**
 * @param {string} value
 */
const cpfValidator = (value) => {
  value = value.replace(/[.-]/g, '');

  if (!/^[0-9]{11}$/.test(value)) throw new InvalidCpfError();

  if (/^(\d)\1{10}$/.test(value)) throw new InvalidCpfError();

  let sum = 0,
    remainder;

  for (let i = 1; i <= 9; i++) sum += parseInt(value[i - 1]) * (11 - i);
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(value[9])) throw new InvalidCpfError();

  sum = 0;
  for (let i = 1; i <= 10; i++) sum += parseInt(value[i - 1]) * (12 - i);
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(value[10])) throw new InvalidCpfError();

  return true;
};

module.exports = { isString, cpfValidator };
