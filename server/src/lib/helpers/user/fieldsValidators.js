const { password } = require('../../../config/databases/mysql');
const userRepository = require('../../../repositories/userRepository');
const {
  titleCase,
  removeBlankSpace,
  removeCpfFormatting,
  removeTimestamp,
} = require('../../utils/dataNormalizer');
const {
  datetimeValidator,
  cpfValidator,
  emailValidator,
  passwordValidator,
} = require('../../utils/validators');

const fullNameValidation = (fullName) => {
  const field = {
    name: 'fullName',
    isValid: false,
    error: null,
    normalized: null,
  };

  if (typeof fullName !== 'string') {
    field.error = 'mustBeString';
    return field;
  }

  if (RegExp(/[^a-zA-Z\s]/g).test(fullName)) {
    field.error = 'invalidFullName';
    return field;
  }

  const normalized = titleCase(removeBlankSpace(fullName));
  field.isValid = true;
  field.normalized = normalized;

  return field;
};

const cpfValidation = async (cpf, findInDb) => {
  const field = {
    name: 'cpf',
    isValid: false,
    error: null,
    normalized: null,
  };

  if (typeof cpf !== 'string') {
    field.error = 'mustBeString';
    return field;
  }

  try {
    cpfValidator(cpf);
    const normalized = removeCpfFormatting(cpf);

    if (findInDb) {
      const cpfExists = await userRepository.findCpf({ cpf: normalized });
      if (cpfExists) {
        field.error = 'alreadyExists';
        return field;
      }
    }

    field.isValid = true;
    field.normalized = normalized;

    return field;
  } catch (e) {
    if (e.message === 'invalidCpf') {
      field.error = e.message;
      return field;
    }

    throw e;
  }
};

const emailValidation = async (email, findInDb) => {
  const field = {
    name: 'email',
    isValid: false,
    error: null,
    normalized: null,
  };

  if (typeof email !== 'string') {
    field.error = 'mustBeString';
    return field;
  }

  try {
    emailValidator(email);

    if (findInDb) {
      const emailExists = await userRepository.findEmail({ email });

      if (emailExists) {
        field.error = 'alreadyExists';
        return field;
      }
    }

    field.isValid = true;
    field.normalized = email;

    return field;
  } catch (e) {
    if (e.message === 'invalidEmail') {
      field.error = e.message;
      return field;
    }

    throw e;
  }
};

const legalAgeValidation = (birth) => {
  const field = {
    name: 'birth',
    isValid: false,
    error: null,
    normalized: null,
  };

  if (typeof birth !== 'string') {
    field.error = 'mustBeString';
    return field;
  }

  try {
    datetimeValidator(birth);

    const birthDate = new Date(birth);
    const today = new Date();

    const age = today.getUTCFullYear() - birthDate.getUTCFullYear();
    const month = today.getUTCMonth() - birthDate.getUTCMonth();
    const day = today.getUTCDate() - birthDate.getUTCDate();

    if (!(age >= 18 && month >= 0 && day >= 0)) {
      field.error = 'isNot18YearsOld';
      return field;
    }

    field.isValid = true;
    field.normalized = removeTimestamp(birth);

    return field;
  } catch (e) {
    if (e.message === 'invalidDatetime') {
      field.error = e.message;
      return field;
    }

    throw e;
  }
};

const passwordValidation = (password, useRegex) => {
  const field = {
    name: 'password',
    isValid: false,
    error: null,
    normalized: null,
  };

  if (typeof password !== 'string') {
    field.error = 'mustBeString';
    return field;
  }

  try {
    if (useRegex) passwordValidator(password);

    field.isValid = true;
    field.normalized = password;

    return field;
  } catch (e) {
    if (
      [
        'must8CharsLong',
        'mustLowercaseChar',
        'mustUppercaseChar',
        'mustNumber',
        'mustSpecialChar',
        'cannotBlankSpace',
        'cannotSeqPattern',
        'cannotCharSeq',
      ].includes(e.message)
    ) {
      field.error = e.message;
      return field;
    }
    throw e;
  }
};

module.exports = {
  fullNameValidation,
  cpfValidation,
  emailValidation,
  legalAgeValidation,
  passwordValidation,
};
