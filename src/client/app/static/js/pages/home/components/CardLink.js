import { Router } from '../../../core/Router.js';
import { capitalize } from '../../../utils/stringUtils.js';
import { AssetManager } from '../../../core/AssetManager.js';

/**
 * Represents a clickable card component that redirects to a page in the application.
 */
export class CardLink {
  /**
   * @type {HTMLElement}
   */
  #containerElement;

  #featureName;

  /**
   * @type {string}
   */
  #name;

  /**
   * @param {HTMLElement} containerElement
   * @param {string} featureName
   * @param {string} name
   */
  constructor(containerElement, featureName, name) {
    this.#containerElement = containerElement;
    this.#featureName = featureName;
    this.#name = name;
    this.#init();
  }

  /**
   * @type {string}
   */
  get name() {
    return this.#name;
  }

  get #endpoint() {
    return `/app/${this.#featureName}/${this.#name}`;
  }

  get #anchorId() {
    return `card-link-a-${this.#name}`;
  }

  get #iconId() {
    return `card-icon-${this.#featureName}-${this.#name}`;
  }

  get #template() {
    const capName = capitalize(this.#name);
    return `
    <div class="card-link__container">
      <a id="${this.#anchorId}" class="card-link__a" rel="next" a="${this.#endpoint}" data-link>
        <div class="card card-link">
          <img id="${this.#iconId}"
            class="icon card-link__icon"
            alt="${capName} Icon">
          <span class="label card-link__label">${capName}</span>
        </div>
      </a>
    </div>
    `;
  }

  #render() {
    this.#containerElement.insertAdjacentHTML('beforeend', this.#template);
  }

  #handleRoute() {
    document.getElementById(this.#anchorId).addEventListener('click', (e) => {
      e.preventDefault();
      Router.navigateTo(this.#endpoint);
    });
  }

  #handleAssets() {
    AssetManager.updateAsset(
      'icon',
      `#${this.#iconId}`,
      `icon-${this.#name}.svg`
    );
  }

  #init() {
    this.#render();
    this.#handleAssets();
    this.#handleRoute();
  }
}
