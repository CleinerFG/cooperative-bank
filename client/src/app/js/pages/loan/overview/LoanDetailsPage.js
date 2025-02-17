import { Page } from '../../../../../global/js/core/Page.js';
import loanService from '../../../services/LoanService.js';

export default class LoanDetailsPage extends Page {
  _apiData;

  get _detailsTemplate() {
    return `
    <section class="section">
      <h1 class="section-h1">Loan Details</h1>
      modality: </br>
      creditor: </br>
      date: </br>
      creditValue: </br>
      totalAmount: </br>
      outstandingBalance: </br>
      installments: </br>
      installmentValue: </br>
      paidInstallments: </br>
      rate: </br>
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

  async _setup() {
    this._apiData = await loanService.getLoanDetails(this._queryParams.id);
    console.log(this._apiData);
  }
}
