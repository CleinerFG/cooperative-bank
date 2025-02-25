export const INP_ERRORS = {
  AUTH_001: {
    desc: 'invalidEmailType',
    message: 'The email must be a valid string',
  },
  AUTH_002: {
    desc: 'invalidPasswordType',
    message: 'The password must be valid',
  },
  AUTH_003: {
    desc: 'incorrectEmail',
    message: 'The email is incorrect',
  },
  AUTH_004: {
    desc: 'incorrectPassword',
    message: 'The password is incorrect',
  },
  VALID_001: {
    desc: 'fieldIsRequired',
    message: 'This field is required',
  },
  VALID_002: {
    desc: 'isNotNumber',
    message: 'The value must be a number',
  },
  VALID_003: {
    desc: 'isNotDate',
    message: 'The value must be a valid date',
  },
  VALID_004: {
    desc: 'invalidCpf',
    message: 'The CPF is invalid',
  },
  VALID_005: {
    desc: 'invalidData',
    message: 'The data is invalid',
  },
  VALID_006: {
    desc: 'must8CharsLong',
    message: 'The password must be at least 8 characters long',
  },
  VALID_007: {
    desc: 'mustLowercaseChar',
    message: 'The password must contain at least one lowercase letter',
  },
  VALID_008: {
    desc: 'mustUppercaseChar',
    message: 'The password must contain at least one uppercase letter',
  },
  VALID_009: {
    desc: 'mustNumber',
    message: 'The password must contain at least one number',
  },
  VALID_010: {
    desc: 'mustSpecialChar',
    message: 'The password must contain at least one special character',
  },
  VALID_011: {
    desc: 'canNotBlankSpace',
    message: 'The password cannot have blank space',
  },
  VALID_012: {
    desc: 'canNotSeqPattern',
    message: (value) => `The password cannot have sequential pattern: ${value}`,
  },
  VALID_013: {
    desc: 'canNotCharSeq',
    message: (value) =>
      `The password cannot have consecutive repetitions: ${value}`,
  },
  VALID_014: {
    desc: 'invalidEmail',
    message: 'The email must be a valid string',
  },
};

export const GET_ERRORS = {
  USER_001: {
    desc: 'notFoundUser',
    message: 'The user was not found',
  },
};
