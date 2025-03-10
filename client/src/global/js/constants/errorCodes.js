import { translate } from '../i18n/Translator.js';

export const AUTH_ERRORS = {
  incorrectEmail: translate('incorrectEmail'),
  incorrectPassword: translate('incorrectPassword'),
  cpfIsRegistered: translate('cpfIsRegistered'),
  emailIsRegistered: translate('emailIsRegistered'),
  invalidPass: translate('invalidPass'),
};

export const INP_ERRORS = {
  fieldIsRequired: translate('fieldIsRequired'),
  invalidCpf: translate('invalidCpf'),
  invalidData: translate('invalidData'),
  invalidEmail: translate('invalidEmail'),
};

export const USER_ERRORS = {
  notFoundUser: translate('notFoundUser'),
};
