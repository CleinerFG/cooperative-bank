import { FormCtrl } from '../../../../../../global/js/controllers/FormCtrl.js';
import { cpfValidator } from '../../../../../../global/js/utils/validators.js';
import { LoanRequestModel } from '../models/LoanRequestModel.js';

/**
 * Form for Loan Request.
 * Implements the necessary configurations for the loan request form.
 */
export default class NewLoanRequestFormCtrl extends FormCtrl {
  get _modelClass() {
    return LoanRequestModel;
  }

  get _viewParams() {
    return {
      id: 'new-request-form',
      containerElement: document.querySelector('.new-request'),
      cssClass: 'new-request-form',
    };
  }

  get _inputsParams() {
    return [
      {
        category: 'search',
        id: 'search-creditor',
        inputmode: 'numeric',
        placeholder: '000.000.000-00',
        strictToNumber: true,
        labelText: 'Search for a Creditor',
        formatter: 'cpf',
        customValidator: cpfValidator,
        endpoint: 'users',
      },
      {
        category: 'default',
        id: 'value',
        inputmode: 'numeric',
        placeholder: 'R$ 0,00',
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
        placeholder: '0,00%',
        formatter: 'percent',
        labelText: 'Interest Rate',
      },
    ];
  }

  get _submitButtonParams() {
    return {
      id: 'submit',
      labelText: 'Request',
    };
  }

  get _endpoint() {
    return 'opened-requests';
  }
}
