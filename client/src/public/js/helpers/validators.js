import '../../../global/js/types/validatorsType.js';

import { InvalidEmailError, InvalidPasswordError } from './InputErrors.js';

/**
 * @type {Validator}
 * @param {string} value
 */
export function emailValidator(value) {
  const localPart = /^[\w._%+-]+/;
  const domainName = /[\w.-]+/;
  const topLevelDomain = /\.[\w]{2,}$/;

  const regex = new RegExp(
    `^${localPart.source}@${domainName.source}${topLevelDomain.source}$`
  );
  if (!regex.test(value)) throw new InvalidEmailError();
}

/**
 * @type {Validator}
 * @param {string} value
 */
export function passwordValidator(value) {
  const rules = [
    { regex: /^.{8,}$/, errorCod: 'PASS_001' },
    { regex: /[a-z]/, errorCod: 'PASS_002' },
    { regex: /[A-Z]/, errorCod: 'PASS_003' },
    { regex: /\d/, errorCod: 'PASS_004' },
    { regex: /[\W]/, errorCod: 'PASS_005' },
    { regex: /\s/, errorCod: 'PASS_006', negate: true },
    {
      regex:
        /(012|123|234|345|456|567|678|789|890|abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz)/i,
      errorCod: 'PASS_007',
      negate: true,
    },
    { regex: /(.)\1{2,}/, errorCod: 'PASS_008', negate: true },
  ];

  for (const { regex, errorCod, negate } of rules) {
    const match = value.match(regex);
    if ((negate && match) || (!negate && !match)) {
      throw new InvalidPasswordError(errorCod, match);
    }
  }
}
