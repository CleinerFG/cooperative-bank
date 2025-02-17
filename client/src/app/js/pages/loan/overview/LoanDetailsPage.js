import { Page } from '../../../../../global/js/core/Page.js';
import loanService from '../../../services/LoanService.js';
import { formatDate } from '../../../../../global/js/utils/formatters.js';
import { simulateWait } from '../../../../../global/js/utils/tests.js';

export default class LoanDetailsPage extends Page {
  _apiData;

  get _detailsTemplate() {
    return `
    <section class="section">
      <h1 class="section-h1">Loan Details</h1>
      <div class="info-container">
        <div class="info-item">
          <span class="info-label">Modality</span>
          <span id="modality" class="info-value skelon"></span>
        </div>
        <div class="info-item">
          <span class="info-label">Date</span>
          <span id="date" class="info-value skelon"></span>
        </div>
        <div class="info-item">
          <span class="info-label">Creditor</span>
          <span id="creditor" class="info-value skelon"></span>
        </div>
        <div class="info-item">
          <span class="info-label">Credit value</span>
          <span id="creditValue" class="info-value skelon"></span>
        </div>
        <div class="info-item">
          <span class="info-label">Total amount</span>
          <span id="totalAmount" class="info-value skelon"></span>
        </div>
        <div class="info-item">
          <span class="info-label">Outstanding balance</span>
          <span id="outstandingBalance" class="info-value skelon"></span>
        </div>
        <div class="info-item">
          <span class="info-label">Installment value</span>
          <span id="installmentValue" class="info-value skelon"></span>
        </div>
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
    } catch (e) {
      console.error(e);
    }
  }

  async _setup() {
    await this._fetchData();
    this._displayData();
  }
}
