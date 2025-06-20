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
