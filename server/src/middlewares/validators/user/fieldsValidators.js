const { body } = require('express-validator');
const {
  titleCase,
  removeBlankSpace,
  removeCpfFormatting,
  removeTimestamp,
} = require('../../../lib/utils/dataNormalizer');

const {
  datetimeValidator,
  isGreater18,
  cpfValidator,
  passHave8Chars,
  passHaveLowerCase,
  passHaveUpperCase,
  passHaveNumber,
  passHaveSpecialChar,
  passDontHaveBlankSpace,
  passDontHaveSeqPattern,
  passDontHaveCharSequence,
} = require('./helpers');

module.exports = {
  fullNameValidation: () => {
    return body('fullName')
      .isString()
      .withMessage('mustBeString')
      .trim()
      .notEmpty()
      .withMessage('isRequired')
      .isAlpha()
      .withMessage('invalid')
      .customSanitizer((value) => {
        return titleCase(removeBlankSpace(value));
      });
  },

  cpfValidation: () => {
    return body('cpf')
      .isString()
      .withMessage('mustBeString')
      .trim()
      .notEmpty()
      .customSanitizer(removeCpfFormatting)
      .withMessage('isRequired')
      .custom(cpfValidator)
      .withMessage('invalid');
  },

  emailValidation: () => {
    return body('email')
      .isString()
      .withMessage('mustBeString')
      .trim()
      .notEmpty()
      .withMessage('isRequired')
      .isEmail()
      .withMessage('invalid');
  },

  legalAgeValidation: () => {
    return body('birth')
      .isString()
      .withMessage('mustBeString')
      .customSanitizer(removeTimestamp)
      .custom(datetimeValidator)
      .withMessage('invalid')
      .custom(isGreater18)
      .withMessage('isNotGreater18YearsOld');
  },

  passwordValidation: () => {
    return body('password')
      .isString()
      .withMessage('mustBeString')
      .custom(passHave8Chars)
      .withMessage('must8CharsLong')
      .custom(passHaveLowerCase)
      .withMessage('mustHaveLowerChar')
      .custom(passHaveUpperCase)
      .withMessage('mustHaveUpperChar')
      .custom(passHaveNumber)
      .withMessage('mustHaveNum')
      .custom(passHaveSpecialChar)
      .withMessage('mustHaveSpecialChar')
      .custom(passDontHaveBlankSpace)
      .withMessage('cannotBlankSpace')
      .custom(passDontHaveSeqPattern)
      .withMessage('cannotSeqPattern')
      .custom(passDontHaveCharSequence)
      .withMessage('cannotCharSequence');
  },
};
