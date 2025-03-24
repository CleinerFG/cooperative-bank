const { validationResult, body } = require('express-validator');

const formatErrors = (errors) => {
  return errors.array().reduce(
    (acc, error) => {
      const field = acc.fields[error.path];
      if (field) {
        field.push(error.msg);
        acc.fields[error.path] = field;
      } else {
        acc.fields[error.path] = [error.msg];
      }
      return acc;
    },
    { error: 'client', fields: {} }
  );
};

module.exports = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(formatErrors(errors));
  }
  next();
};
