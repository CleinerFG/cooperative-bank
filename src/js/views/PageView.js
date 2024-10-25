import { AbstractMethodError } from "../errors/AbstractMethodError.js";

export class PageView {
  #bodyElement = document.body;
  #headElement = document.head;
  constructor() {
    this.#init();
  }

  get #template() {
    return `
      <main class="main">
      ${this._pageContent()}
      </main>
      ${this._scriptsContent}
    `;
  }

  get _headContent() {
    // Add if exists tags
  }

  get _scriptsContent() {
    // Add scripts if exists
  }

  _pageContent() {
    throw new AbstractMethodError("_pageContent");
  }

  #render() {
    if (this._headContent) {
      this.#headElement.insertAdjacentHTML("beforeend", this._headContent);
    }
    this.#bodyElement.insertAdjacentHTML("beforeend", this.#template);
  }

  #init() {
    this.#render();
  }
}
