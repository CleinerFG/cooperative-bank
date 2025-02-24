import { Page } from '../../../../global/js/core/Page.js';
import { ASSETS_ROUTE } from '../../constants/routes.js';
import { featureGroups } from './components/FeatureGroups.js';
import appRouter from '../../core/appRouter.js';
import { handleIconDark } from '../../../../global/js/utils/themeUtils.js';

export default class HomePage extends Page {
  constructor() {
    super();
    this._init();
    this._setup();
    this._initComponents();
  }

  get _statementTemplate() {
    const icon = `${ASSETS_ROUTE}/icons/icon-visibility-off.svg`;
    return `
    <section class="section statement">
      <h1 class="section-h1">Financial Statement</h1>
      <div class="statement-balance">
        <span class="balance-label">Balance</span>
        <div class="balance-container">
          <span id="balance-value" class="balance-value skelon">R$ * * * * * *</span>
          <button id="balance-visibility-btn" class="btn-unset btn-icon" data-visibility="off">
            <img id="balance-visibility-icon" class="icon ${handleIconDark()}" src="${icon}" alt="Closed eye">
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
    const AccountBalanceModule = await import('./components/AccountBalance.js');
    new AccountBalanceModule.default();
  }

  _setup() {
    this._handleRoutes(appRouter, '.feature-cards [data-link]');
  }
}
