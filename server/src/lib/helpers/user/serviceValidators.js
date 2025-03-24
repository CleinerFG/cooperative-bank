const { checkCpfExists, checkEmailExists } = require('./fieldsValidators');

const reduceFields = (validations) => {
  const isValid = validations.every((field) => field.isValid);

  const fields = validations.reduce((acc, field) => {
    if (!field.isValid) {
      acc[field.name] = 'alreadyExists';
    }
    return acc;
  }, {});

  return [isValid, fields];
};

module.exports = {
  createUserValidation: async ({ cpf, email }) => {
    const validations = await Promise.all([
      checkCpfExists(cpf),
      checkEmailExists(email),
    ]);
    return reduceFields(validations);
  },
};
