import { PathManager } from "../utils/PathManager.js";

export class CardState {
  #container;
  #category;
  #type;
  #emptyCardsTexts = [];
  constructor(container, category) {
    this.#container = container;
    this.#category = category;
  }

  set type(value) {
    if (this.#type) this.#remove();
    this.#type = value;
    this.#initState();
  }

  defineTexts(...texts) {
    this.#emptyCardsTexts = texts;
  }

  #buildTemplate(content, className = "") {
    return `
      <article class="card-state ${className}">
        ${content}
      </article>
    `;
  }

  #getLoadingTemplate() {
    return this.#buildTemplate(`
      <header class="card-state__header"></header>
      <main class="card-state__content">
        ${this.#buildLoadingItems(3)}
      </main>
      <footer class="card-state__footer"></footer>
    `, "card-state__loading");
  }

  #getEmptyTemplate() {
    const imgId = `${this.#category}-${this.#type}-img`;
    return this.#buildTemplate(`
      <img id="${imgId}" class="card-state-img">
      <div class="card-state__text">
        ${this.#buildEmptyCardsTexts()}
      </div>
    `, "card-state__empty");
  }

  #getErrorTemplate() {
    const imgId = `${this.#category}-${this.#type}-img`;
    return this.#buildTemplate(`
      <img id="${imgId}" class="card-state__img">
      <div class="card-state__text">
        <p class="info-text">Oops! Something went wrong while trying to load the ${this.#category} data.</p>
        <p class="info-text">Please check your internet connection and try again later.</p>
      </div>
    `, "card-state__error");
  }

  #buildLoadingItems(count) {
    return Array(count).fill(`
      <div class="card-state__item">
        <span class="card-state__label"></span>
        <span class="card-state__value"></span>
      </div>
    `).join("");
  }

  #buildEmptyCardsTexts() {
    return this.#emptyCardsTexts.map(txt => `<p class="info-text">${txt}</p>`).join("");
  }

  #getTemplate() {
    const templates = {
      loading: this.#getLoadingTemplate(),
      empty: this.#getEmptyTemplate(),
      error: this.#getErrorTemplate(),
    };
    return templates[this.#type];
  }

  #randomImgFile() {
    const imgCount = this.#type === "empty" ? 4 : 2;
    const n = Math.floor(Math.random() * imgCount) + 1;
    return `${this.#type}-${n}.svg`;
  }

  #pathHandler() {
    if (["error", "empty"].includes(this.#type)) {
      const imgFile = this.#randomImgFile();
      PathManager.updateAsset(`#${this.#category}-${this.#type}-img`, imgFile);
    }
  }

  #render() {
    this.#container.insertAdjacentHTML("beforeend", this.#getTemplate());
  }

  #remove() {
    this.#container.querySelector(".card-state").remove();
  }

  #initState() {
    this.#render();
    this.#pathHandler();
  }
}
