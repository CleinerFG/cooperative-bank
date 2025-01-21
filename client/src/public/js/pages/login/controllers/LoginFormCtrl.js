import { FormCtrl } from '../../../../../global/js/controllers/FormCtrl.js';
import { LoginModel } from '../models/LoginModel.js';

export default class LoginFormCtrl extends FormCtrl {
  get _modelClass() {
    return LoginModel;
  }

  get _viewConfig() {
    return {
      id: 'login-form',
      containerElement: document.querySelector('.form-container'),
      cssClass: 'login-form',
    };
  }

  get _inputsConfig() {
    return [
      {
        id: 'email',
        category: 'default',
        labelText: 'E-mail',
      },
      {
        category: 'password',
        id: 'password',
        labelText: 'Password',
      },
    ];
  }

  get _submitConfig() {
    return {
      id: 'submit',
      labelText: 'Login',
    };
  }

  get _endpoint() {
    return 'auth/login';
  }
}
