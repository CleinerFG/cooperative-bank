import { ASSETS_ROUTE } from '../constants/routes.js';
import { Card } from './Card.js';
import { CardState } from './cards/CardState.js';
import { ApiService } from '../../../global/js/service/ApiService.js';
import { capitalize } from '../../../global/js/utils/stringUtils.js';
import { handleIconDark } from '../../../global/js/utils/themeUtils.js';
import { simulateWait } from '../../../global/js/utils/tests.js';
import { AbstractGetterError } from '../../../global/js/errors/AbstractErrors.js';

/**
 * @typedef {Object} EntityCategoryConfig
 * @property {string} name
 * @property {Card} CardClass
 * @property {string} endpoint
 */

/**
 * Manages the functionality of a group of Card
 * with filters, state management and rendering options.
 */
export class CardManager {
  /**
   * @type {Card[]}
   */
  #cards;

  /**
   * @type {CardState}
   */
  #cardState;

  /**
   * @type {Object[]}
   */
  #apiData;

  /**
   * @type {EntityCategoryConfig}
   */
  #activeCategory;

  /**
   * @type {boolean}
   */
  #useDataFilter;

  _ICON_FILTER_ID = `icon-filter-${this._entity}`;
  _FILTER_TYPE_1_ID = `${this._entityCategoriesMap[0].name}-${this._entity}-filter-1`;
  _FILTER_TYPE_2_ID = `${this._entityCategoriesMap[1].name}-${this._entity}-filter-2`;
  _ACTIVE_ENTITY_CATEGORY_ID = `active-category-${this._entity}`;

  /**
   * @param {boolean} useDataFilter
   */
  constructor(useDataFilter = true) {
    this.#activeCategory = this._entityCategoriesMap[0];
    this.#useDataFilter = useDataFilter;
    this.#init();
  }

  /**
   * @type {HTMLElement}
   */
  get _containerElement() {
    throw new AbstractGetterError('_containerElement');
  }

  /**
   * @type {string}
   */
  get _entity() {
    throw new AbstractGetterError('_entity');
  }

  /**
   * @type {EntityCategoryConfig[]}
   */
  get _entityCategoriesMap() {
    throw new AbstractGetterError('_entityCategoriesMap');
  }

  /**
   * @type {string[]}
   */
  get _emptyCardsTexts() {
    return ['Empty cards...', 'There is nothing'];
  }

  /**
   * @type {EntityCategoryConfig}
   */
  get _activeType() {
    return this.#activeCategory;
  }

  /**
   * @type {Card}
   */
  get #CardClass() {
    return this._activeType.CardClass;
  }

  get #cardsContainerElement() {
    return this._containerElement.querySelector('.cards');
  }

  get #btnFilter1Element() {
    return this._containerElement.querySelector(`#${this._FILTER_TYPE_1_ID}`);
  }

  get #btnFilter2Element() {
    return this._containerElement.querySelector(`#${this._FILTER_TYPE_2_ID}`);
  }

  get #activeCategoryElement() {
    return this._containerElement.querySelector(
      `#${this._ACTIVE_ENTITY_CATEGORY_ID}`
    );
  }

  get _dateFilterTemplate() {
    if (this.#useDataFilter) {
      const imgSrc = `${ASSETS_ROUTE}/icons/icon-filter.svg`;
      return `
    <div class="dashboard__filter">
      <div class="inputs__container">
        <div class="date-container">
          <label for="start-date-filter-${this._entity}">Start date</label>
          <input id="start-date-filter-${this._entity}" class="inp inp-date" type="date">
        </div>
        <div class="date-container">
          <label for="end-date-filter-${this._entity}">End date</label>
          <input id="end-date-filter-${this._entity}" class="inp inp-date" type="date">
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

  get _template() {
    return `
    <div class="component-group">
      <div class="dashboard-container">
        <div class="component-types">
          <div id="${this._FILTER_TYPE_1_ID}" class="component-type component-type__active">${capitalize(
            this._entityCategoriesMap[0].name
          )}</div>
          <div id="${this._FILTER_TYPE_2_ID}" class="component-type">${capitalize(
            this._entityCategoriesMap[1].name
          )}</div>
        </div>
        ${this._dateFilterTemplate}
      </div>
      <h2 id="${this._ACTIVE_ENTITY_CATEGORY_ID}" class="component-group__h2">${capitalize(
        this.#activeCategory.name
      )}</h2>
      <div class="cards">
      </div>
    </div>
`;
  }

  #render() {
    this._containerElement.insertAdjacentHTML('beforeend', this._template);
  }

  #initCardState() {
    this.#cardState = new CardState(
      this.#cardsContainerElement,
      this._entity,
      this._emptyCardsTexts
    );
  }

  #initCards() {
    this.#cards = this.#apiData.map((item) => {
      return new this.#CardClass(this.#cardsContainerElement, item);
    });
  }

  async #fetchFromApi() {
    this.#cardState.state = 'loading';
    await simulateWait();
    this.#apiData = await ApiService.fetchFrom(this.#activeCategory.endpoint);
  }

  async #renderComponents() {
    try {
      await this.#fetchFromApi();
      if (this.#apiData.length) {
        this.#cardsContainerElement.innerHTML = '';
        this.#initCards();
      } else {
        this.#cardState.state = 'empty';
        console.log('empty');
      }
    } catch (err) {
      this.#cardState.state = 'error';
      console.log(err);
    }
  }

  #updateActiveCategory(category) {
    this.#activeCategory = category;
    this.#activeCategoryElement.textContent = capitalize(category.name);
  }

  #setListeners() {
    const toggleClass = (ev, otherBtnFilterElement) => {
      ev.currentTarget.classList.add('component-type__active');
      otherBtnFilterElement.classList.remove('component-type__active');
    };

    this.#btnFilter1Element.addEventListener('click', (ev) => {
      toggleClass(ev, this.#btnFilter2Element);
      this.#updateActiveCategory(this._entityCategoriesMap[0]);
      this.#renderComponents();
    });

    this.#btnFilter2Element.addEventListener('click', (ev) => {
      toggleClass(ev, this.#btnFilter1Element);
      this.#updateActiveCategory(this._entityCategoriesMap[1]);
      this.#renderComponents();
    });
  }

  #init() {
    this.#render();
    this.#setListeners();
    this.#initCardState();
    this.#renderComponents();
  }
}
