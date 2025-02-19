import '../types/cardType.js';
import {
  AbstractGetterError,
  AbstractMethodError,
} from '../../../global/js/errors/AbstractErrors.js';

/**
 * @typedef {Object} CardItem
 * @property {string} label
 * @property {string} value
 */

/**
 * Base class for creating card components with customizable header, content, and footer sections.
 */
export class Card {
  #index;
  #apiData;
  #containerElement;
  #category;

  /**
   * @param {CardParams} params
   */
  constructor(params) {
    this.#index = params.index;
    this.#category = params.category;
    this.#apiData = params.apiData;
    this.#containerElement = params.containerElement;
  }

  /**
   * @type {Object}
   */
  get _apiData() {
    return this.#apiData;
  }

  get _containerElement() {
    return this.#containerElement;
  }

  get _index() {
    return this.#index;
  }

  /**
   * @type {string}
   */
  get _id() {
    return `${this.#category}-${this.#index}`;
  }

  /**
   * @type {CardItem[]}
   */
  get _itemsArray() {
    throw new AbstractGetterError('_itemsArray');
  }

  /**
   * @type {string}
   */
  get _headerTemplate() {
    throw new AbstractGetterError('_headerTemplate');
  }

  /**
   * @type {string}
   */
  get _footerTemplate() {
    throw new AbstractGetterError('_footerTemplate');
  }

  get _element() {
    return document.getElementById(this._id);
  }

  _setListeners() {
    throw new AbstractMethodError('_setListeners');
  }

  #buildHeaderTemplate() {
    return `
        <header class="card-data__header">
        ${this._headerTemplate}
        </header>
        `;
  }

  /**
   * @param {CardItem} cardItem
   */
  #buildItemTemplate(cardItem) {
    return `
      <div class="card-data__item">
        <span class="card-data__label">${cardItem.label}</span>
        <span class="card-data__value">${cardItem.value}</span>
      </div>
    `;
  }

  #buildMainContentTemplate() {
    const items = this._itemsArray
      .map((cardItem) => this.#buildItemTemplate(cardItem))
      .join('');

    return `
    <main class="card-data__content">
    ${items}
    </main>
    `;
  }

  #buildFooterTemplate() {
    return `
    <footer class="card-data__footer">
      ${this._footerTemplate}
    </footer>
    `;
  }

  #buildCardTemplate() {
    return `
      <article id="${this._id}" class="card card-data">
        ${this.#buildHeaderTemplate()}
        ${this.#buildMainContentTemplate()}
        ${this.#buildFooterTemplate()}
      </article>
  
    `;
  }

  #render() {
    this.#containerElement.insertAdjacentHTML(
      'afterbegin',
      this.#buildCardTemplate()
    );
  }

  init() {
    this.#render();
    this._setListeners();
  }
}
