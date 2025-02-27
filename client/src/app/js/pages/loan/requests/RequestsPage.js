import Page from '../../../../../global/js/core/Page.js';

export default class RequestsPage extends Page {
  constructor() {
    super();
    this._init();
    this._initComponents();
  }

  get _template() {
    return `
      <section class="section loans">
        <h1 class="section-h1">Active Requests</h1>
      </section>
    `;
  }

  get _pageTitle() {
    return 'loan requests';
  }

  async _initComponents() {
    const LoanRequestManagerModule = await import(
      './components/LoanRequestManager.js'
    );
    new LoanRequestManagerModule.default();
  }
}
