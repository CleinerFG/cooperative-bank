import { PageView } from '../../../../global/js/views/PageView.js';
import { ASSETS_ROUTE } from '../../constants/routes.js';
import { featureGroups } from './components/FeatureGroups.js';
import { appRouter } from '../../core/appRouter.js';
import { handleIconDark } from '../../../../global/js/utils/themeUtils.js';

/**
 * Represents the view for the homepage, including sections for financial statement, features, and events.
 */
export default class HomePageView extends PageView {
  get _statementTemplate() {
    const imgSrc = `${ASSETS_ROUTE}/icons/icon-visibility-off.svg`;
    return `
    <section class="section statement">
      <h1 class="section__h1 statement__title">Financial Statement</h1>
      <div class="statement amount">
        <span>Account Amount</span>
        <div class="amount-container">
         <div class="statement__total"><span id="span-amount" class="span-amount">R$ * * * * * *</span></div>
          <button id="amount-visibility-btn" class="btn-unset visibility-btn" data-visibility="off">
          <img id="amount-visibility-icon" class="icon visibility-icon ${handleIconDark()}" src="${imgSrc}" alt="Closed eye">
        </button>
        </div>
      </div>
    </section>
    `;
  }

  get _eventsTemplate() {
    return `
    <section class="section events">
      <h2 class="section__h2">Events</h2>
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
    return (
      this._statementTemplate +
      this._featureGroupsTemplate +
      this._eventsTemplate
    );
  }

  async _initComponents() {
    const [AccountAmountModule, EventGroupModule] = await Promise.all([
      import('./components/AccountAmount.js'),
      import('./components/EventGroup.js'),
    ]);

    new AccountAmountModule.default();
    new EventGroupModule.default(false);
  }

  _init() {
    super._init();
    this._handleRoutes(appRouter, '.feature-cards [data-link]');
  }
}
