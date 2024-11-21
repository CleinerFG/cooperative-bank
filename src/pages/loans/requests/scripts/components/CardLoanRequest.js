import { CardComponent } from '../../../../../js/components/CardComponent.js';
import { LoanRequestModel } from '../models/LoanRequestModel.js';
import { capitalize } from '../../../../../js/utils/stringUtils.js';

/**
 * Represents a card component specifically for displaying Loan Request.
 * Implements abstract methods from `CardComponent` to provide templates and configurations
 * for rendering loan request details.
 *
 * @class
 * @extends CardComponent
 */
export class CardLoanRequest extends CardComponent {
  get _ModelClass() {
    return LoanRequestModel;
  }

  get _cssId() {
    return `loan-request-${this._model.id}`;
  }

  get _cssClass() {
    return `loan-request`;
  }

  get _cardItemsTemplate() {
    return [
      {
        label: this._model.creditor ? 'Creditor' : 'Debtor',
        value: this._model.creditor || this._model.debtor,
      },
      { label: 'Date', value: this._model.date },
      { label: 'Value', value: this._model.value },
      { label: 'Description', value: this._model.description },
      { label: 'Installments', value: this._model.installments },
      {
        label: 'Installment Value',
        value: this._model.installmentValue,
      },
      { label: 'Interest Rate', value: this._model.rate },
    ];
  }

  get _cardHeaderTemplate() {
    let cssClass;
    if (this._model.status === 'accepted') {
      cssClass = 'p__success';
    } else if (this._model.status === 'denied') {
      cssClass = 'p__fail';
    }
    const str = `<p class="${cssClass}">${capitalize(this._model.status)}</p>`;
    return str;
  }

  get _cardFooterTemplate() {
    const openedBtns = `
     <button id="btn-loan-request-confirm-${this._model.id}" class="btn card-data__btn">
        OK
     </button>
    `;
    const receivedBtns = `
     <button id="btn-loan-request-approve-${this._model.id}" class="btn card-data__btn btn-success">
        Approve 
     </button>
     <button id="btn-loan-request-repprove-${this._model.id}" class="btn card-data__btn btn-fail">
        Repprove
     </button>
    `;
    const btns = this._model.type === 'opened' ? openedBtns : receivedBtns;
    return btns;
  }

  /**
   * Handles modal behavior.
   * In this case, it does not open a modal.
   *
   * @protected
   * @returns {boolean}
   * @override
   *
   * @note The modal for the cardLoanRequest is still to be built.
   */
  _modalHandler() {
    return false;
  }
}
