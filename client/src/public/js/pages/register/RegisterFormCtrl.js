import { FormCtrl } from '../../../../global/js/components/FormCtrl.js';
import authService from '../../services/AuthService.js';
import { cpfValidator } from '../../../../global/js/utils/validators.js';
import { emailValidator, passwordValidator } from '../../utils/validators.js';

export default class RegisterFormCtrl extends FormCtrl {
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
        type: 'date',
      },
      {
        id: 'email',
        category: 'default',
        labelText: 'Email',
        type: 'email',
        customValidator: emailValidator,
      },
      {
        id: 'password',
        category: 'password',
        labelText: 'Password',
        customValidator: passwordValidator,
      },
    ];
  }

  get _submitButtonParams() {
    return {
      id: 'submit',
      labelText: 'Register',
      cssClass: 'glossy',
    };
  }

  get _serviceMethod() {
    return authService.register;
  }
}
