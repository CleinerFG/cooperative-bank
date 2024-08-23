import { AbstractMethodError } from "../../errors/AbstractMethodError.js";
import { HeaderCtrl } from "../../controllers/layout/HeaderCtrl.js";
import { FooterCtrl } from "../../controllers/layout/FooterCtrl.js";
import { ThemeView } from "../layout/ThemeView.js";

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

  #insertContent() {
    const body = `
    <body data-theme="${this.#theme}">
    <main class="main">
    ${this._pageContent}
    </main>
    </body>
    `;
    this.#html.insertAdjacentElement("beforeend", body);
  }

  _pageContent() {
    throw new AbstractMethodError("_pageContent");
  }

  #init() {
    this.#insertContent();
    new HeaderCtrl();
    new FooterCtrl();
    new ThemeView().initializeTheme();
  }
}
