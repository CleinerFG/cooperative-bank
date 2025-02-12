import '../../types/formDataType.js';
import { FormCtrl } from '../../../../global/js/components/controllers/FormCtrl.js';

export class TransactionPasswordFormCtrl extends FormCtrl {
  get _viewParams() {
    return {
      id: 'confirm-pass-form',
      containerElement: document.querySelector('.modal-content'),
      cssClass: 'modal-form',
    };
  }

  get _formElementsParams() {
    return [
      {
        id: 'transactionPassword',
        category: 'password',
        labelText: 'Transaction password',
        strictToNumber: true,
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

  // Add endpoint in the superclass constructor, when backend is defined
  // Each confirm pass modal has a different endpoint
  get _endpoint() {
    return '/api/auth/transaction';
  }

  /**
   * @type {FormDataTransactionPassword}
   */
  get _formData() {
    super._formData();
  }
}
