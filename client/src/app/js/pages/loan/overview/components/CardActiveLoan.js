import {
  formatDate,
  numberToCurrency,
  numberToPercent,
} from '../../../../../../global/js/utils/formatters.js';
import { Card } from '../../../../components/Card.js';
import { ASSETS_ROUTE } from '../../../../constants/routes.js';
import { handleIconDark } from '../../../../../../global/js/utils/themeUtils.js';
import { ProgressBar } from './progressBar.js';

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
    ];
  }

  get _headerTemplate() {
    const modality = this._modalityMap[this._apiData.modality];
    return `
      <div class="card-title">
      <img src="${modality.imgSrc}" alt="Modality" class="icon ${handleIconDark()}">
      <span>${modality.desc}</span>
      </div>
      <span class="span-date">Started on ${formatDate(this._apiData.date)}</span>
    `;
  }

  get _footerTemplate() {
    return `
     <button id="btn-${this._cssId}" class="btn card-data__btn">
        Installments
      </button>
    `;
  }

  get _asideTemplate() {
    const item = {
      label: 'Payment progress',
      value: `${this._apiData.paidInstallments} of ${this._apiData.installments} installments`,
    };
    return `
      <div class="payment-progress">
        ${this._buildItemTemplate(item)}
      </div>
    `;
  }

  _initComponents() {
    const container = this._element.querySelector('.payment-progress');
    new ProgressBar(
      container,
      this._apiData.installments,
      this._apiData.paidInstallments
    );
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
