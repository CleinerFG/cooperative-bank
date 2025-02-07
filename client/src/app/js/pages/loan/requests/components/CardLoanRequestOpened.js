import { CardActiveLoan } from '../../overview/components/CardActiveLoan.js';
import { ConfirmPassModal } from '../../../../../js/components/modal/ConfirmPassModal.js';
import { capitalize } from '../../../../../../global/js/utils/stringUtils.js';
import {
  numberToCurrency,
  numberToPercent,
  formatDate,
} from '../../../../../../global/js/utils/formatters.js';
import { handleIconDark } from '../../../../../../global/js/utils/themeUtils.js';

/**
 * @typedef {object} LoanRequestOpenedData
 * @property {string} id
 * @property {'personal'|'auto'|'mortgage'} modality
 * @property {string} creditor
 * @property {string} date
 * @property {number} creditValue
 * @property {number} totalAmount
 * @property {number} installments
 * @property {number} installmentValue
 * @property {number} rate
 * @property {'pending'|'rejected'|'approved'} status
 */

/**
 * Represents a card component specifically for displaying Loan Request Opened.
 */
export class CardLoanRequestOpened extends CardActiveLoan {
  /**
   * @type {LoanRequestOpenedData}
   */
  get _apiData() {
    return super._apiData;
  }

  get _cssClass() {
    return `request-opened`;
  }

  get _itemsArray() {
    return [
      {
        label: 'Creditor',
        value: this._apiData.creditor,
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
    const modality = this._modalityMap[this._apiData.modality];
    const statusCssMap = {
      pending: 'span-pending',
      rejected: 'span-fail',
      approved: 'span-success',
    };
    const cssClass = statusCssMap[this._apiData.status];
    return `
        <div class="card-title">
          <img src="${modality.imgSrc}" alt="Modality" class="icon ${handleIconDark()}">
          <span>${modality.desc}</span>
        </div>
        <span class="span-status ${cssClass}">${capitalize(this._apiData.status)}</span>
        <span class="span-date">Started on ${formatDate(this._apiData.date)}</span>
        `;
  }

  get _footerTemplate() {
    return this._buttonsByStatus;
  }

  get _modalAction() {
    return this._apiData.status === 'pending' ? 'cancel' : 'confirm';
  }

  get _buttonsByStatus() {
    const cssClass = this._apiData.status === 'pending' ? 'btn-fail' : '';
    return `
      <button id="btn-${this._cssId}-${this._modalAction}" class="btn card-data__btn ${cssClass}">
         ${capitalize(this._modalAction)}
      </button>
     `;
  }

  _handleModal() {
    this._containerElement
      .querySelector(`#btn-${this._cssId}-${this._modalAction}`)
      .addEventListener('click', () => {
        new ConfirmPassModal();
      });
  }
}
