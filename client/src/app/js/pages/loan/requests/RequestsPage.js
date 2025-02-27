import Page from '../../../../../global/js/core/Page.js';
import { handleIconDark } from '../../../../../global/js/utils/themeUtils.js';
import { ASSETS_ROUTE } from '../../../constants/routes.js';

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
        <div class="info-block">
          <img class="icon ${handleIconDark()}" src="${ASSETS_ROUTE}/icons/icon-info.svg"/>
          <p class="info-text">Here you can check all open and received loan requests, along with their details.</p>
      </div>
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
