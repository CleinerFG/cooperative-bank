import { CardComponent } from '../../../../../js/components/CardComponent.js';
import { LoanRequestModel } from '../models/LoanRequestModel.js';
import { capitalize } from '../../../../../js/utils/stringUtils.js';

/**
 * Represents a card component specifically for displaying Loan Request Opened.
 * Implements abstract methods from `CardComponent` to provide templates and configurations
 * for rendering Loan Request Opened details.
 *
 * @class
 * @extends CardComponent
 */
export class CardLoanRequestOpened extends CardComponent {
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
      { label: 'Creditor', value: this._model.creditor },
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
    let cssClass = 'p-pending';
    switch (this._model.status) {
      case 'accepted':
        cssClass = 'p-success';
        break;
      case 'denied':
        cssClass = 'p-fail';
        break;
      default:
        break;
    }
    const str = `<p class="${cssClass}">${capitalize(this._model.status)}</p>`;
    return str;
  }

  get _cardFooterTemplate() {
    return this._buttonsByStatus;
  }

  /**
   * Returns the HTML for the button based on the status.
   *
   * @protected
   * @type {string}
   */
  get _buttonsByStatus() {
    const action = this._model.status === 'pending' ? 'cancel' : 'confirm';
    return `
      <button id="btn-loan-request-${action}-${this._model.id}" class="btn card-data__btn">
         ${capitalize(action)}
      </button>
     `;
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
