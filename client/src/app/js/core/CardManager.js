import { Card } from '../components/Card.js';
import { CardState } from '../components/cards/CardState.js';
import { simulateWait } from '../../../global/js/utils/tests.js';
import {
  AbstractGetterError,
  AbstractMethodError,
} from '../../../global/js/errors/AbstractErrors.js';
import { ASSETS_ROUTE } from '../constants/routes.js';
import { handleIconDark } from '../../../global/js/utils/themeUtils.js';

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

/**
 * Manages the functionality of a group of Card
 * with filters, state management and rendering options.
 */
export class CardManager {
  _cards = {};

  /**
   * @type {CardState}
   */
  #cardStateInstance;

  #data = {};

  _ICON_FILTER_ID = `icon-filter-${this._entityMap.entity}`;

  constructor() {
    this._init();
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

  /**
   * @type {(category: string) => Promise<any>[]}
   */
  async _fetchByCategory() {
    throw new AbstractMethodError('_fetchByCategory');
  }

  /**
   * @type {number}
   */
  get _cardSkelonRows() {
    throw new AbstractGetterError('_cardSkelonRows');
  }

  _setCustomComponents() {
    return '';
  }

  get #cardsContainerElement() {
    return this._containerElement.querySelector('.cards');
  }

  get _useDateFilter() {
    return true;
  }

  get #dateFilterTemplate() {
    if (this._useDateFilter) {
      const imgSrc = `${ASSETS_ROUTE}/icons/icon-filter.svg`;
      return `
      <div class="dashboard-filter">
        <div class="inputs-container">
          <div class="inp-group">
            <label for="start-date-filter-${this._entityMap.entity}">Start date</label>
            <input id="start-date-filter-${this._entityMap.entity}" class="inp inp-date" type="date">
          </div>
          <div class="inp-group">
            <label for="end-date-filter-${this._entityMap.entity}">End date</label>
            <input id="end-date-filter-${this._entityMap.entity}" class="inp inp-date" type="date">
          </div>
        </div>
        <button class="btn-unset btn-filter">
          <img id="${this._ICON_FILTER_ID}" class="icon filter-icon ${handleIconDark()}" src="${imgSrc}" alt="Filter Icon">
        </button>
      </div>
      `;
    }
    return '';
  }

  get #template() {
    return `
    <div class="card-group">
      <div class="dashboard-container">
        ${this.#dateFilterTemplate}
        ${this._setCustomComponents()}
      </div>
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
      await simulateWait();
      const promises = this._entityMap.categories.map(async ({ name }) => {
        this.#data[name] = await this._fetchByCategory(name);
      });
      await Promise.all(promises);
      console.log(this.#data);
    } catch (e) {
      this.#cardState.state = 'error';
      console.error(e);
    }
  }

  #initCards() {
    this._entityMap.categories.forEach(({ name, CardClass }) => {
      this._cards[name] = this.#data[name].map((data, index) => {
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
