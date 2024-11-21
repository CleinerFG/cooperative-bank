import { CardComponent } from './CardComponent.js';
import { CardState } from './CardState.js';
import { ApiService } from '../service/ApiService.js';
import { PathManager } from '../utils/PathManager.js';
import { capitalize } from '../utils/stringUtils.js';
import { simulateWait } from '../utils/tests.js';
import { AbstractGetterError } from '../errors/AbstractErrors.js';

/**
 * @typedef {Object} TypeConfig
 * @property {string} name - The name of the type.
 * @property {CardComponent} CardClass - Card Class for the type.
 * @property {string} endpoint - The endpoint associated with the type.
 */

/**
 * ComponentGroup manages the functionality of a group of CardComponent
 * with filters, state management and rendering options.
 *
 * @class
 */
export class ComponentGroup {
  /**
   * List of CardComponent instances, representing the components displayed within the group.
   *
   * @private
   * @type {CardComponent[]}
   */
  #cardComponents;

  /**
   * Instance of CardState used to manage and display the state of the component group.
   *
   * @private
   * @type {CardState}
   */
  #cardState;

  /**
   * Data retrieved from the API to populate the CardComponents. Holds the items fetched
   * from the active endpoint.
   *
   * @private
   * @type {Object[]}
   */
  #apiData;

  /**
   * Currently active (selected) component type.
   *
   * @private
   * @type {TypeConfig}
   */
  #activeType;

  /**
   * Creates an instance of ComponentGroup.
   */
  constructor() {
    this.#activeType = this._typeMappingConfig[0];
    this.#init();
  }

  /**
   * Returns the main container element where the component group will be rendered.
   *
   * @abstract
   * @protected
   * @type {HTMLElement}
   * @throws {AbstractGetterError}
   */
  get _containerElement() {
    throw new AbstractGetterError('_containerElement');
  }

  /**
   * Returns the category of the component group.
   *
   * @abstract
   * @protected
   * @type {string}
   * @throws {AbstractGetterError}
   */
  get _category() {
    throw new AbstractGetterError('_category');
  }

  /**
   * Returns the type mapping configuration.
   *
   * @abstract
   * @protected
   * @type {TypeConfig[]}
   * @throws {AbstractGetterError}
   */
  get _typeMappingConfig() {
    throw new AbstractGetterError('_typeMappingConfig');
  }

  /**
   * Returns the default texts to display when no cards are available.
   *
   * @abstract
   * @protected
   * @type {string[]} An array of default texts.
   */
  get _emptyCardsTexts() {
    return ['Empty cards...', 'There is nothing'];
  }

  /**
   * Returns the currently active type configuration.
   *
   * @protected
   * @type {TypeConfig}
   */
  get _activeType() {
    return this.#activeType;
  }

  /**
   * Returns the CardComponentClass according to the active type.
   *
   * @private
   * @type {CardComponent}
   */
  get #CardComponentClass() {
    return this._activeType.CardClass;
  }

  /**
   * Returns the container element for card components.
   *
   * @private
   * @type {HTMLElement}
   */
  get #cardsContainerElement() {
    return this._containerElement.querySelector('.cards');
  }

  /**
   * Returns the first type filter button element.
   *
   * @private
   * @type {HTMLElement}
   */
  get #btnFilterElement1() {
    return this._containerElement.querySelector('#component-type-1');
  }

  /**
   * Returns the second type filter button element.
   *
   * @private
   * @type {HTMLElement}
   */
  get #btnFilterElement2() {
    return this._containerElement.querySelector('#component-type-2');
  }

  /**
   * Returns the active type display element.
   *
   * @private
   * @type {HTMLElement}
   */
  get #activeTypeElement() {
    return this._containerElement.querySelector('#active-type');
  }

  /**
   * Returns the HTML template for the component group layout.
   *
   * @private
   * @type {string}
   */
  get _template() {
    return `
    <div class="component-group">
      <div class="dashboard-container">
        <div class="component-types">
          <div id="component-type-1" class="component-type component-type__active">${capitalize(
            this._typeMappingConfig[0].name
          )}</div>
          <div id="component-type-2" class="component-type">${capitalize(
            this._typeMappingConfig[1].name
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

  /**
   * Renders the component group in the container element.
   *
   * @private
   */
  #render() {
    this._containerElement.insertAdjacentHTML('beforeend', this._template);
  }

  /**
   * Handles the asset loading process for icons.
   *
   * @private
   */
  #assetHandler() {
    PathManager.updateIcon(`#filter-icon`, 'icon-filter.svg');
  }

  /**
   * Initializes the card state component.
   *
   * @private
   */
  #initCardState() {
    this.#cardState = new CardState(
      this.#cardsContainerElement,
      this._category
    );
    this.#cardState.defineTexts(...this._emptyCardsTexts);
  }

  /**
   * Initializes CardComponent instances based on API data.
   *
   * @private
   */
  #initCardComponents() {
    this.#cardComponents = this.#apiData.map((item) => {
      return new this.#CardComponentClass(this.#cardsContainerElement, item);
    });
  }

  /**
   * Fetches data from the API and sets loading state.
   *
   * @async
   * @private
   */
  async #fetchFromApi() {
    this.#cardState.type = 'loading';
    await simulateWait(1);
    this.#apiData = await ApiService.fetchFrom(this.#activeType.endpoint);
  }

  /**
   * Renders components based on API data, handling empty and error states.
   *
   * @async
   * @private
   */
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

  /**
   * Sets up event listeners for the filter buttons, toggling the active type
   * and re-rendering components based on the selected type.
   *
   *   - When a filter button is clicked, it:
   *   - Adds the `component-type__active` class to the clicked button and removes it from the other.
   *   - Updates the active type based on the selected filter.
   *   - Re-renders the components according to the new active type.
   *
   * @private
   */
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
      upActiveType(this._typeMappingConfig[0]);
      this.#renderComponents();
    });

    this.#btnFilterElement2.addEventListener('click', (ev) => {
      toggleClass(ev, this.#btnFilterElement1);
      upActiveType(this._typeMappingConfig[1]);
      this.#renderComponents();
    });
  }

  /**
   * Initializes the component group, setting up rendering, assets, listeners, card state and rendering card components.
   *
   * @private
   */
  #init() {
    this.#render();
    this.#assetHandler();
    this.#setupListeners();
    this.#initCardState();
    this.#renderComponents();
  }
}
