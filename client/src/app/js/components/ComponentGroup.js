import { ASSETS_ROUTE } from '../constants/routes.js';
import { CardComponent } from './CardComponent.js';
import { CardState } from './cards/CardState.js';
import { ApiService } from '../../../global/js/service/ApiService.js';
import { capitalize } from '../../../global/js/utils/stringUtils.js';
import { handleIconDark } from '../../../global/js/utils/themeUtils.js';
import { simulateWait } from '../../../global/js/utils/tests.js';
import { AbstractGetterError } from '../../../global/js/errors/AbstractErrors.js';

/**
 * @typedef {Object} TypeConfig
 * @property {string} name
 * @property {CardComponent} CardClass
 * @property {string} endpoint
 */

/**
 * ComponentGroup manages the functionality of a group of CardComponent
 * with filters, state management and rendering options.
 */
export class ComponentGroup {
  /**
   * @type {CardComponent[]}
   */
  #cardComponents;

  /**
   * @type {CardState}
   */
  #cardState;

  /**
   * @type {Object[]}
   */
  #apiData;

  /**
   * @type {TypeConfig}
   */
  #activeType;

  /**
   * @type {boolean}
   */
  #useDataFilter;

  _ICON_FILTER_ID = `icon-filter-${this._category}`;
  _FILTER_TYPE_1_ID = `${this._typeMappingConfig[0].name}-${this._category}-filter-1`;
  _FILTER_TYPE_2_ID = `${this._typeMappingConfig[1].name}-${this._category}-filter-2`;
  _ACTIVE_TYPE_ID = `active-type-${this._category}`;

  /**
   * @param {boolean} useDataFilter
   */
  constructor(useDataFilter = true) {
    this.#activeType = this._typeMappingConfig[0];
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
  get _category() {
    throw new AbstractGetterError('_category');
  }

  /**
   * @type {TypeConfig[]}
   */
  get _typeMappingConfig() {
    throw new AbstractGetterError('_typeMappingConfig');
  }

  /**
   * @type {string[]}
   */
  get _emptyCardsTexts() {
    return ['Empty cards...', 'There is nothing'];
  }

  /**
   * @type {TypeConfig}
   */
  get _activeType() {
    return this.#activeType;
  }

  /**
   * @type {CardComponent}
   */
  get #CardComponentClass() {
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

  get #activeTypeElement() {
    return this._containerElement.querySelector(`#${this._ACTIVE_TYPE_ID}`);
  }

  get _dateFilterTemplate() {
    if (this.#useDataFilter) {
      const imgSrc = `${ASSETS_ROUTE}/icons/icon-filter.svg`;
      return `
    <div class="dashboard__filter">
      <div class="inputs__container">
        <div class="date-container">
          <label for="start-date-filter-${this._category}">Start date</label>
          <input id="start-date-filter-${this._category}" class="inp inp-date" type="date">
        </div>
        <div class="date-container">
          <label for="end-date-filter-${this._category}">End date</label>
          <input id="end-date-filter-${this._category}" class="inp inp-date" type="date">
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
            this._typeMappingConfig[0].name
          )}</div>
          <div id="${this._FILTER_TYPE_2_ID}" class="component-type">${capitalize(
            this._typeMappingConfig[1].name
          )}</div>
        </div>
        ${this._dateFilterTemplate}
      </div>
      <h2 id="${this._ACTIVE_TYPE_ID}" class="component-group__h2">${capitalize(
        this.#activeType.name
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
      this._category,
      this._emptyCardsTexts
    );
  }

  #initCardComponents() {
    this.#cardComponents = this.#apiData.map((item) => {
      return new this.#CardComponentClass(this.#cardsContainerElement, item);
    });
  }

  async #fetchFromApi() {
    this.#cardState.state = 'loading';
    await simulateWait();
    this.#apiData = await ApiService.fetchFrom(this.#activeType.endpoint);
  }

  async #renderComponents() {
    try {
      await this.#fetchFromApi();
      if (this.#apiData.length) {
        this.#cardsContainerElement.innerHTML = '';
        this.#initCardComponents();
      } else {
        this.#cardState.state = 'empty';
        console.log('empty');
      }
    } catch (err) {
      this.#cardState.state = 'error';
      console.log(err);
    }
  }

  #updateActiveType(currentType) {
    this.#activeType = currentType;
    this.#activeTypeElement.textContent = capitalize(currentType.name);
  }

  #setListeners() {
    const toggleClass = (ev, otherBtnFilterElement) => {
      ev.currentTarget.classList.add('component-type__active');
      otherBtnFilterElement.classList.remove('component-type__active');
    };

    this.#btnFilter1Element.addEventListener('click', (ev) => {
      toggleClass(ev, this.#btnFilter2Element);
      this.#updateActiveType(this._typeMappingConfig[0]);
      this.#renderComponents();
    });

    this.#btnFilter2Element.addEventListener('click', (ev) => {
      toggleClass(ev, this.#btnFilter1Element);
      this.#updateActiveType(this._typeMappingConfig[1]);
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
