import { AssetManager } from '../core/AssetManager.js';

/**
 * Manages and renders different card states (loading, empty or error).
 * This class provides templates and logic to display each state in a specified container.
 *
 * @class
 */
export class CardState {
  /**
   * @private
   * @type {HTMLElement} - The HTML container where the card state will be rendered.
   */
  #containerElement;

  /**
   * @private
   * @type {string} - Category name used to categorize the card state.
   */
  #category;

  /**
   * @private
   * @type {"loading" | "empty" | "error"} - Type of the card state.
   */
  #type;

  /**
   * @type {string[]} - Array of text strings to display in the empty card state.
   * @private
   */
  #emptyCardsTexts = [];

  /**
   * Creates an instance of CardState.
   * @param {HTMLElement} container - The HTML container where the card state will be rendered.
   * @param {string} category - Category name used to categorize the card.
   */
  constructor(container, category) {
    this.#containerElement = container;
    this.#category = category;
  }

  /**
   * Sets the type of card state and initializes the corresponding state.
   *
   * @public
   * @param {"loading" | "empty" | "error"} value - The type of state to render.
   */
  set type(value) {
    this.#type = value;
    this.#initState();
  }

  /**
   * Defines the texts to display in the "empty" state.
   *
   * @public
   * @param {...string} texts - Array of strings to be displayed as information in empty state.
   */
  defineTexts(...texts) {
    this.#emptyCardsTexts = texts;
  }

  /**
   * Builds an HTML template for the card state.
   *
   * @private
   * @param {string} content - The inner HTML content for the card.
   * @returns {string} - The complete HTML template for the card.
   */
  #buildTemplate(content) {
    return `
      <article class="card-state ${this.#type}">
        ${content}
      </article>
    `;
  }

  /**
   * Template for the "loading" card state.
   *
   * @private
   * @returns {string}
   */
  get #loadingTemplate() {
    return this.#buildTemplate(
      `
      <header class="card-state__header skelon"></header>
      <main class="card-state__content">
        ${this.#buildLoadingItems(3)}
      </main>
      <footer class="card-state__footer skelon"></footer>
    `
    ).repeat(3);
  }

  /**
   * Template for the "empty" card state.
   *
   * @private
   * @returns {string}
   */
  get #emptyTemplate() {
    const imgId = `${this.#category}-${this.#type}-img`;
    return this.#buildTemplate(
      `
      <img id="${imgId}" class="card-state-img">
      <div class="card-state__text">
        ${this.#buildEmptyCardsTexts()}
      </div>
    `
    );
  }

  /**
   * Template for the "error" card state.
   *
   * @private
   * @returns {string}
   */
  get #errorTemplate() {
    const imgId = `${this.#category}-${this.#type}-img`;
    return this.#buildTemplate(
      `
      <img id="${imgId}" class="card-state__img">
      <div class="card-state__text">
        <p class="info-text">Oops! Something went wrong while trying to load the ${
          this.#category
        } data.</p>
        <p class="info-text">Please check your internet connection and try again later.</p>
      </div>
    `
    );
  }

  /**
   * Builds loading items to display in the loading state template.
   *
   * @private
   * @param {number} count - The number of loading items to render.
   * @returns {string} - The HTML for loading items.
   */
  #buildLoadingItems(count) {
    return Array(count)
      .fill(
        `
      <div class="card-state__item">
        <span class="card-state__label skelon"></span>
        <span class="card-state__value skelon"></span>
      </div>
    `
      )
      .join('');
  }

  /**
   * Builds the empty state texts defined.
   *
   * @private
   * @returns {string} - The HTML for empty state texts.
   */
  #buildEmptyCardsTexts() {
    return this.#emptyCardsTexts
      .map((txt) => `<p class="info-text">${txt}</p>`)
      .join('');
  }

  /**
   * Selects the appropriate HTML template based on the current state type.
   *
   * @private
   * @returns {string} - The HTML template for the current state.
   */
  #getTemplate() {
    const templates = {
      loading: this.#loadingTemplate,
      empty: this.#emptyTemplate,
      error: this.#errorTemplate,
    };
    return templates[this.#type];
  }

  /**
   * Selects a random image file based on the card state type.
   *
   * @private
   * @returns {string} - The file name of the random image.
   */
  #randomImgFile() {
    const imgCount = this.#type === 'empty' ? 4 : 2;
    const n = Math.floor(Math.random() * imgCount) + 1;
    return `${this.#type}-${n}.svg`;
  }

  /**
   * Updates the image path in the template for "error" and "empty" states.
   *
   * @private
   */
  #pathHandler() {
    if (['error', 'empty'].includes(this.#type)) {
      const imgFile = this.#randomImgFile();
      AssetManager.updateAsset(
        'img',
        `#${this.#category}-${this.#type}-img`,
        imgFile
      );
    }
  }

  /**
   * Renders the selected state template in the container.
   *
   * @private
   */
  #render() {
    this.#containerElement.innerHTML = this.#getTemplate();
  }

  /**
   * Initializes the current state by rendering the template and updating the path.
   *
   *
   * @private
   */
  #initState() {
    this.#render();
    this.#pathHandler();
  }
}
