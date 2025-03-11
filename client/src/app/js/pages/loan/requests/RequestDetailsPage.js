import Page from '../../../../../global/js/core/Page.js';
import loanService from '../../../services/LoanService.js';
import { InfoDataDisplay } from '../../../components/common/InfoDataDisplay.js';
import { titleCase } from '../../../../../global/js/utils/stringUtils.js';
import { translate } from '../../../../../global/js/i18n/Translator.js';

export default class RequestDetailsPage extends Page {
  /**
   * @type {InfoDataDisplay}
   */
  #infoDataDisplay;
  /**
   * @type {RequestDetailsData}
   */
  #apiData;

  constructor(queryParams) {
    super(queryParams);
    this._init();
    this._setup();
  }

  get _pageTitle() {
    return translate('requestDetails');
  }

  get _template() {
    return `
    <section class="section">
      <h1 class="section-h1">${titleCase(this._pageTitle)}</h1>
      <div class="info-container request-details"></div>
    </section>
    `;
  }

  /**
   * @type {RequestDetailsQueryParams}
   */
  get _queryParams() {
    return super._queryParams;
  }

  get #participantByCategory() {
    const category = this._queryParams.category;
    return category === 'open' ? 'creditor' : 'debtor';
  }

  /**
   * @type {Item[]}
   */
  get #infoDataItems() {
    const iconBasePath = '/loan/details/';
    return [
      {
        label: translate('status'),
        apiDataProp: 'status',
        iconState: {
          pending: 'loan/details/icon-pending.svg',
          accepted: 'loan/details/icon-accepted.svg',
          rejected: 'loan/details/icon-rejected.svg',
        },
        valueFormatter: 'capitalize',
      },
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
    ];
  }

  #infoDataDisplayHandler() {
    const container = document.querySelector('.info-container.request-details');
    const params = {
      containerElement: container,
      items: this.#infoDataItems,
    };
    this.#infoDataDisplay = new InfoDataDisplay(params);
  }

  async #fetchData() {
    try {
      const { category, id } = this._queryParams;
      this.#apiData = await loanService.getRequestDetails(category, id);
      this.#infoDataDisplay.apiData = this.#apiData;
    } catch (e) {
      console.error(e);
    }
  }

  async _setup() {
    this.#infoDataDisplayHandler();
    await this.#fetchData();
    this.#infoDataDisplay.display();
  }
}
