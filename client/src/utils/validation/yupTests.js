import { findRepetition, findSequence } from './helpers';

export const repetitionTestRule = {
  name: 'notRepetition',
  message: ({ value }) => {
    const rep = findRepetition(value);
    return { key: 'invalidRepetition', interpolations: { repetition: rep } };
  },
  test: (value) => {
    return !findRepetition(value);
  },
};

export const sequenceTestRule = {
  name: 'notSequence',
  message: ({ value }) => {
    const seq = findSequence(value);
    return { key: 'invalidSequence', interpolations: { sequence: seq } };
  },
  test: (value) => {
    return !findSequence(value);
  },
};

export const onlyNumbersTestRule = {
  name: 'onlyNumbers',
  message: 'fieldOnlyNum',
  test: (value) => /^[0-9]+$/.test(value || ''),
};

export const hasNumberTestRule = {
  name: 'hasNumber',
  message: 'passMustHaveNum',
  test: (value) => /\d/.test(value),
};

export const hasUppercaseTestRule = {
  name: 'hasUppercase',
  message: 'passMustHaveUpperChar',
  test: (value) => /[A-Z]/.test(value),
};

export const hasLowercaseTestRule = {
  name: 'hasLowercase',
  message: 'passMustHaveLowerChar',
  test: (value) => /[a-z]/.test(value),
};

export const hasSpecialCharTestRule = {
  name: 'hasSpecialChar',
  message: 'passMustHaveSpecialChar',
  test: (value) => /[^a-zA-Z0-9]/.test(value),
};
