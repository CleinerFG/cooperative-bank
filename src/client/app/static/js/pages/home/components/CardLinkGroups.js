import { CardLink } from './CardLink.js';

/**
 * Controller for managing groups of card links organized into sections.
 */
export class CardLinkGroups {
  #features = [
    {
      name: 'wallet',
      containerElement: document.querySelector('.wallet__cards'),
      cardsName: ['transfer', 'extract'],
    },
    {
      name: 'loan',
      containerElement: document.querySelector('.loan__cards'),
      cardsName: ['requests', 'payments', 'overview', 'timeline'],
    },
    {
      name: 'investments',
      containerElement: document.querySelector('.investments__cards'),
      cardsName: ['all', 'reports'],
    },
  ];

  constructor() {
    this.#init();
  }

  #handleCardLinksOnFeatures({ containerElement, featureName, cardsName }) {
    const setCard = (cardName) =>
      new CardLink(containerElement, featureName, cardName);
    cardsName.forEach(setCard);
  }

  #init() {
    this.#features.forEach(this.#handleCardLinksOnFeatures);
  }
}
