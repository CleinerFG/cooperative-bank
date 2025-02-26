const AUTH_ERRORS = {
  AUTH_003: {
    desc: 'cpfIsRegistered',
    message: 'The CPF is already registered',
  },
  AUTH_004: {
    desc: 'emailIsRegistered',
    message: 'The email is already registered',
  },
};

export const PASS_ERRORS = {
  PASS_001: {
    desc: 'must8CharsLong',
    message: 'The password must be at least 8 characters long',
  },
  PASS_002: {
    desc: 'mustLowercaseChar',
    message: 'The password must contain at least one lowercase letter',
  },
  PASS_003: {
    desc: 'mustUppercaseChar',
    message: 'The password must contain at least one uppercase letter',
  },
  PASS_004: {
    desc: 'mustNumber',
    message: 'The password must contain at least one number',
  },
  PASS_005: {
    desc: 'mustSpecialChar',
    message: 'The password must contain at least one special character',
  },
  PASS_006: {
    desc: 'canNotBlankSpace',
    message: 'The password cannot have blank space',
  },
  PASS_007: {
    desc: 'canNotSeqPattern',
    message: (value) => `The password cannot have sequential pattern: ${value}`,
  },
  PASS_008: {
    desc: 'canNotCharSeq',
    message: (value) =>
      `The password cannot have consecutive repetitions: ${value}`,
  },
  PASS_009: {
    desc: 'invalidPass',
    message: 'The password is invalid',
  },
};
