import { FormCtrl } from '../../../../../../../global/js/components/controllers/FormCtrl.js';
import loanService from '../../../../../services/LoanService.js';

export default class LoanRequestFormCtrl extends FormCtrl {
  get _viewParams() {
    return {
      id: 'new-request-form',
      containerElement: document.querySelector('.new-request'),
      title: 'New request',
    };
  }

  get _formElementsParams() {
    return [
      {
        category: 'search',
        id: 'search-creditor',
        labelText: 'Search for a Creditor',
        endpoint: '/users',
      },
      {
        category: 'default',
        id: 'creditValue',
        inputmode: 'numeric',
        placeholder: 'R$ 0,00',
        strictToNumber: true,
        formatter: 'currency',
        labelText: 'Credit value',
      },
      {
        category: 'select',
        id: 'deadline',
        labelText: 'Deadline (in months)',
        options: [
          { value: '3', text: '03 months' },
          { value: '6', text: '06 months' },
          { value: '9', text: '09 months' },
          { value: '12', text: '12 months' },
          { value: '24', text: '24 months' },
          { value: '48', text: '48 months' },
        ],
      },
      {
        category: 'select',
        id: 'modality',
        labelText: 'Credit modality',
        options: [
          { value: 'personal', text: 'Personal credit' },
          { value: 'auto', text: 'Auto credit' },
          { value: 'mortgage', text: 'Mortgage credit' },
        ],
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

  get _serviceMethod() {
    return loanService.newRequest;
  }
}
