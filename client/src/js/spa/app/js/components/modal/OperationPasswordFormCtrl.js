import { FormCtrl } from '../../../../global/js/components/FormCtrl.js';
import { AUTH_ERRORS } from '../../../../global/js/constants/errorCodes.js';
import { translate } from '../../../../global/js/i18n/Translator.js';
import authService from '../../services/AuthService.js';

export class OperationPasswordFormCtrl extends FormCtrl {
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
        id: 'operationPassword',
        category: 'password',
        labelText: translate('pass'),
        formatter: 'strictNumber',
      },
    ];
  }

  get _submitButtonParams() {
    return {
      id: 'transactionConfirm',
      cssClass: 'modal-btn',
      labelText: translate('confirm'),
    };
  }

  get _serviceMethod() {
    return authService.operation;
  }
}
