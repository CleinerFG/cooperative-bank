import { LOAN_ERRORS } from '../constants/errorCodes.js';

export class InvalidCreditValue extends Error {
  constructor() {
    super(LOAN_ERRORS.LOAN_001.message);
  }
}

export class InvalidInterestRate extends Error {
  constructor() {
    super(LOAN_ERRORS.LOAN_002.message);
  }
}
