import { CardManager } from '../../../../core/CardManager.js';
import loanService from '../../../../services/LoanService.js';
import { CardLoanInstallment } from './CardLoanInstallment';

export default class LoanInstallmentManager extends CardManager {
  constructor(loanId) {
    super();
    this._loanId = loanId;
    this._init();
  }

  get _containerElement() {
    return document.getElementById('loan-installments');
  }

  get _entityMap() {
    return {
      entity: 'loan-installments',
      categories: [
        {
          name: 'installment',
          CardClass: CardLoanInstallment,
        },
      ],
    };
  }

  get _cardSkelonRows() {
    return 2;
  }

  get _titleTemplate() {
    return '<h2 class="card-group__h2">Installments</h2>';
  }

  async _fetchService() {
    return loanService.getInstallments(this._loanId);
  }

  async _init() {
    await super._init();
    this.renderCards('installment');
  }
}
