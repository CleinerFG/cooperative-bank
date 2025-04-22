import { normalizeKebabCase } from '../../../../global/js/utils/stringUtils.js';
import { ASSETS_ROUTE } from '../../constants/routes.js';

export class CardEmpty {
  #entity;

  /** @param {string} entity */
  constructor(entity) {
    this.#entity = entity;
  }

  get #imgId() {
    return `${this.#entity}-empty-img`;
  }

  get #randomImgFile() {
    const n = Math.floor(Math.random() * 4) + 1;
    return `empty-${n}.svg`;
  }

  get #texts() {
    return [
      `There are no ${normalizeKebabCase(this.#entity)}...`,
      "When there is news, we'll let you know ; )",
    ];
  }

  get #textsTemplate() {
    return this.#texts.map((txt) => `<p class="info-text">${txt}</p>`).join('');
  }

  get template() {
    const content = `
     <img id="${this.#imgId}" class="card-state-img" 
      src="${ASSETS_ROUTE}/images/${this.#randomImgFile}">
      <div class="card-state__text">
        ${this.#textsTemplate}
      </div>
    `;
    return `<article class="card-state error">${content}</article>`;
  }
}
