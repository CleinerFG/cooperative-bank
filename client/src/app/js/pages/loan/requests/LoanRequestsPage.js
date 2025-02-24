import { Page } from '../../../../../global/js/core/Page.js';

export default class LoanRequestsPage extends Page {
  constructor() {
    super();
    this._init();
    this._setup();
    this._initComponents();
  }

  get _introductionTemplate() {
    return `
    <section class="section">
      <h1 class="section-h1">Requests</h1>
      <p class="info-text">To obtain a loan, the creditor needs to access their own account and accept the loan request.
      </p>
      <div class="new-request"></div>
    </section>
    `;
  }

  get _requestsTemplate() {
    return `
    <section class="section loans">
      <h2 class="section-h2">Active Requests</h2>
    </section>
    `;
  }

  get _template() {
    return `
    ${this._introductionTemplate}
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
    const form = new LoanRequestFormCtrlModule.default();
    // const res = await form.getResponse();
    // console.log(res);
  }
}
