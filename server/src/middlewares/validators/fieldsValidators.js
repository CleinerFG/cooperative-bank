const { body, param } = require('express-validator');
const {
  titleCase,
  removeBlankSpace,
  removeCpfFormatting,
  removeTimestamp,
} = require('../../lib/utils/dataNormalizer');

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

const getField = (type, name) => {
  return type === 'param' ? param(name) : body(name);
};

module.exports = {
  fullNameValidation: (type) => {
    const field = getField(type, 'fullName');
    return field
      .isString()
      .withMessage('mustBeString')
      .trim()
      .notEmpty()
      .withMessage('isRequired')
      .matches(/^[A-Za-z\s]+$/)
      .withMessage('invalid')
      .customSanitizer((value) => {
        return titleCase(removeBlankSpace(value));
      });
  },

  cpfValidation: (type) => {
    const field = getField(type, 'cpf');
    return field
      .isString()
      .withMessage('mustBeString')
      .trim()
      .notEmpty()
      .customSanitizer(removeCpfFormatting)
      .withMessage('isRequired')
      .custom(cpfValidator)
      .withMessage('invalid');
  },

  emailValidation: (type) => {
    const field = getField(type, 'email');
    return field
      .isString()
      .withMessage('mustBeString')
      .trim()
      .notEmpty()
      .withMessage('isRequired')
      .isEmail()
      .withMessage('invalid');
  },

  legalAgeValidation: (type) => {
    const field = getField(type, 'birth');
    return field
      .isString()
      .withMessage('mustBeString')
      .customSanitizer(removeTimestamp)
      .custom(datetimeValidator)
      .withMessage('invalid')
      .custom(isGreater18)
      .withMessage('isNotGreater18YearsOld');
  },

  passwordValidation: (type) => {
    const field = getField(type, 'password');
    return field
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
