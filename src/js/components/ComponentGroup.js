import { ApiService } from '../service/ApiService.js';
import { PathManager } from '../utils/PathManager.js';
import { capitalize } from '../utils/stringUtils.js';
import { CardState } from './CardState.js';
import { simulateWait } from '../utils/tests.js';

/**
 * @typedef {Object} EndpointConfig
 * @property {string} name - The name of the type.
 * @property {string} endpoint - The endpoint associated with the type.
 */

/**
 * ComponentGroup manages the functionality of a group of CardComponent
 * with filters, state management and rendering options.
 */
export class ComponentGroup {
  #containerElement;
  #cardComponents;
  #cardState;
  #apiData;
  #activeType;
  constructor(containerElement) {
    this.#containerElement = containerElement;
    this.#activeType = this._endpointConfig[0];
    this.#init();
  }

  /**
   * Returns the CardComponent class.
   *
   * @abstract
   * @throws {AbstractMethodError}
   */
  get _CardComponentClass() {
    throw new AbstractMethodError('_CardComponentClass');
  }

  /**
   * Returns the category of the component group.
   *
   * @abstract
   * @returns {string}
   * @throws {AbstractMethodError}
   */
  get _category() {
    throw new AbstractMethodError('_category');
  }

  /**
   * Returns the endpoint configuration.
   *
   * @abstract
   * @returns {EndpointConfig[]}
   * @throws {AbstractMethodError}
   */
  get _endpointConfig() {
    throw new AbstractMethodError('_endpointsConfig');
  }

  /**
   * Returns the default texts to display when no cards are available.
   *
   * @abstract
   * @returns {<string>[]} An array of default texts.
   */
  get _emptyCardsTexts() {
    return ['Empty cards...', 'There is nothing'];
  }

  /**
   * Returns the currently active type configuration.
   *
   * @returns {Object}
   */
  get _activeType() {
    return this.#activeType;
  }

  get #cardsContainerElement() {
    return this.#containerElement.querySelector('.cards');
  }

  get #btnFilterElement1() {
    return this.#containerElement.querySelector('#component-type-1');
  }

  get #btnFilterElement2() {
    return this.#containerElement.querySelector('#component-type-2');
  }

  get #activeTypeElement() {
    return this.#containerElement.querySelector('#active-type');
  }

  get _template() {
    return `
    <div class="component-group">
      <div class="dashboard-container">
        <div class="component-types">
          <div id="component-type-1" class="component-type component-type__active">${capitalize(
            this._endpointConfig[0].name
          )}</div>
          <div id="component-type-2" class="component-type">${capitalize(
            this._endpointConfig[1].name
          )}</div>
        </div>
        <div class="dashboard__filter">
          <div class="inputs__container">
            <div class="date-container">
              <label for="start-date-filter">Start date</label>
              <input id="start-date-filter" class="inp inp-date" type="date">
            </div>
            <div class="date-container">
              <label for="end-date-filter">End date</label>
              <input id="end-date-filter" class="inp inp-date" type="date">
            </div>
          </div>
          <button class="btn-unset btn-filter">
            <img id="filter-icon" class="icon filter-icon" alt="Filter Icon">
         </button>
        </div>
      </div>
      <h2 id="active-type" class="component-group__h2">${capitalize(
        this.#activeType.name
      )}</h2>
      <div class="cards">
      </div>
    </div>
`;
  }

  #render() {
    this.#containerElement.insertAdjacentHTML('beforeend', this._template);
  }

  #assetHandler() {
    PathManager.updateIcon(`#filter-icon`, 'icon-filter.svg');
  }

  #initCardState() {
    this.#cardState = new CardState(
      this.#cardsContainerElement,
      this._category
    );
    this.#cardState.defineTexts(...this._emptyCardsTexts);
  }

  #initCardComponents() {
    this.#cardComponents = this.#apiData.map((item) => {
      return new this._CardComponentClass(this.#cardsContainerElement, item);
    });
  }

  async #fetchFromApi() {
    this.#cardState.type = 'loading';
    await simulateWait(1);
    this.#apiData = await ApiService.fetchFrom(this.#activeType.endpoint);
  }

  async #renderComponents() {
    try {
      await this.#fetchFromApi();
      if (this.#apiData.length) {
        this.#cardsContainerElement.innerHTML = '';
        this.#initCardComponents();
      } else {
        this.#cardState.type = 'empty';
        console.log('empty');
      }
    } catch (err) {
      this.#cardState.type = 'error';
      console.log(err);
    }
  }

  #setupListeners() {
    const toggleClass = (ev, otherBtnFilterElement) => {
      ev.currentTarget.classList.add('component-type__active');
      otherBtnFilterElement.classList.remove('component-type__active');
    };

    const upActiveType = (currentType) => {
      this.#activeType = currentType;
      this.#activeTypeElement.textContent = capitalize(currentType.name);
    };

    this.#btnFilterElement1.addEventListener('click', (ev) => {
      toggleClass(ev, this.#btnFilterElement2);
      upActiveType(this._endpointConfig[0]);
      this.#renderComponents();
    });

    this.#btnFilterElement2.addEventListener('click', (ev) => {
      toggleClass(ev, this.#btnFilterElement1);
      upActiveType(this._endpointConfig[1]);
      this.#renderComponents();
    });
  }

  #init() {
    this.#render();
    this.#assetHandler();
    this.#setupListeners();
    this.#initCardState();
    this.#renderComponents();
  }
}
