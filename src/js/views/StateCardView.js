import { PathManager } from "../utils/PathManager.js";

export class StateCardView {
  #container;
  #category;
  #type;
  #noCardsTexts = [];
  constructor(container, category) {
    this.#container = container;
    this.#category = category;
  }

  get #loandingTemplate() {
    return `
      <article class="card card-data loading
      card-state">
        <header class="card-data__header"></header>
        <main class="card-data__content">
          <div class="card-data__item">
            <span class="card-data__label"></span>
            <span class="card-data__value"></span>
          </div>
          <div class="card-data__item">
            <span class="card-data__label"></span>
            <span class="card-data__value"></span>
          </div>
          <div class="card-data__item">
            <span class="card-data__label"></span>
            <span class="card-data__value"></span>
          </div>
        </main>
        <footer class="card-data__footer"></footer>
      </article>`;
  }

  get #emptyTemplate() {
    return `
      <div class="card-state">
        <img id="${this.#category}-${this.#type}-img" class="card-state-img">
        <div class="card-state__text">
        ${this.#buildNoCardsTexts()}
        test test test test
        </div>
      </div>
    `;
  }

  get #errorTemplate() {
    return `
      <div class="card-state">
        <img id="${this.#category}-${this.#type}-img" class="card-state__img">
        <div class="card-state__text">
          <p class="info-text">Oops! Something went wrong while trying to load the data. </p>
          <p class="info-text">Please check your internet connection and try again later.</p>
        </div>
      </div>
    `;
  }

  get type() {
    return this.#type;
  }

  set type(value) {
    this.#type = value;
  }

  get category() {
    return this.#category;
  }

  defineTexts(...texts) {
    this.#noCardsTexts = texts;
  }

  #buildNoCardsTexts() {
    const createTagP = (txt) => `<p class="info-text">${txt}</p>`;
    return this.#noCardsTexts.map((txt) => createTagP(txt)).join("");
  }

  #getTemplate() {
    const mapTemplates = {
      loading: this.#loandingTemplate,
      empty: this.#emptyTemplate,
      error: this.#errorTemplate,
    };
    return mapTemplates[this.#type];
  }

  #randomImgFile() {
    const n = this.#type === "empty" ? 4 : 2;
    Math.floor(Math.random() * n) + 1;
    return `${this.#type}-${n}.svg`;
  }

  #pathHandler() {
    if (this.#type === "error" || this.#type === "empty") {
      const imgFile = this.#randomImgFile();
      PathManager.updateAsset(`#${this.category}-${this.type}-img`, imgFile);
    }
  }

  #render() {
    this.#container.insertAdjacentHTML("beforeend", this.#getTemplate());
  }

  remove() {
    this.#container.querySelector(".card-state").remove();
  }

  init() {
    this.#render();
    this.#pathHandler();
  }
}
