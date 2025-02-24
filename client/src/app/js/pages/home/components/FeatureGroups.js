import { capitalize } from '../../../../../global/js/utils/stringUtils.js';
import { CardLink } from './CardLink.js';

class FeatureGroups {
  #groups = [
    {
      groupName: 'wallet',
      features: ['transfer', 'extract'],
      featureCards: [],
    },
    {
      groupName: 'loan',
      features: ['new-request', 'requests', 'overview', 'timeline'],
      featureCards: [],
    },
    {
      groupName: 'investment',
      features: ['search', 'reports'],
      featureCards: [],
    },
  ];

  constructor() {
    this.#populateFeatureCards();
  }

  get groups() {
    return this.#groups;
  }

  #populateFeatureCards() {
    this.#groups = this.#groups.map((group) => {
      const featureCards = group.features.map(
        (feature) => new CardLink(feature, group.groupName)
      );
      return { ...group, featureCards };
    });
  }

  /**
   * @param {CardLink[]} featureCards
   */
  #buildFeatureCardsTemplate(featureCards) {
    return featureCards.map((card) => card.template).join('');
  }

  /**
   * @param {string} groupName
   * @param {CardLink[]} featureCards
   */
  #buildGroupTemplate({ groupName, featureCards }) {
    return `
    <section class="section ${groupName}">
        <h2 class="section-h2">${capitalize(groupName)}</h2>
        <div class="cards-container">
          <div class="cards feature-cards ${groupName}__cards">
            ${this.#buildFeatureCardsTemplate(featureCards)}
          </div>
        </div>
      </section>
    `;
  }

  get template() {
    return this.#groups
      .map((group) => this.#buildGroupTemplate(group))
      .join('');
  }
}

export const featureGroups = new FeatureGroups();
