import('../../../css/pages/home.css')

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
      <div class="statement-container"></div>
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
    const [FinancialStatement, CardLinkGroups, EventGroup] = await Promise.all([
      import('./components/FinancialStatement.js'),
      import('./components/CardLinkGroups.js'),
      import('./components/EventGroup.js'),
    ]);

    new FinancialStatement.default();
    new CardLinkGroups.default();
    new EventGroup.default(false);
  }
}
