import { AbstractMethodError } from "../errors/AbstractMethodError.js";

export class PageView {
  #bodyElement = document.body;
  constructor() {
    this.#init();
  }

  get #template() {
    return `
      <main class="main">
      ${this._pageContent()}
      </main>
    `;
  }

  _pageContent() {
    throw new AbstractMethodError("_pageContent");
  }

  #render() {
    this.#bodyElement.insertAdjacentHTML("beforeend", this.#template);
  }

  #init() {
    this.#render();
  }
}
