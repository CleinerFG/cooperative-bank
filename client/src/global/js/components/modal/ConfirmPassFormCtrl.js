import { FormCtrl } from '../../controllers/FormCtrl.js';

export class ConfirmPassFormCtrl extends FormCtrl {
  get _viewConfig() {
    return {
      id: 'confirm-pass-form',
      containerElement: document.querySelector('.modal__content'),
      cssClass: 'modal__form',
    };
  }

  get _inputsConfig() {
    return [
      {
        id: 'transaction-password',
        category: 'password',
        strictToNumber: true,
      },
    ];
  }

  get _submitConfig() {
    return {
      id: 'transaction-confirm',
      cssClass: 'modal-btn',
      labelText: 'Confirm',
    };
  }

  // Add endpoint in the superclass constructor, when backend is defined
  // Each confirm pass modal has a different endpoint
  get _endpoint() {
    return '';
  }
}
