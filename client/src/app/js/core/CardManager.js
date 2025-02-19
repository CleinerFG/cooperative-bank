import { Card } from '../components/Card.js';
import { CardState } from '../components/cards/CardState.js';
import { simulateWait } from '../../../global/js/utils/tests.js';
import {
  AbstractGetterError,
  AbstractMethodError,
} from '../../../global/js/errors/AbstractErrors.js';

/**
 * @typedef {Object} EntityMap
 * @property {string} entity
 * @property {CategoryConfig[]} categories
 */

/**
 * @typedef {Object} CategoryConfig
 * @property {string} name
 * @property {Card} CardClass
 */

export class CardManager {
  _cards = {};
  /**
   * @type {CardState}
   */
  #cardStateInstance;
  #apiData = {};

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

  /**
   * @type {number}
   */
  get _cardSkelonRows() {
    throw new AbstractGetterError('_cardSkelonRows');
  }

  get _dashboardTemplate() {
    return '';
  }

  get _titleTemplate() {
    throw new AbstractGetterError('_titleTemplate');
  }

  /**
   * @type {() => Promise<any>[]}
   */
  async _fetchService() {
    throw new AbstractMethodError('_fetchService');
  }

  get #cardsContainerElement() {
    return this._containerElement.querySelector('.cards');
  }

  get #template() {
    return `
    <div class="card-group">
      ${this._dashboardTemplate}
      ${this._titleTemplate}
      <div class="cards">
      </div>
    </div>
    `;
  }

  get #cardState() {
    if (!this.#cardStateInstance) {
      this.#cardStateInstance = new CardState(
        this.#cardsContainerElement,
        this._entityMap.entity,
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
      await simulateWait(2);
      const promises = this._entityMap.categories.map(async ({ name }) => {
        this.#apiData[name] = await this._fetchService(name);
      });
      await Promise.all(promises);
    } catch (e) {
      this.#cardState.state = 'error';
      console.error(e);
    }
  }

  #initCards() {
    this._entityMap.categories.forEach(({ name, CardClass }) => {
      this._cards[name] = this.#apiData[name].map((data, index) => {
        return new CardClass(index, data, this.#cardsContainerElement);
      });
    });
  }

  renderCards(category) {
    if (this._cards[category].length) {
      this.#cardsContainerElement.innerHTML = '';
      this._cards[category].forEach((card) => card.init());
    } else {
      this.#cardState.state = 'empty';
    }
  }

  async _init() {
    this.#render();
    await this.#fetchData();
    this.#initCards();
  }
}
