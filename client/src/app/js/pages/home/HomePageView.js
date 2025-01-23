import('../../../css/pages/home.css');

import { PageView } from '../../../../global/js/views/PageView.js';
import { capitalize } from '../../../../global/js/utils/stringUtils.js';

/**
 * Represents the view for the homepage, including sections for financial statement, features, and events.
 */
export default class HomePageView extends PageView {
  get _features() {
    return ['wallet', 'loan', 'investments'];
  }

  get _statementTemplate() {
    return `
    <section class="section statement">
      <h1 class="section__h1 statement__title">Financial Statement</h1>
      <div class="statement amount">
        <span>Account Amount</span>
        <div class="amount-container">
         <div class="statement__total"><span id="span-amount" class="span-amount">R$ * * * * * *</span></div>
          <button id="amount-visibility-btn" class="btn-unset visibility-btn" data-visibility="off">
          <img id="visibility-icon" class="icon visibility-icon" alt="Closed eye">
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

  get _featuresTemplate() {
    return this._features.map(this._buildFeatureTemplate).join('');
  }

  get _pageTitle() {
    return 'home';
  }

  get _template() {
    return (
      this._statementTemplate + this._featuresTemplate + this._eventsTemplate
    );
  }

  /**
   * @param {string} name
   */
  _buildFeatureTemplate(name) {
    return `
      <section class="section ${name}">
        <h2 class="section__h2">${capitalize(name)}</h2>
        <div class="cards-container">
          <div class="cards feature-cards ${name}__cards">
          </div>
        </div>
      </section>
      `;
  }

  async _initComponents() {
    const [AccountAmount, CardLinkGroups, EventGroup] = await Promise.all([
      import('./components/AccountAmount.js'),
      import('./components/CardLinkGroups.js'),
      import('./components/EventGroup.js'),
    ]);

    new AccountAmount.default();
    new CardLinkGroups.default();
    new EventGroup.default(false);
  }
}
