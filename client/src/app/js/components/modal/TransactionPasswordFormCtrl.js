import { FormCtrl } from '../../../../global/js/components/FormCtrl.js';
import { AUTH_ERRORS } from '../../../../global/js/constants/errorCodes.js';
import authService from '../../services/AuthService.js';

export class TransactionPasswordFormCtrl extends FormCtrl {
  constructor() {
    super([AUTH_ERRORS]);
  }

  get _viewParams() {
    return {
      id: 'confirm-pass-form',
      containerElement: document.querySelector('.modal-content'),
      cssClass: 'modal-form',
    };
  }

  get _formComponentsParams() {
    return [
      {
        id: 'transactionPassword',
        category: 'password',
        labelText: 'Password',
        formatter: 'strictNumber',
      },
    ];
  }

  get _submitButtonParams() {
    return {
      id: 'transaction-confirm',
      cssClass: 'modal-btn',
      labelText: 'Confirm',
    };
  }

  get _serviceMethod() {
    return authService.transaction;
  }
}
