import { CardManager } from '../../../../core/CardManager.js';
import loanService from '../../../../services/LoanService.js';
import { CardInstallment } from './CardInstallment.js';

export default class LoanInstallmentManager extends CardManager {
  #loanId;
  #loanType;
  /**
   *
   * @param {string} loanId
   * @param {'payable'|'receivable'} loanType
   */
  constructor(loanId, loanType) {
    super();
    this.#loanId = loanId;
    this.#loanType = loanType;
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
          entityType: this.#loanType,
          CardClass: CardInstallment,
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
    return loanService.getInstallments(this.#loanId);
  }

  async _init() {
    await super._init();
    this.renderCards('installment');
  }
}
