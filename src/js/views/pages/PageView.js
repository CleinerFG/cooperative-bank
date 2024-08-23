import { AbstractMethodError } from "../../errors/AbstractMethodError.js";

export class PageView {
  #html;
  #theme;
  constructor() {
    this.#html = document.documentElement;
    this.#theme = "dark";
    this.#init();
  }

  get theme() {
    return this.#theme;
  }

  set theme(value) {
    this.#theme = value;
  }

  _pageContent() {
    throw new AbstractMethodError("_pageContent");
  }

  #init() {
    const body = `
    <body data-theme="${this.#theme}">
    <main class="main">
    ${this._pageContent}
    </body>
    `;
    this.#html.insertAdjacentElement("beforeend", body);
    return;
  }
}
