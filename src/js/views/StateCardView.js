import { PathManager } from "../utils/PathManager.js";

export class StateCardView {
  #container;
  #category;
  #type;
  #noCardsTexts = [];
  #templates = {
    loading: `
      <article class="card card-data loading">
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
      </article>`,
    without: `
      <div class="card-state">
        <img id="${this.#category}-${this.#type}-img" class="card-state-img">
        <div class="card-state__text">
        ${this.#buildNoCardsTexts()}
        </div>
      </div>
    `,
    error: `
      <div class="card-state">
        <img id="${this.#category}-${this.#type}-img" class="card-state__img">
        <div class="card-state__text">
          <p class="info-text">Oops! Something went wrong while trying to load the data. </p>
          <p class="info-text">Please check your internet connection and try again later.</p>
        </div>
      </div>
    `,
  };
  constructor(container, category) {
    this.#container = container;
    this.#category = category;
  }

  get type() {
    return this.#type;
  }

  set type(value) {
    this.#type = value;
  }

  defineTexts(...texts) {
    this.#noCardsTexts = texts;
  }

  #buildNoCardsTexts(...texts) {
    const createTagP = (txt) => `<p class="info-text">${txt}</p>`;
    return this.#noCardsTexts.map((txt) => createTagP(txt)).join("");
  }

  #getTemplate() {
    return this.#templates[this.#type];
  }

  #randomImgFile() {
    const n = this.#type === "without" ? 4 : 2;
    Math.floor(Math.random() * n) + 1;
    return `${this.#type}-card-${n}.svg`;
  }

  #pathHandler() {
    if (this.#type === "error" || this.#type === "without") {
      const imgFile = this.#randomImgFile();
      PathManager.updateAsset(`#${this.#category}-${this.#type}-img`, imgFile);
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
