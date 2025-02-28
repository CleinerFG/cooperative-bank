import { translate } from '../../../global/js/i18n/Translator.js';
import {
  numberToCurrency,
  numberToPercent,
} from '../../../global/js/utils/formatters.js';
import { MAX_LOAN_RATE, MIN_LOAN_CREDIT_VALUE } from './config.js';

export const LOAN_ERRORS = {
  LOAN_001: {
    desc: 'invalidCreditValue',
    message: translate('invalidCreditValue')(
      numberToCurrency(MIN_LOAN_CREDIT_VALUE)
    ),
  },
  LOAN_002: {
    desc: 'invalidRate',
    message: translate('invalidRate')(numberToPercent(MAX_LOAN_RATE)),
  },
  LOAN_003: {
    desc: 'notFoundInstallmentPay',
    message: translate('notFoundInstallmentPay'),
  },
};
