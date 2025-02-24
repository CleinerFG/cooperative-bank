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
    const balanceIcon = `${ASSETS_ROUTE}/icons/icon-visibility-off.svg`;
    const brandIcon = `${ASSETS_ROUTE}/icons/icon-globe.svg`;
    return `
    <section class="section statement">
      <div class="brand-container">
        <h1 class="brand-name">Cooperative Bank</h1>
        <img class="icon ${handleIconDark()}" src="${brandIcon}" alt="Closed eye">
      </div>
      <div class="statement-balance">
        <span class="balance-label">Balance</span>
        <div class="balance-container">
          <span id="balance-value" class="balance-value skelon">R$ * * * * * *</span>
          <button id="balance-visibility-btn" class="btn-unset btn-icon" data-visibility="off">
            <img id="balance-visibility-icon" class="icon ${handleIconDark()}" src="${balanceIcon}" alt="Closed eye">
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
