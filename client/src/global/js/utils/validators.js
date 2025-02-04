import {
  EmptyValueError,
  InvalidCpfError,
  InvalidEmailError,
  InvalidPasswordError,
  ZeroValueError,
} from '../errors/InputErrors.js';

/**
 * A function that validates an input value.
 * @callback Validator
 * @param {string} value
 */

/**
 * @type {Validator}
 */
export function emptyValidator(value) {
  if (value === '') throw new EmptyValueError();
}

/**
 * @type {Validator}
 */
export function zeroValidator(value) {
  const regex = /R\$\s0,00|0,00\s%|^0+$/;
  if (regex.test(value)) throw new ZeroValueError();
}

/**
 * @type {Validator}
 * @param {string} value
 */
export function cpfValidator(value) {
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
}

/**
 * @type {Validator}
 * @param {string} value
 */
export function passwordValidator(value) {
  const rules = [
    {
      regex: /^.{8,}$/,
      message: 'The password must be at least 8 characters long',
    },
    {
      regex: /[a-z]/,
      message: 'The password must contain at least one lowercase letter',
    },
    {
      regex: /[A-Z]/,
      message: 'The password must contain at least one uppercase letter',
    },
    { regex: /\d/, message: 'The password must contain at least one number' },
    {
      regex: /[\W]/,
      message: 'The password must contain at least one special character',
    },
    {
      regex: /\s/,
      message: 'The password cannot have blank space',
      negate: true,
    },
    {
      regex:
        /(012|123|234|345|456|567|678|789|890|abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz)/i,
      message: (match) =>
        `The password cannot have sequential pattern: ${match[0]}`,
      negate: true,
    },
    {
      regex: /(.)\1{2,}/,
      message: (match) =>
        `The password cannot have consecutive repetitions: ${match[0]}`,
      negate: true,
    },
  ];

  for (const { regex, message, negate } of rules) {
    const match = value.match(regex);
    if ((negate && match) || (!negate && !match)) {
      throw new InvalidPasswordError(
        typeof message === 'function' ? message(match) : message
      );
    }
  }
}

/**
 * @type {Validator}
 * @param {string} value
 */
export function emailValidator(value) {
  const localPart = /^[\w._%+-]+/;
  const domainName = /[\w.-]+/;
  const topLevelDomain = /\.[\w]{2,}$/;

  const regex = new RegExp(
    `^${localPart.source}@${domainName.source}${topLevelDomain.source}$`
  );
  if (!regex.test(value)) throw new InvalidEmailError();
}
