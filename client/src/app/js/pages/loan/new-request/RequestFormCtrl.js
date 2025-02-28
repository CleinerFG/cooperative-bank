import { FormCtrl } from '../../../../../global/js/components/FormCtrl.js';
import { translate } from '../../../../../global/js/i18n/Translator.js';
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
      header: { title: translate('newRequest'), icon: 'icon-new-request.svg' },
    };
  }

  get _formComponentsParams() {
    return [
      {
        category: 'search',
        id: 'search-creditor',
        labelText: translate('searchCreditor'),
      },
      {
        category: 'default',
        id: 'creditValue',
        formatter: 'currency',
        labelText: translate('creditValue'),
        customValidator: creditValueValidator,
      },
      {
        category: 'select',
        id: 'deadline',
        labelText: translate('deadline'),

        options: [
          { value: '3', text: `03 ${translate('months')}` },
          { value: '6', text: `06 ${translate('months')}` },
          { value: '9', text: `09 ${translate('months')}` },
          { value: '12', text: `12 ${translate('months')}` },
          { value: '24', text: `24 ${translate('months')}` },
          { value: '48', text: `48 ${translate('months')}` },
        ],
      },
      {
        category: 'select',
        id: 'modality',
        labelText: translate('modality'),
        options: [
          { value: 'personal', text: translate('personalCredit') },
          { value: 'auto', text: translate('autoCredit') },
          { value: 'mortgage', text: translate('mortgageCredit') },
        ],
      },
      {
        category: 'default',
        id: 'rate',
        formatter: 'percent',
        labelText: translate('interestRatePm'),
        customValidator: interestRateValidator,
      },
    ];
  }

  get _submitButtonParams() {
    return {
      id: 'submit',
      labelText: translate('request'),
      cssClass: 'btn-action',
    };
  }

  get _serviceMethod() {
    return loanService.newRequest;
  }
}
