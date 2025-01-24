import { capitalize } from '../../../../../global/js/utils/stringUtils.js';
import { CardLink } from './CardLink.js';

export class FeatureGroups {
  #groups;

  /**
   * @param {import('../HomePageView.js').FeatureGroup[]} groups
   */
  constructor(groups) {
    this.#groups = groups;
  }

  /**
   * @param {string} groupName
   * @param {string[]} features
   */
  _buildFeatureCardsTemplate(groupName, features) {
    return features
      .map((feature) => {
        const card = new CardLink(feature, groupName);
        return card.template;
      })
      .join('');
  }

  /**
   * @param {string} groupName
   * @param {string[]} features
   */
  _buildGroupTemplate({ groupName, features }) {
    return `
    <section class="section ${groupName}">
        <h2 class="section__h2">${capitalize(groupName)}</h2>
        <div class="cards-container">
          <div class="cards feature-cards ${groupName}__cards">
            ${this._buildFeatureCardsTemplate(groupName, features)}
          </div>
        </div>
      </section>
    `;
  }

  get template() {
    return this.#groups
      .map((group) => this._buildGroupTemplate(group))
      .join('');
  }
}
