import Page from '../../../../../global/js/core/Page.js';
import { translate } from '../../../../../global/js/i18n/Translator.js';
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
        <h1 class="section-h1">${translate('activeRequests')}</h1>
        <div class="info-block">
          <img class="icon ${handleIconDark()}" src="${ASSETS_ROUTE}/icons/icon-info.svg"/>
          <p class="info-text">${translate('requestsInfo')}</p>
      </div>
      </section>
    `;
  }

  get _pageTitle() {
    return translate('loanRequests');
  }

  async _initComponents() {
    const LoanRequestManagerModule = await import(
      './components/LoanRequestManager.js'
    );
    new LoanRequestManagerModule.default();
  }
}
