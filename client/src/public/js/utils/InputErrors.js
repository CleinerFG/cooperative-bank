import { INP_ERRORS } from '../../../global/js/constants/errorCodes.js';
import { PASS_ERRORS } from '../constants/errorCodes.js';

export class InvalidEmailError extends Error {
  constructor() {
    super(INP_ERRORS.VALID_004.message);
  }
}

export class InvalidPasswordError extends Error {
  constructor(errorCod, match) {
    const message =
      typeof PASS_ERRORS[errorCod].message === 'function'
        ? PASS_ERRORS[errorCod].message(match[0])
        : PASS_ERRORS[errorCod].message;
    super(message);
  }
}
