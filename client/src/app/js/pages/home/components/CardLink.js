import('../../../../css/components/cards/card-link.css');

import { capitalize } from '../../../../../global/js/utils/stringUtils.js';
import { getStoredTheme } from '../../../../../global/js/utils/themeUtils.js';
import { AppPageView } from '../../../views/AppPageView.js';

/**
 * Represents a clickable card component that redirects to a page in the application.
 */
export class CardLink {
  #groupName;
  #name;

  /**
   * @param {string} name
   * @param {string} groupName
   */
  constructor(name, groupName) {
    this.#name = name;
    this.#groupName = groupName;
  }

  get endpoint() {
    return `/app/${this.#groupName}/${this.#name}`;
  }

  get anchorId() {
    return `card-link-a-${this.#name}`;
  }

  get #iconId() {
    return `card-icon-${this.#groupName}-${this.#name}`;
  }

  get #imgSrc() {
    const theme = getStoredTheme();
    return `${AppPageView.ASSETS_ROUTE}/icons/${theme}/icon-${this.#name}.svg`;
  }

  get template() {
    const capName = capitalize(this.#name);
    return `
    <div class="card-link__container">
      <a id="${this.anchorId}" class="card-link__a" rel="next" a="${this.endpoint}" data-link>
        <div class="card card-link">
          <img id="${this.#iconId}"
            class="icon card-link__icon"
            src="${this.#imgSrc}"
            alt="${capName} Icon">
          <span class="label card-link__label">${capName}</span>
        </div>
      </a>
    </div>
    `;
  }
}
