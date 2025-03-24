const { validationResult } = require('express-validator');
const {
  fullNameValidation,
  cpfValidation,
  emailValidation,
  legalAgeValidation,
  passwordValidation,
} = require('./fieldsValidators');
const formatErrors = require('../formatErrors');

module.exports = [
  fullNameValidation(),
  cpfValidation(),
  emailValidation(),
  legalAgeValidation(),
  passwordValidation(),
  async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json(formatErrors(errors));
    }
    next();
  },
];
