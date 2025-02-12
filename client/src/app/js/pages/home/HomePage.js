import { Page } from '../../../../global/js/core/Page.js';
import { ASSETS_ROUTE } from '../../constants/routes.js';
import { featureGroups } from './components/FeatureGroups.js';
import appRouter from '../../core/appRouter.js';
import { handleIconDark } from '../../../../global/js/utils/themeUtils.js';

export default class HomePage extends Page {
  get _statementTemplate() {
    const imgSrc = `${ASSETS_ROUTE}/icons/icon-visibility-off.svg`;
    return `
    <section class="section statement">
      <h1 class="section-h1">Financial Statement</h1>
      <div class="statement-amount">
        <span>Account Amount</span>
        <div class="amount-container">
          <span id="span-amount" class="span-amount skelon">R$ * * * * * *</span>
          <button id="amount-visibility-btn" class="btn-unset btn-icon" data-visibility="off">
            <img id="amount-visibility-icon" class="icon ${handleIconDark()}" src="${imgSrc}" alt="Closed eye">
          </button>
        </div>
      </div>
    </section>
    `;
  }

  get _featureGroupsTemplate() {
    return featureGroups.template;
  }

  get _pageTitle() {
    return 'home';
  }

  get _template() {
    return this._statementTemplate + this._featureGroupsTemplate;
  }

  async _initComponents() {
    const AccountAmountModule = await import('./components/AccountAmount.js');
    new AccountAmountModule.default();
  }

  _setup() {
    this._handleRoutes(appRouter, '.feature-cards [data-link]');
  }
}
