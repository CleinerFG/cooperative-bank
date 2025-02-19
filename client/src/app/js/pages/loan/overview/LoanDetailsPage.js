import '../../../types/loanDetailsType.js';
import { Page } from '../../../../../global/js/core/Page.js';
import loanService from '../../../services/LoanService.js';
import { ProgressBar } from './components/progressBar.js';
import { formatDate } from '../../../../../global/js/utils/formatters.js';
import { simulateWait } from '../../../../../global/js/utils/tests.js';
import { ASSETS_ROUTE } from '../../../constants/routes.js';
import { capitalize } from '../../../../../global/js/utils/stringUtils.js';

export default class LoanDetailsPage extends Page {
  /**
   * @type {LoanDetailsData}
   */
  _apiData;

  get _infoItemsData() {
    return [
      {
        label: 'modality',
        value: this._apiData?.modality,
        img: 'icon-bank.svg',
      },
      {
        label: 'person',
        value: this._apiData?.creditor || this._apiData?.debtor,
        img: 'icon-person.svg',
      },
      {
        label: 'credit value',
        value: this._apiData?.creditValue,
        img: 'icon-money.svg',
      },
      {
        label: 'interest rate',
        value: this._apiData?.rate,
        img: 'icon-percent.svg',
      },
      {
        label: 'total amount',
        value: this._apiData?.totalAmount,
        img: 'icon-monitoring.svg',
      },
      {
        label: 'outstanding balance',
        value: this._apiData?.outstandingBalance,
      },
      {
        label: 'installment value',
        value: this._apiData?.installmentValue,
      },
    ];
  }

  _buildInfoItemTemplate({ label, img }) {
    const hasImg = () => {
      if (img) return `<img class="icon" src="${ASSETS_ROUTE}/icons/${img}">`;
      return '';
    };
    return `
      <div class="info-item">
        ${hasImg()}
        <div class="info-item__container">
          <span class="info-label">${capitalize(label)}</span>
          <span id="" class="info-value skelon"></span>
        </div>
      </div>
    `;
  }

  _buildInfoItems() {
    return this._infoItemsData.map(this._buildInfoItemTemplate).join('');
  }

  get _detailsTemplate() {
    return `
    <section class="section">
      <h1 class="section-h1">Loan Details</h1>
      <div class="info-container loan-details">
        ${this._buildInfoItems()}
        <div class="payment-progress">Payment progress</div>
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
    `;
  }

  #removeSkelons() {
    document
      .querySelectorAll('.skelon')
      .forEach((el) => el.classList.remove('skelon'));
  }

  _displayData() {
    if (!this._apiData) return;
    document.getElementById('modality').textContent = this._apiData.modality;
    document.getElementById('date').textContent = formatDate(
      this._apiData.date
    );
    document.getElementById('creditor').textContent = this._apiData.creditor;
    document.getElementById('creditValue').textContent =
      this._apiData.creditValue;
    document.getElementById('totalAmount').textContent =
      this._apiData.totalAmount;
    document.getElementById('outstandingBalance').textContent =
      this._apiData.outstandingBalance;
    document.getElementById('installmentValue').textContent =
      this._apiData.installmentValue;
    this.#removeSkelons();
  }

  async _fetchData() {
    try {
      await simulateWait();
      this._apiData = await loanService.getLoanDetails(this._queryParams.id);
      console.log(this._apiData);
    } catch (e) {
      console.error(e);
    }
  }

  _initComponents() {
    const container = document.querySelector('.payment-progress');
    new ProgressBar(
      container,
      this._apiData.installments,
      this._apiData.paidInstallments
    );
  }

  async _setup() {
    await this._fetchData();
    // this._displayData();
  }
}
