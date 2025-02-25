import { INP_ERRORS } from '../constants/errorCodes';
export class EmptyValueError extends Error {
  constructor() {
    super(INP_ERRORS.VALID_001.message);
  }
}

export class InvalidCpfError extends Error {
  constructor() {
    super(INP_ERRORS.VALID_004.message);
  }
}

export class InvalidPasswordError extends Error {
  constructor(errorCod, match) {
    const message =
      typeof INP_ERRORS[errorCod].message === 'function'
        ? INP_ERRORS[errorCod].message(match[0])
        : INP_ERRORS[errorCod].message;
    super(message);
  }
}

export class InvalidEmailError extends Error {
  constructor() {
    super(INP_ERRORS.VALID_014.message);
  }
}
