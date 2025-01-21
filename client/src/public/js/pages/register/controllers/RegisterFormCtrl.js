import { FormCtrl } from '../../../../../global/js/controllers/FormCtrl.js';
import { RegisterModel } from '../models/RegisterModel.js';

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
      },
      {
        id: 'email',
        category: 'default',
        labelText: 'E-mail',
      },
      {
        id: 'password',
        category: 'password',
        labelText: 'Password',
      },
    ];
  }

  get _submitConfig() {
    return {
      id: 'submit',
      labelText: 'register',
    };
  }

  get _endpoint() {
    return 'auth/register';
  }
}
