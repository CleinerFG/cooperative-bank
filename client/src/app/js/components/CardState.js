import('../../css/components/cards/card-state.css')

import { AssetManager } from '../../../global/js/core/AssetManager.js';

/**
 * Manages and renders different card states (loading, empty or error).
 * This class provides templates and logic to display each state in a specified container.
 */
export class CardState {
  /**
   * @type {HTMLElement}
   */
  #containerElement;

  /**
   * @type {string}
   */
  #category;

  /**
   * @type {"loading" | "empty" | "error"}
   */
  #state;

  /**
   * @type {string[]}
   * @private
   */
  #emptyStateTexts = [];

  /**
   * @param {HTMLElement} container
   * @param {string} category
   */
  constructor(container, category) {
    this.#containerElement = container;
    this.#category = category;
  }

  /**
   * @param {"loading" | "empty" | "error"} value
   */
  set state(value) {
    this.#state = value;
    this.#init();
  }

  /**

   * @param {string[]} texts
   */
  set emptyStateTexts(texts) {
    this.#emptyStateTexts = texts;
  }

  get #imgId() {
    return `${this.#category}-${this.#state}-img`;
  }

  /**
   * @param {string} content
   */
  #build(content) {
    return `
      <article class="card-state ${this.#state}">
        ${content}
      </article>
    `;
  }

  /**
   * @param {number} count
   */
  #buildLoadingStateItems(count) {
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

  get #loadingStateTemplate() {
    return this.#build(
      `
      <header class="card-state__header skelon"></header>
      <main class="card-state__content">
        ${this.#buildLoadingStateItems(3)}
      </main>
      <footer class="card-state__footer skelon"></footer>
    `
    ).repeat(3);
  }

  get #emptyStateTextsTemplate() {
    return this.#emptyStateTexts
      .map((txt) => `<p class="info-text">${txt}</p>`)
      .join('');
  }

  get #emptyStateTemplate() {
    return this.#build(
      `
      <img id="${this.#imgId}" class="card-state-img">
      <div class="card-state__text">
        ${this.#emptyStateTextsTemplate}
      </div>
    `
    );
  }

  get #errorStateTemplate() {
    return this.#build(
      `
      <img id="${this.#imgId}" class="card-state__img">
      <div class="card-state__text">
        <p class="info-text">Oops! Something went wrong while trying to load the ${
          this.#category
        } data.</p>
        <p class="info-text">Please check your internet connection and try again later.</p>
      </div>
    `
    );
  }

  get #templateByState() {
    const templates = {
      loading: this.#loadingStateTemplate,
      empty: this.#emptyStateTemplate,
      error: this.#errorStateTemplate,
    };
    return templates[this.#state];
  }

  #randomImgFile() {
    const imgCount = this.#state === 'empty' ? 4 : 2;
    const n = Math.floor(Math.random() * imgCount) + 1;
    return `${this.#state}-${n}.svg`;
  }

  get #stateUsesImg() {
    return ['error', 'empty'].includes(this.#state);
  }

  #handleAssets() {
    if (this.#stateUsesImg) {
      const imgFile = this.#randomImgFile();
      AssetManager.updateAsset('img', `#${this.#imgId}`, imgFile);
    }
  }

  #render() {
    this.#containerElement.innerHTML = this.#templateByState;
  }

  #init() {
    this.#render();
    this.#handleAssets();
  }
}
