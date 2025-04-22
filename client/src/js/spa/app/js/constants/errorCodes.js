import { translate } from '../../../global/js/i18n/Translator.js';
import {
  numberToCurrency,
  numberToPercent,
} from '../../../global/js/utils/formatters.js';
import { MAX_LOAN_RATE, MIN_LOAN_CREDIT_VALUE } from './config.js';

export const LOAN_ERRORS = {
  invalidCreditValue: translate('invalidCreditValue')(
    numberToCurrency(MIN_LOAN_CREDIT_VALUE)
  ),
  invalidRate: translate('invalidRate')(numberToPercent(MAX_LOAN_RATE)),
  notFoundInstallmentPay: translate('notFoundInstallmentPay'),
};
