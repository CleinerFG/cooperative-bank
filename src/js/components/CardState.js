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

  get #loadingTemplate() {
    return this.#buildTemplate(
      `
      <header class="card-state__header"></header>
      <main class="card-state__content">
        ${this.#buildLoadingItems(3)}
      </main>
      <footer class="card-state__footer"></footer>
    `,
      "card-state__loading"
    );
  }

  get #emptyTemplate() {
    const imgId = `${this.#category}-${this.#type}-img`;
    return this.#buildTemplate(
      `
      <img id="${imgId}" class="card-state-img">
      <div class="card-state__text">
        ${this.#buildEmptyCardsTexts()}
      </div>
    `,
      "card-state__empty"
    );
  }

  get #errorTemplate() {
    const imgId = `${this.#category}-${this.#type}-img`;
    return this.#buildTemplate(
      `
      <img id="${imgId}" class="card-state__img">
      <div class="card-state__text">
        <p class="info-text">Oops! Something went wrong while trying to load the ${
          this.#category
        } data.</p>
        <p class="info-text">Please check your internet connection and try again later.</p>
      </div>
    `,
      "card-state__error"
    );
  }

  #buildLoadingItems(count) {
    return Array(count)
      .fill(
        `
      <div class="card-state__item">
        <span class="card-state__label"></span>
        <span class="card-state__value"></span>
      </div>
    `
      )
      .join("");
  }

  #buildEmptyCardsTexts() {
    return this.#emptyCardsTexts
      .map((txt) => `<p class="info-text">${txt}</p>`)
      .join("");
  }

  #getTemplate() {
    const templates = {
      loading: this.#loadingTemplate,
      empty: this.#emptyTemplate,
      error: this.#errorTemplate,
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
    this.#container.innerHTML = this.#getTemplate();
  }

  #initState() {
    this.#render();
    this.#pathHandler();
  }
}
