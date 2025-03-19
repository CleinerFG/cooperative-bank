const userRepository = require('../../../repositories/userRepository');
const { removeTimestamp } = require('../../utils/dataNormalizer');
const {
  datetimeValidator,
  cpfValidator,
  emailValidator,
} = require('../../utils/validators');

const userFullNameValidator = (fullName) => {
  if (typeof fullName !== 'string') return [false, 'fullNameMustBeString'];
  if (RegExp(/\d/g).test(fullName)) return [false, 'fullNameCannotHaveNumbers'];
  return [true, null];
};

const userCpfValidator = async (cpf) => {
  if (typeof cpf !== 'string') return [false, 'cpfMustBeString'];
  try {
    cpfValidator(cpf);
    const cpfExists = await userRepository.findCpf({ cpf });
    if (cpfExists) return [false, 'cpfAlreadyExists'];
    return [true, null];
  } catch (e) {
    if (e.message === 'invalidCpf') return [false, e.message];
    throw e;
  }
};

const userEmailValidator = async (email) => {
  if (typeof email !== 'string') return [false, 'emailMustBeString'];
  try {
    emailValidator(email);
    return [true, null];
  } catch (e) {
    if (e.message === 'invalidEmail') return [false, e.message];
    throw e;
  }
};

const userLegalAgeValidator = (birth) => {
  if (typeof birth !== 'string') return [false, 'birthMustBeString'];
  try {
    datetimeValidator(birth);

    const birthDate = new Date(birth);
    const today = new Date();

    const age = today.getUTCFullYear() - birthDate.getUTCFullYear();
    const month = today.getUTCMonth() - birthDate.getUTCMonth();
    const day = today.getUTCDate() - birthDate.getUTCDate();

    if (!(age >= 18 && month >= 0 && day >= 0)) {
      return [false, 'isNot18YearsOld'];
    }
    return [true, null];
  } catch (e) {
    if (e.message === 'invalidDatetime') return [false, e.message];
    throw e;
  }
};

const userValidateAll = async ({ fullName, cpf, email, birth }) => {
  const errors = {};

  const [fullNameIsValid, fullNameError] = userFullNameValidator(fullName);
  const [cpfIsValid, cpfError] = await userCpfValidator(cpf);
  const [emailIsValid, emailError] = await userEmailValidator(email);
  const [birthIsValid, birthError] = userLegalAgeValidator(birth);

  if (!fullNameIsValid) errors.fullName = fullNameError;
  if (!cpfIsValid) errors.cpf = cpfError;
  if (!emailIsValid) errors.email = emailError;
  if (!birthIsValid) errors.birth = birthError;

  const isValid = Object.keys(errors).length === 0;

  return [isValid, errors];
};

module.exports = {
  userFullNameValidator,
  userCpfValidator,
  userEmailValidator,
  userLegalAgeValidator,
  userValidateAll,
};
