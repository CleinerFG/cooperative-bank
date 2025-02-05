import { Card } from '../../../../components/Card.js';
import { LoanRequestModel } from '../models/LoanRequestModel.js';
import { ConfirmPassModal } from '../../../../../js/components/modal/ConfirmPassModal.js';
import { capitalize } from '../../../../../../global/js/utils/stringUtils.js';

/**
 * Represents a card component specifically for displaying Loan Request Opened.
 */
export class CardLoanRequestOpened extends Card {
  get _ModelClass() {
    return LoanRequestModel;
  }

  get _id() {
    return `loan-request-${this._model.id}`;
  }

  get _cssClass() {
    return `loan-request`;
  }

  get _itemsArray() {
    return [
      { label: 'Creditor', value: this._model.creditor },
      { label: 'Date', value: this._model.date },
      { label: 'Value', value: this._model.value },
      { label: 'Installments', value: this._model.installments },
      {
        label: 'Installment Value',
        value: this._model.installmentValue,
      },
      { label: 'Interest Rate', value: this._model.rate },
    ];
  }

  get _headerTemplate() {
    let cssClass = 'span-pending';
    switch (this._model.status) {
      case 'accepted':
        cssClass = 'span-success';
        break;
      case 'denied':
        cssClass = 'span-fail';
        break;
      default:
        break;
    }
    const str = `<span class="${cssClass}">${capitalize(this._model.status)}</span>`;
    return str;
  }

  get _footerTemplate() {
    return this._buttonsByStatus;
  }

  get _buttonsByStatus() {
    const action = this._model.status === 'pending' ? 'cancel' : 'confirm';
    const cssClass = this._model.status === 'pending' ? 'btn-fail' : '';
    return `
      <button id="btn-${action}-${this._model.id}" class="btn card-data__btn ${cssClass}">
         ${capitalize(action)}
      </button>
     `;
  }

  _handleModal() {
    const action = this._model.status === 'pending' ? 'cancel' : 'confirm';
    document
      .querySelector(`#btn-${action}-${this._model.id}`)
      .addEventListener('click', () => {
        new ConfirmPassModal();
      });
  }
}
