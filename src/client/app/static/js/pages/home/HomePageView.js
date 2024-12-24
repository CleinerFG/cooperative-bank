import { PageView } from '../../views/PageView.js';
import { capitalize } from '../../utils/stringUtils.js';
import { FinancialStatement } from './components/FinancialStatement.js';
import { CardLinkGroups } from './components/CardLinkGroups.js';
import { EventGroup } from './components/EventGroup.js';

/**
 * Represents the view for the homepage, including sections for financial statement, features, and events.
 */
export class HomePageView extends PageView {
  get _features() {
    return ['wallet', 'loan', 'investments'];
  }

  get _statementTemplate() {
    return `
    <section class="section statement">
      <h1 class="section__h1 statement__title">Financial Statement</h1>
      <div class="statement__container"></div>
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
    new FinancialStatement();
    new CardLinkGroups();
    new EventGroup(false);
  }
}
