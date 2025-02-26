import {
  currencyToNumber,
  percentToNumber,
} from '../../../global/js/utils/formatters.js';
import { MAX_LOAN_RATE, MIN_LOAN_CREDIT_VALUE } from '../constants/config.js';
import {
  InvalidInterestRate,
  InvalidCreditValue,
} from '../errors/loanErrors.js';

export function creditValueValidator(value) {
  const numberValue = currencyToNumber(value);
  if (numberValue < MIN_LOAN_CREDIT_VALUE) throw new InvalidCreditValue();
}

export function interestRateValidator(value) {
  const numberValue = percentToNumber(value);
  if (numberValue > MAX_LOAN_RATE) throw new InvalidInterestRate();
}
