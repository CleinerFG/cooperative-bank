import { EmptyValueError, ZeroValueError } from "../errors/InputErrors.js";

/**
 * A function that validates an input value.
 * @callback Validator
 * @param {string} value
 */

/**
 * @type {Validator}
 */
export function emptyValidator(value) {
  if (value === "") throw new EmptyValueError();
};

/**
 * @type {Validator}
 */
export function zeroValidator(value) {
  const regex = /R\$\s0,00|0,00\s%|^0+$/;
  if (regex.test(value)) throw new ZeroValueError();
};

