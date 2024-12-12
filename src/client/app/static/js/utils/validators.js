import { EmptyValueError, ZeroValueError } from "../errors/InputErrors.js";

/**
 * A function that validates an input value.
 * @callback Validator
 * @param {string} value - The value to validate.
 * @throws {Error} If the validation fails.
 */

/**
 * Validates that the input is not empty.
 * @type {Validator}
 */
export function emptyValidator(value) {
  if (value === "") throw new EmptyValueError();
};

/**
 * Validates that the input is not zero.
 * @type {Validator}
 */
export function zeroValidator(value) {
  const regex = /R\$\s0,00|0,00\s%|^0+$/;
  if (regex.test(value)) throw new ZeroValueError();
};

