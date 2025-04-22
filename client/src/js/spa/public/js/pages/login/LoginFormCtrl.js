import { FormCtrl } from '../../../../global/js/components/FormCtrl.js';
import authService from '../../../../global/js/services/AuthService.js';
import { emailValidator } from '../../helpers/validators.js';
import { translate } from '../../../../global/js/i18n/Translator.js';

export default class LoginFormCtrl extends FormCtrl {
  constructor() {
    super([]);
  }

  get _viewParams() {
    return {
      id: 'login-form',
      containerElement: document.querySelector('.form-container'),
    };
  }

  get _formComponentsParams() {
    return [
      {
        id: 'email',
        category: 'default',
        labelText: translate('email'),
        inputmode: 'email',
        type: 'email',
        customValidator: emailValidator,
      },
      {
        category: 'password',
        id: 'password',
        labelText: translate('pass'),
      },
    ];
  }

  get _submitButtonParams() {
    return {
      id: 'submit',
      labelText: translate('login'),
      cssClass: 'glossy',
    };
  }

  get _serviceMethod() {
    return authService.login;
  }
}
