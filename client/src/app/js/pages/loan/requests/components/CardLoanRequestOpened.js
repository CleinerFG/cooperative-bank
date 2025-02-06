import { CardActiveLoan } from '../../overview/components/CardActiveLoan.js';
import { ConfirmPassModal } from '../../../../../js/components/modal/ConfirmPassModal.js';
import { capitalize } from '../../../../../../global/js/utils/stringUtils.js';
import {
  numberToCurrency,
  numberToPercent,
} from '../../../../../../global/js/utils/formatters.js';
import { handleIconDark } from '../../../../../../global/js/utils/themeUtils.js';
import { ASSETS_ROUTE } from '../../../../constants/routes.js';

/**
 * @typedef {object} LoanRequestOpenedData
 * @property {string} id
 * @property {'personal'|'auto'|'mortgage'} modality
 * @property {string} creditor
 * @property {string} debtor
 * @property {string} date
 * @property {number} creditValue
 * @property {number} totalAmount
 * @property {number} installments
 * @property {number} installmentValue
 * @property {number} rate
 * @property {'rejected'|'pending'} status
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

  get _cssId() {
    return `loan-request-${this._index}`;
  }

  get _cssClass() {
    return `loan-request`;
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
    const cssClass =
      this._apiData.status === 'pending' ? 'span-pending' : 'span-fail';
    return `
        <div class="loan-modality">
          <img src="${modality.imgSrc}" alt="Modality" class="icon ${handleIconDark()}">
          <span>${modality.desc}</span>
        </div>
        <span class="${cssClass}">${capitalize(this._apiData.status)}</span>
        `;
  }

  get _footerTemplate() {
    return this._buttonsByStatus;
  }

  get _buttonsByStatus() {
    const action = this._apiData.status === 'ending' ? 'Cancel' : 'Confirm';
    const cssClass = this._apiData.status === 'pending' ? 'btn-fail' : '';
    return `
      <button id="btn-${action}-${this._index}" class="btn card-data__btn ${cssClass}">
         ${action}
      </button>
     `;
  }

  _handleModal() {
    // const action = this._apiData.status === 'pending' ? 'cancel' : 'confirm';
    // document
    //   .querySelector(`#btn-${action}-${this._index}`)
    //   .addEventListener('click', () => {
    //     new ConfirmPassModal();
    //   });
  }
}
