import '../../../global/js/types/validatorsType.js';

import { InvalidEmailError, InvalidPasswordError } from '../errors/InputErrors.js';

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
    { regex: /^.{8,}$/, errorCod: 'must8CharsLong' },
    { regex: /[a-z]/, errorCod: 'mustLowercaseChar' },
    { regex: /[A-Z]/, errorCod: 'mustUppercaseChar' },
    { regex: /\d/, errorCod: 'mustNumber' },
    { regex: /[\W]/, errorCod: 'mustSpecialChar' },
    { regex: /\s/, errorCod: 'canNotBlankSpace', negate: true },
    {
      regex:
        /(012|123|234|345|456|567|678|789|890|abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz)/i,
      errorCod: 'canNotSeqPattern',
      negate: true,
    },
    { regex: /(.)\1{2,}/, errorCod: 'canNotCharSeq', negate: true },
  ];

  for (const { regex, errorCod, negate } of rules) {
    const match = value.match(regex);
    if ((negate && match) || (!negate && !match)) {
      throw new InvalidPasswordError(errorCod, match);
    }
  }
}
