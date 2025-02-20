import '../../types/loanType.js';
import { Page } from '../../../../global/js/core/Page.js';
import { ASSETS_ROUTE } from '../../constants/routes.js';
import { simulateWait } from '../../../../global/js/utils/tests.js';
import {
  formatDate,
  numberToPercent,
  numberToCurrency,
} from '../../../../global/js/utils/formatters.js';
import {
  capitalize,
  toCamelCase,
} from '../../../../global/js/utils/stringUtils.js';
import { handleIconDark } from '../../../../global/js/utils/themeUtils.js';
import { AbstractMethodError } from '../../../../global/js/errors/AbstractErrors.js';

export default class LoanDetailsPage extends Page {
  /**
   * @type {LoanRequestDetailsData|LoanOverviewDetailsData}
   */
  _apiData;
  #infoItemsData = [
    {
      label: 'contract date',
      getValue: () => formatDate(this._apiData?.date),
      img: 'icon-calendar.svg',
    },
    {
      label: 'modality',
      getValue: () => capitalize(this._apiData?.modality),
      img: 'icon-bank.svg',
    },
    {
      label: this._participantByCategory,
      getValue: () =>
        capitalize(this._apiData?.creditor || this._apiData?.debtor),
      img: 'icon-person.svg',
    },
    {
      label: 'credit value',
      getValue: () => numberToCurrency(this._apiData?.creditValue),
      img: 'icon-money.svg',
    },
    {
      label: 'interest rate',
      getValue: () => numberToPercent(this._apiData?.rate),
      img: 'icon-percent.svg',
    },
    {
      label: 'total amount',
      getValue: () => numberToCurrency(this._apiData?.totalAmount),
      img: 'icon-monitoring.svg',
    },
    {
      label: 'installment value',
      getValue: () => numberToCurrency(this._apiData?.installmentValue),
    },
  ];

  constructor(queryParams) {
    super(queryParams);
    this._setCustomConfig();
    this._init();
    this._setup();
  }

  get _participantByCategory() {
    const queryCategory = this._queryParams.category;
    return queryCategory === 'payable' || queryCategory === 'opened'
      ? 'creditor'
      : 'debtor';
  }

  get _customTemplate() {
    return '';
  }

  /**
   * @returns {Promise<[]>}
   */
  _fetchService() {
    throw new AbstractMethodError('_fetchService');
  }

  /**
   *
   * @param {number} position
   * @param {{label: string, getValue: Function, img: string}} item
   */
  _addInfoItemData(position, item) {
    this.#infoItemsData.splice(position, 0, item);
  }

  _buildInfoItemTemplate({ label, img }) {
    const hasImg = () => {
      if (img)
        return `<img class="icon ${handleIconDark()}" src="${ASSETS_ROUTE}/icons/${img}">`;
      return '';
    };
    const valueId = toCamelCase(label);
    return `
      <div class="info-item">
        ${hasImg()}
        <div class="info-item__container">
          <span class="info-label">${capitalize(label)}</span>
          <span id="${valueId}" class="info-value skelon"></span>
        </div>
      </div>
    `;
  }

  _buildInfoItems() {
    return this.#infoItemsData.map(this._buildInfoItemTemplate).join('');
  }

  get _detailsTemplate() {
    return `
    <section class="section">
      <h1 class="section-h1">Loan Details</h1>
      <div class="info-container loan-details">
        ${this._buildInfoItems()}
        <div class="payment-progress"></div>
      </div>
    </section>
    `;
  }

  get _pageTitle() {
    return 'Loan Details';
  }

  get _template() {
    return `
    ${this._detailsTemplate}
    ${this._customTemplate}
    `;
  }

  #removeSkelons() {
    document
      .querySelectorAll('.skelon')
      .forEach((el) => el.classList.remove('skelon'));
  }

  _displayData() {
    if (!this._apiData) return;
    this.#infoItemsData.forEach((item) => {
      const valueId = toCamelCase(item.label);
      document.getElementById(valueId).textContent = item.getValue();
    });
    this.#removeSkelons();
  }

  async _fetchData() {
    try {
      await simulateWait();
      this._apiData = await this._fetchService(this._queryParams.id);
      console.log(this._apiData);
    } catch (e) {
      console.error(e);
    }
  }

  _initComponents() {}

  async _setup() {
    await this._fetchData();
    this._displayData();
    this._initComponents();
  }

  _setCustomConfig() {
    throw new AbstractMethodError('_setCustomConfig');
  }
}
