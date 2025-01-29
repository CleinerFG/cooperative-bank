import { ASSETS_ROUTE } from '../../constants/routes';

/**
 * Card for when the server returns no data for the entity."
 */
export class CardEmpty {
  #category;
  #texts;

  /**
   * @param {string} category
   * @param {string[]} texts
   */
  constructor(category, texts) {
    this.#category = category;
    this.#texts = texts;
  }

  get #imgId() {
    return `${this.#category}-empty-img`;
  }

  get #randomImgFile() {
    const n = Math.floor(Math.random() * 4) + 1;
    return `empty-${n}.svg`;
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
