import '../../types/cardType.js';
import {
  AbstractGetterError,
  AbstractMethodError,
} from '../../../../global/js/errors/AbstractErrors.js';

/**
 * @typedef {Object} CardItem
 * @property {string} label
 * @property {string} value
 */

export class Card {
  #index;
  #apiData;
  #containerElement;
  #category;
  #entityType;

  /**
   * @param {CardParams} params
   */
  constructor(params) {
    this.#index = params.index;
    this.#category = params.category;
    this.#apiData = params.apiData;
    this.#entityType = params.entityType;
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

  get _category() {
    return this.#category;
  }

  get _entityType() {
    return this.#entityType;
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
    return this.#containerElement.querySelector(`#${this._id}`);
  }

  #buildHeader() {
    return `
        <header class="card-data__header">
        ${this._headerTemplate}
        </header>
        `;
  }

  /**
   * @param {CardItem} cardItem
   */
  #buildItem(cardItem) {
    return `
      <div class="card-data__item">
        <span class="card-data__label">${cardItem.label}</span>
        <span class="card-data__value">${cardItem.value}</span>
      </div>
    `;
  }

  #buildMainContent() {
    const items = this._itemsArray
      .map((cardItem) => this.#buildItem(cardItem))
      .join('');

    return `
    <main class="card-data__content">
    ${items}
    </main>
    `;
  }

  #buildFooter() {
    return `
    <footer class="card-data__footer">
      ${this._footerTemplate}
    </footer>
    `;
  }

  #buildCard() {
    return `
      <article id="${this._id}" class="card card-data">
        ${this.#buildHeader()}
        ${this.#buildMainContent()}
        ${this.#buildFooter()}
      </article>
  
    `;
  }

  _render() {
    this.#containerElement.insertAdjacentHTML(
      'beforeend',
      this.#buildCard()
    );
  }
}
