import loanService from '../../../services/LoanService.js';
import { ProgressBar } from './components/progressBar.js';
import LoanInstallmentManager from './components/LoanInstallmentManager.js';
import { Page } from '../../../../../global/js/core/Page.js';
import { InfoDataDisplay } from '../../../components/common/InfoDataDisplay.js';
import { simulateWait } from '../../../../../global/js/utils/tests.js';

export default class LoanDetaislPage extends Page {
  /**
   * @type {InfoDataDisplay}
   */
  #infoDataDisplayInstance;

  constructor(queryParams) {
    super(queryParams);
    this._init();
    this._initComponents();
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
      },
      {
        label: this.#participantByCategory,
        apiDataProp: this.#participantByCategory,
        iconPath: iconBasePath + 'icon-person.svg',
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

  _initComponents() {
    this.#infoDataDisplayHandler();
  }

  async _fetchData() {
    try {
      await simulateWait();
      const data = await loanService.getLoanOverviewDetails(
        this._queryParams.id
      );
      this.#infoDataDisplayInstance.apiData = data;
    } catch (e) {
      console.error(e);
    }
  }

  async _setup() {
    await this._fetchData();
    this.#infoDataDisplayInstance.display();
  }

  // _paymentProgressHandler() {
  //   const container = document.querySelector('.payment-progress');
  //   new ProgressBar(
  //     container,
  //     'payment progress',
  //     this._apiData.installments,
  //     this._apiData.paidInstallments
  //   );
  // }

  // _initComponents() {
  //   this._paymentProgressHandler();
  //   new LoanInstallmentManager(this._apiData.id);
  // }
}
