import { FormCtrl } from '../../../../global/js/components/FormCtrl.js';
import authService from '../../services/AuthService.js';
import { emailValidator } from '../../helpers/validators.js';

export default class LoginFormCtrl extends FormCtrl {
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
        labelText: 'Email',
        inputmode: 'email',
        type: 'email',
        customValidator: emailValidator,
      },
      {
        category: 'password',
        id: 'password',
        labelText: 'Password',
      },
    ];
  }

  get _submitButtonParams() {
    return {
      id: 'submit',
      labelText: 'Login',
      cssClass: 'glossy',
    };
  }

  get _serviceMethod() {
    return authService.login;
  }
}
