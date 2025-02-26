import { INP_ERRORS } from '../constants/errorCodes.js';
export class EmptyValueError extends Error {
  constructor() {
    super(INP_ERRORS.VALID_001.message);
  }
}

export class InvalidCpfError extends Error {
  constructor() {
    super(INP_ERRORS.VALID_002.message);
  }
}
