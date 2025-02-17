import {
  formatDate,
  numberToCurrency,
} from '../../../../../../global/js/utils/formatters.js';
import { Card } from '../../../../components/Card.js';
import { ASSETS_ROUTE } from '../../../../constants/routes.js';
import { handleIconDark } from '../../../../../../global/js/utils/themeUtils.js';
import { capitalize } from '../../../../../../global/js/utils/stringUtils.js';

/**
 * @typedef {object} ActiveLoanData
 * @property {string} id
 * @property {'personal'|'auto'|'mortgage'} modality
 * @property {string} creditor
 * @property {string} debtor
 * @property {string} date
 * @property {number} creditValue
 */

/**
 * Represents a card component specifically for displaying Active Loan.
 */
export class CardActiveLoan extends Card {
  get _modalityImgSrc() {
    return {
      personal: ASSETS_ROUTE + '/icons/icon-credit-card.svg',
      auto: ASSETS_ROUTE + '/icons/icon-car.svg',
      mortgage: ASSETS_ROUTE + '/icons/icon-house.svg',
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
    ];
  }

  get _headerTemplate() {
    return `
      <div class="card-title">
      <img src="${this._modalityImgSrc[this._apiData.modality]}" alt="Modality" class="icon ${handleIconDark()}">
      <span>${capitalize(this._apiData.modality)}</span>
      </div>
      <span class="span-date">Started on ${formatDate(this._apiData.date)}</span>
    `;
  }

  get _footerTemplate() {
    return `
     <button id="btn-${this._cssId}" class="btn card-data__btn">
        See details
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
