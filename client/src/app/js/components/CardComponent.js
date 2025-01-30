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
 * Must be extended by subclasses that implement specific model and template structures.
 */
export class CardComponent {
  #containerElement;

  /**
   * @type {Object}
   */
  #model;

  /**
   * @param {HTMLElement} containerElement
   * @param {Object} modelParams
   */
  constructor(containerElement, modelParams) {
    this.#containerElement = containerElement;
    this.#model = new this._ModelClass(modelParams);
    this.#init();
  }

  /**
   * @type {Object}
   */
  get _model() {
    return this.#model;
  }

  get _ModelClass() {
    throw new AbstractGetterError('_ModelClass');
  }

  /**
   * @type {string}
   */
  get _id() {
    throw new AbstractGetterError('_id');
  }

  /**
   * @type {string}
   */
  get _cssClass() {
    throw new AbstractGetterError('_cssClass');
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

  _handleModal() {
    throw new AbstractMethodError('_handleModal');
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
    <article id="${this._id}" class="card card-data ${this._cssClass}">
        ${this.#buildHeader()}
        ${this.#buildMainContent()}
        ${this.#buildFooter()}
      </article>
  
    `;
  }

  #render() {
    this.#containerElement.insertAdjacentHTML('afterbegin', this.#buildCard());
  }

  selfRemove() {
    document.getElementById(this._id).remove();
  }

  #init() {
    this.#render();
    this._handleModal();
  }
}
