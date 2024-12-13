import { capitalize } from "../../../utils/stringUtils.js";

/**
 * Represents a clickable card component that redirects to a page in the application.
 *
 * @class
 */
export class CardLink {
  /**
   * The container where the card link will be rendered.
   *
   * @private
   * @type {HTMLElement}
   */
  #containerElement;

  /**
   * The name of the card link, used for labeling and IDs.
   *
   * @private
   * @type {string}
   */
  #name;

  /**
   * Creates a new CardLink instance.
   *
   * @param {HTMLElement} containerElement - The container element where the card link will be rendered.
   * @param {string} name - The name of the card link.
   */
  constructor(containerElement, name) {
    this.#containerElement = containerElement;
    this.#name = name;
  }

  /**
   * Gets the name of the card link.
   *
   * @public
   * @type {string} The name of the card link.
   */
  get name() {
    return this.#name;
  }

  /**
   * Generates the HTML template for the card link.
   *
   * @returns {string} The HTML string for the card link.
   * @private
   */
  get #template() {
    const capName = capitalize(this.#name);
    const str = `
    <div class="card-link__container">
      <a id="card-link-a-${this.#name}" class="card-link__a" rel="next">
        <div class="card card-link">
          <img id="card-icon-${this.#name}"
            class="icon card-link__icon"
            alt="${capName} Icon">
          <span class="label card-link__label">${capName}</span>
        </div>
      </a>
    </div>
    `;
    return str;
  }

  render() {
    this.#containerElement.insertAdjacentHTML('beforeend', this.#template);
  }
}
