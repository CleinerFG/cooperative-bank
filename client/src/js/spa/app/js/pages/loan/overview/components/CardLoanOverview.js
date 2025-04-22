import '../../../../types/loanType.js';

import {
  formatDate,
  numberToCurrency,
} from '../../../../../../global/js/utils/formatters.js';
import { Card } from '../../../../components/cards/Card.js';
import { ASSETS_ROUTE } from '../../../../constants/routes.js';
import { handleIconDark } from '../../../../../../global/js/utils/themeUtils.js';
import router from '../../../../../../global/js/core/Router.js';
import { PAGE_ROUTES } from '../../../../constants/routes.js';
import { translate } from '../../../../../../global/js/i18n/Translator.js';

export class CardLoanOverview extends Card {
  get _modalityIcon() {
    return {
      personal: ASSETS_ROUTE + '/icons/loan/icon-credit-card.svg',
      auto: ASSETS_ROUTE + '/icons/loan/icon-car.svg',
      mortgage: ASSETS_ROUTE + '/icons/loan/icon-house.svg',
    };
  }

  /**
   * @type {LoanOverviewData}
   */
  get _apiData() {
    return super._apiData;
  }

  get _redirectPageRoute() {
    return `${PAGE_ROUTES.loan.overviewDetails.path}?id=${this._apiData.id}&category=${this._category}`;
  }

  get _itemsArray() {
    return [
      {
        label: this._apiData.creditor
          ? translate('creditor')
          : translate('debtor'),
        value: this._apiData.creditor || this._apiData.debtor,
      },
      {
        label: translate('creditValue'),
        value: numberToCurrency(this._apiData.creditValue),
      },
    ];
  }

  get _headerTemplate() {
    return `
      <div class="card-title">
      <img src="${this._modalityIcon[this._apiData.modality]}" alt="Modality" class="icon ${handleIconDark()}">
      <span class="span-title">${translate(this._apiData.modality)}</span>
      </div>
      <span class="span-date">${translate('startOn')} ${formatDate(this._apiData.date)}</span>
    `;
  }

  get _footerTemplate() {
    return `
     <button id="btn-${this._id}" class="btn">
        ${translate('seeDetails')}
      </button>
    `;
  }

  _setListeners() {
    this._containerElement
      .querySelector(`#btn-${this._id}`)
      .addEventListener('click', () => {
        router.navigateTo(this._redirectPageRoute);
      });
  }

  init() {
    this._render();
    this._setListeners();
  }
}
