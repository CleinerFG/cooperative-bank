import Page from '../../../../../global/js/core/Page.js';
import { translate } from '../../../../../global/js/i18n/Translator.js';
import { handleIconDark } from '../../../../../global/js/utils/themeUtils.js';
import { ASSETS_ROUTE } from '../../../constants/routes.js';

export default class NewRequestPage extends Page {
  constructor() {
    super();
    this._init();
    this._setup();
  }

  get _template() {
    return `
      <section class="section">
        <h1 class="section-h1">${translate('takeOutLoan')}</h1>
        <div class="info-block">
          <img class="icon ${handleIconDark()}" src="${ASSETS_ROUTE}/icons/icon-info.svg"/>
          <p class="info-text">${translate('takeLoanInfo')}</p>
        </div>
        <div class="new-request"></div>
      </section>
    `;
  }

  get _pageTitle() {
    return translate('newLoanRequest');
  }

  async _setup() {
    const RequestFormCtrlModule = await import('./RequestFormCtrl.js');
    const form = new RequestFormCtrlModule.default();
    // const res = await form.getResponse();
    // console.log(res);
  }
}
