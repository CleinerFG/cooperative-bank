import { Page } from '../../../../../global/js/core/Page.js';

export default class LoanRequestsPage extends Page {
  get _newRequestTemplate() {
    return `
    <section class="section new-request">
      <h1 class="section-h1">Take Out a Loan</h1>
      <p class="info-text">To obtain a loan, the creditor needs to access their own account and accept the loan request.
      </p>
    </section>
    `;
  }

  get _requestsTemplate() {
    return `
    <section class="section loans">
      <h2 class="section-h2">Loan Requests</h2>
    </section>
    `;
  }

  get _template() {
    return `
    ${this._newRequestTemplate}
    ${this._requestsTemplate}
    `;
  }

  get _pageTitle() {
    return 'Loan Requests';
  }

  async _initComponents() {
    const LoanRequestManagerModule = await import(
      './components/LoanRequestManager.js'
    );
    new LoanRequestManagerModule.default();
  }

  async _setup() {
    const LoanRequestFormCtrlModule = await import(
      './components/LoanRequestFormCtrl.js'
    );
    new LoanRequestFormCtrlModule.default();
  }
}
