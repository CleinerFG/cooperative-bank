const {
  fullNameValidation,
  cpfValidation,
  emailValidation,
  legalAgeValidation,
  passwordValidation,
} = require('./fieldsValidators');

const reduceFields = (validations) => {
  const isValid = validations.every((field) => field.isValid);

  const fields = validations.reduce((acc, field) => {
    if (isValid) {
      acc[field.name] = field.normalized;
    } else if (field.error) {
      acc[field.name] = field.error;
    }
    return acc;
  }, {});

  return [isValid, fields];
};

module.exports = {
  createUserValidation: async ({ fullName, cpf, email, birth, password }) => {
    const promises = [cpfValidation(cpf, true), emailValidation(email, true)];

    const validations = [
      fullNameValidation(fullName),
      legalAgeValidation(birth),
      passwordValidation(password, true),
      ...(await Promise.all(promises)),
    ];
    return reduceFields(validations);
  },

  authUserLoginValidation: async ({ email, password }) => {
    const validations = [
      await emailValidation(email, false),
      passwordValidation(password, false),
    ];
    return reduceFields(validations);
  },

  findByCpfValidation: async ({ cpf }) => {
    const validations = [await cpfValidation(cpf, false)];
    return reduceFields(validations);
  },
};
