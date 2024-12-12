import { AbstractGetterError, AbstractMethodError } from "../errors/AbstractErrors.js";

/**
 * @typedef {Object} CardItem
 * @property {string} label - The label of the card item.
 * @property {string} value - The value of the card item.
 */

/**
 * Base class for creating card components with customizable header, content, and footer sections.
 * Must be extended by subclasses that implement specific model and template structures.
 *
 * @class
 */
export class CardComponent {
  /**
   * The HTML container element where the card component is rendered.
   * Set during instantiation and used as the parent for inserting the card's HTML structure.
   *
   * @private
   * @type {HTMLElement}
   */
  #containerElement;

  /**
   * The model instance associated with the card component.
   * Created based on the subclass-defined `_ModelClass` and initialized using `modelParams`.
   *
   * @private
   * @type {Object}
   */
  #model;

  /**
   * This constructor sets up the container where the card will be rendered,
   * initializes the model associated with the card based on provided parameters,
   * and triggers the initialization process to render and configure the component.
   *
   * @param {HTMLElement} containerElement - The container element where the card will be rendered.
   * @param {Object} modelParams - Parameters for initializing the model.
   */
  constructor(containerElement, modelParams) {
    this.#containerElement = containerElement;
    this.#model = new this._ModelClass(modelParams);
    this.#init();
  }

  /**
   * Gets the instance of the model for this card component.
   *
   * 
   * @protected
   * @type {Object}
   */
  get _model() {
    return this.#model;
  }

  /**
   * Gets the model class associated with the card component.
   *
   * @abstract
   * @protected
   * @throws {AbstractGetterError}
   */
  get _ModelClass() {
    throw new AbstractGetterError("_ModelClass");
  }

  /**
   * Gets the unique CSS ID for this card component.
   *
   * @abstract
   * @protected
   * @type {string}
   * @throws {AbstractGetterError}
   */
  get _cssId() {
    throw new AbstractGetterError("_cssId");
  }

  /**
   * Gets the CSS class for additional styling of the card.
   *
   * @abstract
   * @protected
   * @type {string}
   * @throws {AbstractGetterError}
   */
  get _cssClass() {
    throw new AbstractGetterError("_cssClass");
  }

  /**
   * Should return the items to be displayed in the card content area.
   *
   * @abstract
   * @protected
   * @type {CardItem}
   * @throws {AbstractGetterError}
   */
  get _cardItemsTemplate() {
    throw new AbstractGetterError("_cardItemsTemplate");
  }

  /**
   * Returns the HTML template for the card header.
   *
   * @abstract
   * @protected
   * @type {string}
   * @throws {AbstractGetterError}
   */
  get _cardHeaderTemplate() {
    throw new AbstractGetterError("_cardHeaderTemplate");
  }

  /**
   * Returns the HTML template for the card footer.
   *
   * @abstract
   * @protected
   * @type {string}
   * @throws {AbstractGetterError}
   */
  get _cardFooterTemplate() {
    throw new AbstractGetterError("_cardFooterTemplate");
  }

  /**
   * Handles modal functionality.
   * Should be implemented in subclasses if needed.
   *
   * @abstract
   * @protected
   * @throws {AbstractMethodError}
   */
  _modalHandler() {
    throw new AbstractMethodError("_modalHandler");
  }

  /**
   * Removes the card element from the DOM.
   *
   * @public
   */
  selfRemove() {
    document.getElementById(this._cssId).remove();
  }

  /**
   * Builds the header section of the card.
   *
   * @private
   * @returns {string} HTML string for the card header.
   */
  #buildCardHeader() {
    return `
        <header class="card-data__header">
        ${this._cardHeaderTemplate}
        </header>
        `;
  }

  /**
   * Builds a single item in the card's main content area.
   *
   * @private
   * @param {CardItem} cardItem - Object with label and value.
   * @returns {string} HTML string for a card data item.
   */
  #buildCardItem(cardItem) {
    return `
      <div class="card-data__item">
        <span class="card-data__label">${cardItem.label}</span>
        <span class="card-data__value">${cardItem.value}</span>
      </div>
    `;
  }

  /**
   * Builds the main content area of the card with all data items.
   *
   * @private
   * @returns {string} HTML string for the card main content.
   */
  #buildCardMain() {
    const items = this._cardItemsTemplate
      .map((cardItem) => this.#buildCardItem(cardItem))
      .join("");

    return `
    <main class="card-data__content">
    ${items}
    </main>
    `;
  }

  /**
   * Builds the footer section of the card.
   *
   * @private
   * @returns {string} HTML string for the card footer.
   */
  #buildCardFooter() {
    return `
    <footer class="card-data__footer">
      ${this._cardFooterTemplate}
    </footer>
    `;
  }

  /**
   * Builds the complete card component, including header, main content, and footer.
   *
   * @private
   * @returns {string} HTML string for the complete card.
   */
  #buildCard() {
    return `
    <article id="${this._cssId}" class="card card-data ${this._cssClass}">
        ${this.#buildCardHeader()}
        ${this.#buildCardMain()}
        ${this.#buildCardFooter()}
      </article>
  
    `;
  }

  /**
   * Renders the card component inside the container element.
   *
   * @private
   */
  #render() {
    this.#containerElement.insertAdjacentHTML("afterbegin", this.#buildCard());
  }

  /**
   * Initializes the card component by rendering it and setting up the modal handler.
   *
   * @private
   */
  #init() {
    this.#render();
    this._modalHandler();
  }
}
