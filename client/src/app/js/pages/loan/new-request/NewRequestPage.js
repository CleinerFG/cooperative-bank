import { Page } from '../../../../../global/js/core/Page.js';

export default class NewRequestPage extends Page {
  constructor() {
    super();
    this._init();
    this._setup();
  }

  get _template() {
    return `
      <section class="section">
        <h1 class="section-h1">Take Out a Loan</h1>
        <p class="info-text">To obtain a loan, the creditor needs to access their own account and accept the loan request.
        </p>
        <div class="new-request"></div>
      </section>
    `;
  }

  get _pageTitle() {
    return 'New Loan Request';
  }

  async _setup() {
    const LoanRequestFormCtrlModule = await import('./LoanRequestFormCtrl.js');
    const form = new LoanRequestFormCtrlModule.default();
    // const res = await form.getResponse();
    // console.log(res);
  }
}
