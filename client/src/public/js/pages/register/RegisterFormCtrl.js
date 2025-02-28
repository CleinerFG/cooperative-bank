import { FormCtrl } from '../../../../global/js/components/FormCtrl.js';
import authService from '../../services/AuthService.js';
import { cpfValidator } from '../../../../global/js/utils/validators.js';
import { emailValidator, passwordValidator } from '../../helpers/validators.js';
import { translate } from '../../../../global/js/i18n/Translator.js';

export default class RegisterFormCtrl extends FormCtrl {
  constructor() {
    super([]);
  }

  get _viewParams() {
    return {
      id: 'register-form',
      containerElement: document.querySelector('.form-container'),
    };
  }

  get _formComponentsParams() {
    return [
      {
        id: 'cpf',
        category: 'default',
        labelText: translate('cpf'),
        formatter: 'cpf',
        customValidator: cpfValidator,
      },
      {
        id: 'name',
        category: 'default',
        labelText: translate('name'),
      },
      {
        id: 'birth',
        category: 'default',
        labelText: translate('birthDate'),
        type: 'date',
      },
      {
        id: 'email',
        category: 'default',
        labelText: translate('email'),
        type: 'email',
        customValidator: emailValidator,
      },
      {
        id: 'password',
        category: 'password',
        labelText: translate('pass'),
        customValidator: passwordValidator,
      },
    ];
  }

  get _submitButtonParams() {
    return {
      id: 'submit',
      labelText: translate('register'),
      cssClass: 'glossy',
    };
  }

  get _serviceMethod() {
    return authService.register;
  }
}
