import { ASSETS_ROUTE } from '../../../constants/routes.js';
import {
  normalizeKebabCase,
  toCamelCase,
} from '../../../../../global/js/utils/stringUtils.js';
import { handleIconDark } from '../../../../../global/js/utils/themeUtils.js';
import { translate } from '../../../../../global/js/i18n/Translator.js';

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

  get #icon() {
    return `${ASSETS_ROUTE}/icons/${this.#groupName}/icon-${this.#name}.svg`;
  }

  get template() {
    const normalizedName = toCamelCase(normalizeKebabCase(this.#name));
    const name = translate(normalizedName);
    return `
    <div class="card-link__container">
      <a id="${this.anchorId}" class="card-link__a" rel="next" href="${this.endpoint}" data-link>
        <div class="card card-link">
          <img id="${this.#iconId}"
            class="icon ${handleIconDark()}"
            src="${this.#icon}"
            alt="${name} Icon">
          <span class="label card-link__label">${name}</span>
        </div>
      </a>
    </div>
    `;
  }
}
