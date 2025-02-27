import {
  numberToCurrency,
  numberToPercent,
} from '../../../global/js/utils/formatters.js';
import { MAX_LOAN_RATE, MIN_LOAN_CREDIT_VALUE } from './config.js';

export const LOAN_ERRORS = {
  LOAN_001: {
    desc: 'invalidCreditValue',
    message: `The credit value cannot be less than ${numberToCurrency(MIN_LOAN_CREDIT_VALUE)}`,
  },
  LOAN_002: {
    desc: 'invalidRate',
    message: `The interest rate cannot be greater than ${numberToPercent(MAX_LOAN_RATE)} p.m`,
  },
  LOAN_003: {
    desc: 'notFoundInstallmentPay',
    message: 'This installment has not been paid',
  },
};
