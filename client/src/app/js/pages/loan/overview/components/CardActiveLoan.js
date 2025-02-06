import {
  numberToCurrency,
  numberToPercent,
} from '../../../../../../global/js/utils/formatters.js';
import { Card } from '../../../../components/Card.js';
import { ASSETS_ROUTE } from '../../../../constants/routes.js';
import { handleIconDark } from '../../../../../../global/js/utils/themeUtils.js';

/**
 * @typedef {object} ActiveLoanData
 * @property {string} id
 * @property {'personal'|'auto'|'mortgage'} modality
 * @property {string} creditor
 * @property {string} debtor
 * @property {string} date
 * @property {number} creditValue
 * @property {number} totalAmount
 * @property {number} outstandingBalance
 * @property {number} installments
 * @property {number} installmentValue
 * @property {number} paidInstallments
 * @property {number} rate
 */

/**
 * Represents a card component specifically for displaying Active Loan.
 */
export class CardActiveLoan extends Card {
  get _modalityMap() {
    return {
      personal: {
        desc: 'Personal Credit',
        imgSrc: ASSETS_ROUTE + '/icons/icon-credit-card.svg',
      },
      auto: {
        desc: 'Auto Credit',
        imgSrc: ASSETS_ROUTE + '/icons/icon-car.svg',
      },
      mortgage: {
        desc: 'Mortgage Credit',
        imgSrc: ASSETS_ROUTE + '/icons/icon-house.svg',
      },
    };
  }

  /**
   * @type {ActiveLoanData}
   */
  get _apiData() {
    return super._apiData;
  }

  get _cssId() {
    return `active-loan-${this._index}`;
  }

  get _cssClass() {
    return `active-loan`;
  }

  get _itemsArray() {
    return [
      {
        label: this._apiData.creditor ? 'Creditor' : 'Debtor',
        value: this._apiData.creditor || this._apiData.debtor,
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
        label: 'Outstanding balance',
        value: numberToCurrency(this._apiData.outstandingBalance),
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
        label: 'Payment progress',
        value: `${this._apiData.paidInstallments} of ${this._apiData.installments} installments`,
      },
    ];
  }

  get _headerTemplate() {
    const modality = this._modalityMap[this._apiData.modality];
    console.log(modality);

    return `
      <div class="loan-modality">
      <img src="${modality.imgSrc}" alt="Modality" class="icon ${handleIconDark()}">
      <span>${modality.desc}</span>
      </div>
    `;
  }

  get _footerTemplate() {
    return `
     <button id="btn-active-loan-${this._apiData._index}" class="btn card-data__btn">
        Installments
      </button>
    `;
  }

  /**
   * Handles modal behavior.
   * In this case, it does not open a modal.
   * @note The modal for the cardActiveLoan is still to be built.
   */
  _handleModal() {
    // pass
  }
}
