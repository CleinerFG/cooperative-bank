import { router } from '../../../core/Router.js';
import { capitalize } from '../../../utils/stringUtils.js';
import { AssetManager } from '../../../core/AssetManager.js';

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

  #featureName;

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
  constructor(containerElement, featureName, name) {
    this.#containerElement = containerElement;
    this.#featureName = featureName;
    this.#name = name;
    this.#init();
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
   * @type {string}
   */
  get #endpoint() {
    return `/app/${this.#featureName}/${this.#name}`;
  }

  get #cssID() {
    return `card-link-a-${this.#name}`;
  }

  /**
   * @type {string}
   */
  get #template() {
    const capName = capitalize(this.#name);
    const str = `
    <div class="card-link__container">
      <a id="${this.#cssID}" class="card-link__a" rel="next" a="${this.#endpoint}" data-link>
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

  #render() {
    this.#containerElement.insertAdjacentHTML('beforeend', this.#template);
  }

  #handleRoute() {
    document.getElementById(this.#cssID).addEventListener('click', (e) => {
      console.log('click');

      e.preventDefault();
      router.navigateTo(this.#endpoint);
    });
  }

  #handleIcon() {
    AssetManager.updateIcon(
      `#card-icon-${this.#name}`,
      `icon-${this.#name}.svg`
    );
  }

  #init() {
    this.#render();
    this.#handleIcon();
    this.#handleRoute();
  }
}
