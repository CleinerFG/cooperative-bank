const reduceValidationFields = require('../reduceValidationFields');
const { checkCpfExists, checkEmailExists } = require('./fieldsValidators');

module.exports = {
  createUserValidation: async ({ cpf, email }) => {
    const validations = await Promise.all([
      checkCpfExists(cpf),
      checkEmailExists(email),
    ]);
    return reduceValidationFields(validations);
  },
};
