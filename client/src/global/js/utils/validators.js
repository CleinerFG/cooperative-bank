import '../types/validatorsType.js';

import { EmptyValueError, InvalidCpfError } from '../errors/InputErrors.js';

/**
 * @type {Validator}
 */
export function emptyValidator(value) {
  const regex = /R\$\s0,00|^0,00\%$|^0+$/;
  if (regex.test(value) || value === '') throw new EmptyValueError();
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
