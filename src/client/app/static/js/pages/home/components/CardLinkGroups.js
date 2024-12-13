import { CardLink } from './CardLink.js';
import { AssetManager } from '../../../core/AssetManager.js';

/**
 * Controller for managing groups of card links organized into sections.
 *
 * @class
 */
export class CardLinkGroups {
  /**
   * Parameters for configuring sections.
   * Each section contains a name, a container selector, and items.
   *
   * @private
   * @type {Array<Object>}
   */

  #featuresConfig = [
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

  /**
   * Initializes the controller by creating and initializing features.
   */
  constructor() {
    this.#init();
  }

  #createFeatures() {
    this.#featuresConfig.forEach((feature) => {
      setSectionForCardsLink(feature.containerElement, feature.cardsName);
    });
  }

  /**
   * Initializes the controller by creating and initializing all features.
   *
   * @private
   */
  #init() {
    this.#createFeatures();
  }
}

function setCardLink(name, container) {
  const card = new CardLink(container, name);
  card.render();
  AssetManager.updateIcon(`#card-icon-${name}`, `icon-${name}.svg`);
}

function setSectionForCardsLink(container, cardsName) {
  cardsName.map((cardName) => setCardLink(cardName, container));
}
