import { LOAN_ERRORS } from '../constants/errorCodes.js';

export class InvalidCreditValue extends Error {
  constructor() {
    super(LOAN_ERRORS.invalidCreditValue);
  }
}

export class InvalidInterestRate extends Error {
  constructor() {
    super(LOAN_ERRORS.invalidRate);
  }
}
