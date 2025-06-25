import {
  cpfIsValid,
  findRepetition,
  findSequence,
  isAtLeast18,
} from './helpers';

export const cpfTestRule = {
  name: 'cpf-is-valid',
  message: 'invalidCpf',
  test: cpfIsValid,
};

export const repetitionTestRule = {
  name: 'not-repetition',
  message: ({ value }) => {
    const rep = findRepetition(value);
    return { key: 'invalidRepetition', interpolations: { repetition: rep } };
  },
  test: (value) => {
    return !findRepetition(value);
  },
};

export const sequenceTestRule = {
  name: 'not-sequence',
  message: ({ value }) => {
    const seq = findSequence(value);
    return { key: 'invalidSequence', interpolations: { sequence: seq } };
  },
  test: (value) => {
    return !findSequence(value);
  },
};

export const onlyNumbersTestRule = {
  name: 'only-numbers',
  message: 'fieldOnlyNum',
  test: (value) => /^[0-9]+$/.test(value),
};

export const hasNumberTestRule = {
  name: 'has-number',
  message: 'passMustHaveNum',
  test: (value) => /\d/.test(value),
};

export const hasUppercaseTestRule = {
  name: 'has-uppercase',
  message: 'passMustHaveUpperChar',
  test: (value) => /[A-Z]/.test(value),
};

export const hasLowercaseTestRule = {
  name: 'has-lowercase',
  message: 'passMustHaveLowerChar',
  test: (value) => /[a-z]/.test(value),
};

export const hasSpecialCharTestRule = {
  name: 'has-special-Char',
  message: 'passMustHaveSpecialChar',
  test: (value) => /[^a-zA-Z0-9]/.test(value),
};

export const has18YearsTestRule = {
  name: 'has-18-years',
  message: 'mustBe18Years',
  test: isAtLeast18,
};
