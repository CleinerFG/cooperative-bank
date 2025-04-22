import { Card } from '../components/cards/Card.js';
import { CardState } from '../components/cards/CardState.js';
import {
  AbstractGetterError,
  AbstractMethodError,
} from '../../../global/js/errors/AbstractErrors.js';

/**
 * @typedef {Object} EntityMap
 * @property {string} entity
 * @property {{name:string, entityType:string, CardClass:Card}[]} categories
 */

export class CardManager {
  /**@type {{string:Card}} */
  #cards = {};
  /** @type {CardState} */
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

  get _titleElement() {
    return this._containerElement.querySelector('.card-group__h2');
  }

  get #cardsContainerElement() {
    return this._containerElement.querySelector('.cards');
  }

  get #template() {
    return `
    <div class="card-group">
      ${this._dashboardTemplate}
      <h2 class="card-group__h2">${this._titleTemplate}</h2>
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
      const categories = this._entityMap.categories;
      for (let i = 0; i < categories.length; i++) {
        const cat = categories[i];
        this.#apiData[cat.name] = await this._fetchService(cat.name);
      }
    } catch (e) {
      this.#cardState.state = 'error';
      console.error(e);
    }
  }

  #initCards() {
    this._entityMap.categories.forEach(({ name, entityType, CardClass }) => {
      this.#cards[name] = this.#apiData[name].map((data, index) => {
        const params = {
          index: index,
          apiData: data,
          containerElement: this.#cardsContainerElement,
          category: name,
          entityType: entityType,
        };
        return new CardClass(params);
      });
    });
  }

  renderCards(category) {
    if (this.#cards[category].length) {
      this.#cardsContainerElement.innerHTML = '';
      this.#cards[category].forEach((card) => card.init());
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
