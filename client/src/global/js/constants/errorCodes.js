import { translate } from '../i18n/Translator.js';

const prototype = {
  get message() {
    return translate(this.desc);
  },
};

export const AUTH_ERRORS = {
  AUTH_001: Object.create(prototype, {
    desc: { value: 'incorrectEmail' },
  }),
  AUTH_002: Object.create(prototype, {
    desc: { value: 'incorrectPassword' },
  }),
};

export const INP_ERRORS = {
  VALID_001: Object.create(prototype, {
    desc: { value: 'fieldIsRequired' },
  }),
  VALID_002: Object.create(prototype, {
    desc: { value: 'invalidCpf' },
  }),
  VALID_003: Object.create(prototype, {
    desc: { value: 'invalidData' },
  }),
  VALID_004: Object.create(prototype, {
    desc: { value: 'invalidEmail' },
  }),
};

export const USER_ERRORS = {
  USER_001: Object.create(prototype, {
    desc: { value: 'notFoundUser' },
  }),
};
