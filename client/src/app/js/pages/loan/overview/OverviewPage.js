import Page from '../../../../../global/js/core/Page.js';
import { translate } from '../../../../../global/js/i18n/Translator.js';
import { handleIconDark } from '../../../../../global/js/utils/themeUtils.js';
import { ASSETS_ROUTE } from '../../../constants/routes.js';

export default class OverviewPage extends Page {
  constructor() {
    super();
    this._init();
    this._initComponents();
  }

  get _introductionTemplate() {
    return `
    <section class="section loans">
      <h1 class="section-h1">${translate('overview')}</h1>
      <div class="info-block">
        <img class="icon ${handleIconDark()}" src="${ASSETS_ROUTE}/icons/icon-info.svg"/>
        <p class="info-text">${translate('overviewInfo')}</p>
      </div>
    </section>
    `;
  }

  /**
   * @note Total values - Must be implemented
   */
  get _totalReportTemplate() {
    return `
    <section class="section total-report">
      <h2 class="section-h2">Total Report</h2>
      <p class="info-text">Total to Pay: R$ 4.576,00</p>
      <p class="info-text">Total to Receive: R$ 15.454,68</p>
    </section>
    `;
  }

  get _pageTitle() {
    return 'overview';
  }

  get _template() {
    return `
    ${this._introductionTemplate}
    ${this._totalReportTemplate}
    `;
  }

  async _initComponents() {
    const LoanOverviewManagerModule = await import(
      './components/LoanOverviewManager.js'
    );
    new LoanOverviewManagerModule.default();
  }
}
