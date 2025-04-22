import Page from '../../../../../global/js/core/Page.js';
import loanService from '../../../services/LoanService.js';
import { InfoDataDisplay } from '../../../components/common/InfoDataDisplay.js';
import LoanInstallmentManager from './components/LoanInstallmentManager.js';
import { titleCase } from '../../../../../global/js/utils/stringUtils.js';
import { translate } from '../../../../../global/js/i18n/Translator.js';

export default class LoanDetailsPage extends Page {
  /**
   * @type {InfoDataDisplay}
   */
  #infoDataDisplay;
  /**
   * @type {LoanDetailsData}
   */
  #apiData;

  constructor(queryParams) {
    super(queryParams);
    this._init();
    this._setup();
  }

  get _pageTitle() {
    return translate('loanDetails');
  }

  get _template() {
    return `
    <section class="section">
      <h1 class="section-h1">${titleCase(this._pageTitle)}</h1>
      <div class="info-container loan-details"></div>
      <div id="loan-installments"></div>
    </section>
    `;
  }

  /**
   * @type {LoanDetailsQueryParams}
   */
  get _queryParams() {
    return super._queryParams;
  }

  get #participantByCategory() {
    const category = this._queryParams.category;
    return category === 'payable' ? 'creditor' : 'debtor';
  }

  /**
   * @type {Item[]}
   */
  get #infoDataItems() {
    const iconBasePath = '/loan/details/';
    return [
      {
        label: translate('contractDate'),
        apiDataProp: 'date',
        iconPath: iconBasePath + 'icon-calendar.svg',
        valueFormatter: 'date',
      },
      {
        label: translate('modality'),
        apiDataProp: 'modality',
        iconPath: iconBasePath + 'icon-modality.svg',
        valueFormatter: 'capitalize',
      },
      {
        label: translate(this.#participantByCategory),
        apiDataProp: this.#participantByCategory,
        iconPath: iconBasePath + 'icon-person.svg',
        valueFormatter: 'capitalize',
      },
      {
        label: translate('creditValue'),
        apiDataProp: 'creditValue',
        iconPath: iconBasePath + 'icon-value.svg',
        valueFormatter: 'currency',
      },
      {
        label: translate('interestRatePm'),
        apiDataProp: 'rate',
        iconPath: iconBasePath + 'icon-percent.svg',
        valueFormatter: 'percent',
      },
      {
        label: translate('totalAmount'),
        apiDataProp: 'totalAmount',
        iconPath: iconBasePath + 'icon-total.svg',
        valueFormatter: 'currency',
      },
      {
        label: translate('installmentValue'),
        apiDataProp: 'installmentValue',
        iconPath: iconBasePath + 'icon-installment.svg',
        valueFormatter: 'currency',
      },
      {
        label: translate('outstandingBalance'),
        apiDataProp: 'outstandingBalance',
        iconPath: iconBasePath + 'icon-outstanding.svg',
        valueFormatter: 'currency',
      },
      {
        label: translate('payProgress'),
        type: 'progressBar',
        progressBar: {
          apiDataPropMax: 'installments',
          apiDataPropCurrent: 'paidInstallments',
        },
      },
    ];
  }

  #infoDataDisplayHandler() {
    const container = document.querySelector('.info-container.loan-details');
    const params = {
      containerElement: container,
      items: this.#infoDataItems,
    };
    this.#infoDataDisplay = new InfoDataDisplay(params);
  }

  async #fetchData() {
    try {
      const { category, id } = this._queryParams;
      this.#apiData = await loanService.getLoanDetails(category, id);
      this.#infoDataDisplay.apiData = this.#apiData;
    } catch (e) {
      console.error(e);
    }
  }

  async _setup() {
    this.#infoDataDisplayHandler();
    await this.#fetchData();
    new LoanInstallmentManager(this.#apiData.id, this._queryParams.category);
    this.#infoDataDisplay.display();
  }
}
