import { FormCtrl } from '../../../../../global/js/components/FormCtrl.js';
import {
  creditValueValidator,
  interestRateValidator,
} from '../../../helpers/loanValidators.js';
import loanService from '../../../services/LoanService.js';

export default class RequestFormCtrl extends FormCtrl {
  constructor() {
    super([]);
  }

  get _viewParams() {
    return {
      id: 'new-request-form',
      containerElement: document.querySelector('.new-request'),
      header: { title: 'New request', icon: 'icon-new-request.svg' },
    };
  }

  get _formComponentsParams() {
    return [
      {
        category: 'search',
        id: 'search-creditor',
        labelText: 'Search for a Creditor',
      },
      {
        category: 'default',
        id: 'creditValue',
        formatter: 'currency',
        labelText: 'Credit value',
        customValidator: creditValueValidator,
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
        formatter: 'percent',
        labelText: 'Interest Rate',
        customValidator: interestRateValidator,
      },
    ];
  }

  get _submitButtonParams() {
    return {
      id: 'submit',
      labelText: 'Request',
      cssClass: 'btn-action',
    };
  }

  get _serviceMethod() {
    return loanService.newRequest;
  }
}
