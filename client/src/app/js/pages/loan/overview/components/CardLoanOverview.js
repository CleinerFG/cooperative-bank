import '../../../../types/loanType.js';

import {
  formatDate,
  numberToCurrency,
} from '../../../../../../global/js/utils/formatters.js';
import { Card } from '../../../../components/Card.js';
import { ASSETS_ROUTE } from '../../../../constants/routes.js';
import { handleIconDark } from '../../../../../../global/js/utils/themeUtils.js';
import { capitalize } from '../../../../../../global/js/utils/stringUtils.js';
import appRouter from '../../../../core/appRouter.js';
import { PAGE_ROUTES } from '../../../../constants/routes.js';

export class CardLoanOverview extends Card {
  get _modalityIcon() {
    return {
      personal: ASSETS_ROUTE + '/icons/icon-credit-card.svg',
      auto: ASSETS_ROUTE + '/icons/icon-car.svg',
      mortgage: ASSETS_ROUTE + '/icons/icon-house.svg',
    };
  }

  get _redirectPageRoute() {
    return `${PAGE_ROUTES.loan.detailsOverview}?id=${this._apiData.id}&category=${this._category}`;
  }

  /**
   * @type {LoanOverviewData}
   */
  get _apiData() {
    return super._apiData;
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
      <img src="${this._modalityIcon[this._apiData.modality]}" alt="Modality" class="icon ${handleIconDark()}">
      <span class="span-title">${capitalize(this._apiData.modality)}</span>
      </div>
      <span class="span-date">Started on ${formatDate(this._apiData.date)}</span>
    `;
  }

  get _footerTemplate() {
    return `
     <button id="btn-${this._id}" class="btn">
        See details
      </button>
    `;
  }

  _setListeners() {
    this._containerElement
      .querySelector(`#btn-${this._id}`)
      .addEventListener('click', () => {
        appRouter.navigateTo(this._redirectPageRoute);
      });
  }
}
