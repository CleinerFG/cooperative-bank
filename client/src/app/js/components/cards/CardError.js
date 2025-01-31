import { ASSETS_ROUTE } from '../../constants/routes';

/**
 * Card for when the server returns a error for the request
 */
export class CardError {
  #entity;

  /**
   * @param {string} entity
   */
  constructor(entity) {
    this.#entity = entity;
  }

  get #imgId() {
    return `${this.#entity}-error-img`;
  }

  get #randomImgFile() {
    const n = Math.floor(Math.random() * 2) + 1;
    return `error-${n}.svg`;
  }

  get template() {
    const content = `
      <img id="${this.#imgId}" class="card-state__img" 
        src="${ASSETS_ROUTE}/images/${this.#randomImgFile}">
      <div class="card-state__text">
        <p class="info-text">Oops! Something went wrong while trying to load the ${this.#entity.replace('-', ' ')} data.</p>
        <p class="info-text">Please check your internet connection and try again later.</p>
      </div>
    `;
    return `<article class="card-state error">${content}</article>`;
  }
}
