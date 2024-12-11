import { PageView } from '../../../../js/views/PageView.js';
import { capitalize } from '../../../../js/utils/stringUtils.js';

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
  get _features() {
    return ['wallet', 'loans', 'investments'];
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
  get _templateEventsSection() {
    return `
    <section class="section events">
      <h2 class="section__h2">Events</h2>
    </section>
    `;
  }

  /**
   * Builds an HTML section template for a given feature.
   *
   * @protected
   * @param {string} name The name of the feature section.
   * @returns {string} The HTML string.
   */
  _buildFeatureSection(name) {
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

  _pageContent() {
    const templateFeatures = this._features
      .map((sec) => this._buildFeatureSection(sec))
      .join('');
    return (
      this._templateStatement + templateFeatures + this._templateEventsSection
    );
  }
}
