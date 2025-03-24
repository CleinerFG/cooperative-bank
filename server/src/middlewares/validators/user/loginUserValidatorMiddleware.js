const { validationResult, body } = require('express-validator');
const { emailValidation } = require('./fieldsValidators');
const formatErrors = require('../formatErrors');

module.exports = [
  emailValidation(),
  body('password').isString().withMessage('mustBeString'),
  async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json(formatErrors(errors));
    }
    next();
  },
];
