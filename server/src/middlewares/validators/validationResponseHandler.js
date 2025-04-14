const { validationResult } = require('express-validator');
const InvalidFieldsError = require('../../errors/InvalidFieldsError');

const formatErrorsFields = (errors) => {
  const fields = {};
  errors.forEach((err) => {
    if (fields[err.path]) {
      fields[err.path].push(err.msg);
    } else {
      fields[err.path] = [err.msg];
    }
  });
  return fields;
};

module.exports = async (req, res, next) => {
  const { errors } = validationResult(req);

  if (errors.length) {
    const fields = formatErrorsFields(errors);
    throw new InvalidFieldsError(fields);
  }
  next();
};
