import Page from '../../../../../global/js/core/Page.js';
import loanService from '../../../services/LoanService.js';
import { InfoDataDisplay } from '../../../components/common/InfoDataDisplay.js';
import LoanInstallmentManager from './components/LoanInstallmentManager.js';
import { simulateWait } from '../../../../../global/js/utils/tests.js';

export default class LoanDetailsPage extends Page {
  /**
   * @type {InfoDataDisplay}
   */
  #infoDataDisplayInstance;
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
    return 'Loan Details';
  }

  get _template() {
    return `
    <section class="section">
      <h1 class="section-h1">${this._pageTitle}</h1>
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
        label: 'contract date',
        apiDataProp: 'date',
        iconPath: iconBasePath + 'icon-calendar.svg',
        valueFormatter: 'date',
      },
      {
        label: 'modality',
        apiDataProp: 'modality',
        iconPath: iconBasePath + 'icon-modality.svg',
        valueFormatter: 'capitalize',
      },
      {
        label: this.#participantByCategory,
        apiDataProp: this.#participantByCategory,
        iconPath: iconBasePath + 'icon-person.svg',
        valueFormatter: 'capitalize',
      },
      {
        label: 'credit value',
        apiDataProp: 'creditValue',
        iconPath: iconBasePath + 'icon-value.svg',
        valueFormatter: 'currency',
      },
      {
        label: 'interest rate',
        apiDataProp: 'rate',
        iconPath: iconBasePath + 'icon-percent.svg',
        valueFormatter: 'percent',
      },
      {
        label: 'total amount',
        apiDataProp: 'totalAmount',
        iconPath: iconBasePath + 'icon-total.svg',
        valueFormatter: 'currency',
      },
      {
        label: 'installment value',
        apiDataProp: 'installmentValue',
        iconPath: iconBasePath + 'icon-installment.svg',
        valueFormatter: 'currency',
      },
      {
        label: 'outstanding balance',
        apiDataProp: 'outstandingBalance',
        iconPath: iconBasePath + 'icon-outstanding.svg',
        valueFormatter: 'currency',
      },
      {
        label: 'payment progress',
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
    this.#infoDataDisplayInstance = new InfoDataDisplay(params);
  }

  async #fetchData() {
    try {
      await simulateWait();
      this.#apiData = await loanService.getLoanDetails(this._queryParams.id);
      this.#infoDataDisplayInstance.apiData = this.#apiData;
    } catch (e) {
      console.error(e);
    }
  }

  async _setup() {
    this.#infoDataDisplayHandler();
    await this.#fetchData();
    new LoanInstallmentManager(this.#apiData.id, this._queryParams.category);
    this.#infoDataDisplayInstance.display();
  }
}
