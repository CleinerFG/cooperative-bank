import { Card } from '../components/Card.js';
import { CardState } from '../components/cards/CardState.js';
import { simulateWait } from '../../../global/js/utils/tests.js';
import { AbstractGetterError } from '../../../global/js/errors/AbstractErrors.js';

/**
 * @typedef {Object} EntityMap
 * @property {string} entity
 * @property {CategoryConfig[]} categories
 */

/**
 * @typedef {Object} CategoryConfig
 * @property {string} category
 * @property {Card} CardClass
 */

/**
 * Manages the functionality of a group of Card
 * with filters, state management and rendering options.
 */
export class CardManager {
  /**
   * @type {Card[]}
   */
  _cards;

  /**
   * @type {CardState}
   */
  #cardStateInstance;

  /**
   * @type {Object[]}
   */
  #data;

  constructor() {
    this.#init();
  }

  /**
   * @type {HTMLElement}
   */
  get _containerElement() {
    throw new AbstractGetterError('_containerElement');
  }

  /**
   * @type {EntityMap}
   */
  get _entityMap() {
    throw new AbstractGetterError('_entityCategoriesMap');
  }

  get _service() {
    throw new AbstractGetterError('_service');
  }

  /**
   * @type {number}
   */
  get _cardSkelonRows() {
    throw new AbstractGetterError('_cardSkelonRows');
  }

  get #cardsContainerElement() {
    return this._containerElement.querySelector('.cards');
  }

  get #template() {
    return `
    <div class="card-group">
      <div class="cards">
      </div>
    </div>
    `;
  }

  get #cardState() {
    if (!this.#cardStateInstance) {
      this.#cardStateInstance = new CardState(
        this.#cardsContainerElement,
        this._entity,
        this._cardSkelonRows
      );
    }
    return this.#cardStateInstance;
  }

  #render() {
    this._containerElement.insertAdjacentHTML('beforeend', this.#template);
  }

  async #fetchData() {
    this.#cardState.state = 'loading';
    try {
      await simulateWait();
      this._entityMap.categories.forEach(async ({ category }) => {
        this.#data[category] = await this._service.fetch(category);
      });
    } catch (e) {
      this.#cardState.state = 'error';
      console.error(e);
    }
  }

  #initCards() {
    this._entityMap.categories.forEach(({ category, CardClass }) => {
      this._cards[category] = this.#data[category].map((data, index) => {
        return new CardClass(index, data, this.#cardsContainerElement);
      });
    });
  }

  renderCards(category) {
    if (this.#data[category].length) {
      this.#cardsContainerElement.innerHTML = '';
    } else {
      this.#cardState.state = 'empty';
    }
  }

  async #init() {
    this.#render();
    await this.#fetchData()
    this.#initCards()
  }
}
