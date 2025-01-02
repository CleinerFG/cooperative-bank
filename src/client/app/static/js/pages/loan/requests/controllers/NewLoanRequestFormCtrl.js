import { FormCtrl } from '../../../../controllers/FormCtrl.js';
import { LoanRequestModel } from '../models/LoanRequestModel.js';

/**
 * Form for Loan Request.
 * Implements the necessary configurations for the loan request form.
 *
 * @class
 * @extends FormCtrl
 */
export default class NewLoanRequestFormCtrl extends FormCtrl {
  get _modelClass() {
    return LoanRequestModel;
  }

  get _viewConfig() {
    return {
      id: 'new-request-form',
      containerElement: document.querySelector('.new-request'),
      cssClass: 'new-request-form',
    };
  }

  get _inputsConfig() {
    return [
      {
        category: 'search',
        id: 'search-creditor',
        strictToNumber: true,
        labelText: 'Search for a Creditor',
        defaultValue: {
          id: 1000,
          name: 'Cooperative Bank Creditor',
        },
        endpoint: 'users',
      },
      {
        id: 'description',
        category: 'default',
        labelText: 'Description',
      },
      {
        category: 'default',
        id: 'value',
        inputmode: 'numeric',
        strictToNumber: true,
        formatter: 'currency',
        labelText: 'Value',
      },
      {
        category: 'default',
        id: 'installments',
        inputmode: 'numeric',
        strictToNumber: true,
        labelText: 'Installments',
      },
      {
        category: 'default',
        id: 'rate',
        inputmode: 'numeric',
        strictToNumber: true,
        formatter: 'percent',
        labelText: 'Interest Rate',
      },
    ];
  }

  get _submitConfig() {
    return {
      id: 'submit',
      labelText: 'Request',
    };
  }

  get _endpoint() {
    return 'opened-requests';
  }
}
