const { body } = require('express-validator');
const {
  fullNameValidation,
  cpfValidation,
  emailValidation,
  legalAgeValidation,
  passwordValidation,
} = require('./fieldsValidators');
const validationResponseHandler = require('./validationResponseHandler');

module.exports = {
  createUserMiddleware: [
    fullNameValidation('body'),
    cpfValidation('body'),
    emailValidation('body'),
    legalAgeValidation('body'),
    passwordValidation('body'),
    validationResponseHandler,
  ],

  loginUserMiddleware: [
    emailValidation('body'),
    body('password').isString().withMessage('mustBeString'),
    validationResponseHandler,
  ],

  getUserByCpfMiddleware: [cpfValidation('param'), validationResponseHandler],
};
