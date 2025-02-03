import { FormCtrl } from '../../../../global/js/controllers/FormCtrl.js';
import { RegisterModel } from './RegisterModel.js';
import {
  cpfValidator,
  emailValidator,
  passwordValidator,
} from '../../../../global/js/utils/validators.js';

export default class RegisterFormCtrl extends FormCtrl {
  get _modelClass() {
    return RegisterModel;
  }

  get _viewConfig() {
    return {
      id: 'register-form',
      containerElement: document.querySelector('.form-container'),
      cssClass: 'register-form',
    };
  }

  get _inputsConfig() {
    return [
      {
        id: 'cpf',
        category: 'default',
        labelText: 'CPF',
        formatter: 'cpf',
        customValidator: cpfValidator,
      },
      {
        id: 'name',
        category: 'default',
        labelText: 'Name',
      },
      {
        id: 'birth',
        category: 'default',
        labelText: 'Birth',
        inputmode: 'date',
        type: 'date',
      },
      {
        id: 'email',
        category: 'default',
        labelText: 'E-mail',
        inputmode: 'email',
        type: 'email',
        customValidator: emailValidator,
      },
      {
        id: 'password',
        cssClass: 'password',
        category: 'password',
        labelText: 'Password',
        customValidator: passwordValidator,
      },
    ];
  }

  get _submitConfig() {
    return {
      id: 'submit',
      labelText: 'Register',
    };
  }

  get _endpoint() {
    return 'auth/register';
  }
}
