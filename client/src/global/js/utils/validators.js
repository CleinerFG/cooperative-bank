import {
  EmptyValueError,
  InvalidCpfError,
  InvalidPassword,
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
  const minLength = /^.{8,}$/;
  const hasLowercase = /[a-z]/;
  const hasUppercase = /[A-Z]/;
  const hasNumber = /\d/;
  const hasSpecialChar = /[\W_]/;
  const hasBlank = /\s/;

  if (!minLength.test(value))
    throw new InvalidPassword(
      'The password must be at least 8 characters long'
    );

  if (!hasLowercase.test(value))
    throw new InvalidPassword(
      'The password must contain at least one lowercase letter'
    );

  if (!hasUppercase.test(value))
    throw new InvalidPassword(
      'The password must contain at least one uppercase letter'
    );

  if (!hasNumber.test(value))
    throw new InvalidPassword('The password must contain at least one number');

  if (!hasSpecialChar.test(value))
    throw new InvalidPassword(
      'The password must contain at least one special character'
    );

  if (hasBlank.test(value))
    throw new InvalidPassword('The password cannot have blank space');
}
