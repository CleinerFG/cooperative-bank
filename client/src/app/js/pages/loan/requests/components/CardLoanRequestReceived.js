import { CardActiveLoan } from '../../overview/components/CardActiveLoan.js';
import { ConfirmOperationModal } from '../../../../../js/components/modal/ConfirmOperationModal.js';
import {
  numberToCurrency,
  numberToPercent,
  formatDate,
} from '../../../../../../global/js/utils/formatters.js';
import { capitalize } from '../../../../../../global/js/utils/stringUtils.js';
import { handleIconDark } from '../../../../../../global/js/utils/themeUtils.js';

/**
 * @typedef {object} LoanRequestReceivedData
 * @property {string} id
 * @property {'personal'|'auto'|'mortgage'} modality
 * @property {string} debtor
 * @property {string} date
 * @property {number} creditValue
 * @property {number} totalAmount
 * @property {number} installments
 * @property {number} installmentValue
 * @property {number} rate
 */

/**
 * Represents a card component specifically for displaying Loan Request Received.
 */
export class CardLoanRequestReceived extends CardActiveLoan {
  /**
   * @type {LoanRequestReceivedData}
   */
  get _apiData() {
    return super._apiData;
  }

  get _cssClass() {
    return `request-received`;
  }

  get _itemsArray() {
    return [
      {
        label: 'Debtor',
        value: this._apiData.debtor,
      },
      {
        label: 'Credit value',
        value: numberToCurrency(this._apiData.creditValue),
      },
      {
        label: 'Total amount',
        value: numberToCurrency(this._apiData.totalAmount),
      },
      {
        label: 'Installment value',
        value: numberToCurrency(this._apiData.installmentValue),
      },
      {
        label: 'Interest rate',
        value: `${numberToPercent(this._apiData.rate)} p.m.`,
      },
      {
        label: 'Installments',
        value: this._apiData.installments,
      },
    ];
  }

  get _headerTemplate() {
    return `
          <div class="card-title">
            <img src="${this._modalityImgSrc[this._apiData.modality]}" alt="Modality"
             class="icon ${handleIconDark()}">
            <span>${capitalize(this._apiData.modality)}</span>
          </div>
          <span class="span-date">Started on ${formatDate(this._apiData.date)}</span>
          `;
  }

  get _footerTemplate() {
    return `
     <button id="btn-${this._cssId}-approve" class="btn card-data__btn btn-success">
        Approve 
     </button>
     <button id="btn-${this._cssId}-repprove" class="btn card-data__btn btn-fail">
        Repprove
     </button>
    `;
  }

  _setListeners() {
    document
      .querySelector(`#btn-${this._cssId}-approve`)
      .addEventListener('click', () => {
        new ConfirmOperationModal();
      });
    document
      .querySelector(`#btn-${this._cssId}-repprove`)
      .addEventListener('click', () => {
        new ConfirmOperationModal();
      });
  }
}
