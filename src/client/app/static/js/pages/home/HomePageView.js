import { PageView } from '../../views/PageView.js';
import { capitalize } from '../../utils/stringUtils.js';
import { FinancialStatement } from './components/FinancialStatement.js';
import { CardLinkGroups } from './components/CardLinkGroups.js';
import { EventGroup } from './components/EventGroup.js';

/**
 * Represents the view for the homepage, including sections for financial statement, features, and events.
 *
 * @class
 * @extends PageView
 */
export class HomePageView extends PageView {
  /**
   * Returns an array of feature section names to be rendered.
   *
   * @protected
   * @type {string[]}
   */
  get _configFeatures() {
    return ['wallet', 'loan', 'investments'];
  }

  /**
   * Returns the HTML template for the Financial Statement section.
   *
   * @protected
   * @type {string}
   */
  get _templateStatement() {
    return `
    <section class="section statement">
      <h1 class="section__h1 statement__title">Financial Statement</h1>
      <div class="statement__container"></div>
    </section>
    `;
  }

  /**
   * Returns the HTML template for the Events section.
   *
   * @protected
   * @type {string}
   */
  get _templateEvents() {
    return `
    <section class="section events">
      <h2 class="section__h2">Events</h2>
    </section>
    `;
  }

  get _templateFeatures() {
    return this._configFeatures
      .map((sec) => this._buildTemplateFeature(sec))
      .join('');
  }

  get _pageTitle() {
    return 'home';
  }

  get _template() {
    return (
      this._templateStatement + this._templateFeatures + this._templateEvents
    );
  }

  /**
   * Builds an HTML section template for a given feature.
   *
   * @protected
   * @param {string} name The name of the feature section.
   * @returns {string} The HTML string.
   */
  _buildTemplateFeature(name) {
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
    // new EventGroup(false);
    console.log('runnig');
  }
}
