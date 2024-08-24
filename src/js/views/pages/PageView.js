import { AbstractMethodError } from "../../errors/AbstractMethodError.js";

export class PageView {
  #body;
  constructor() {
    this.#body = document.body;
    this.#init();
  }

  #insertContent() {
    const main = `
    <main class="main">
    ${this._pageContent()}
    </main>
    `;
    this.#body.insertAdjacentHTML("beforeend", main);
  }

  _pageContent() {
    throw new AbstractMethodError("_pageContent");
  }

  #init() {
    this.#insertContent();
  }
}
