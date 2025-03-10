import { INP_ERRORS } from '../constants/errorCodes.js';
export class EmptyValueError extends Error {
  constructor() {
    super(INP_ERRORS.fieldIsRequired);
  }
}

export class InvalidCpfError extends Error {
  constructor() {
    super(INP_ERRORS.invalidCpf);
  }
}
