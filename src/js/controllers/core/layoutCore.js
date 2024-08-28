import { HeaderCtrl } from "../layout/HeaderCtrl.js";
import { FooterCtrl } from "../layout/FooterCtrl.js";
import { ThemeCtrl } from "../layout/ThemeCtrl.js";

export class LayoutCore {
  #themeCtrl;
  #headerCtrl;
  #footerCtrl;
  constructor() {
    this.#themeCtrl = new ThemeCtrl();
    this.#headerCtrl = new HeaderCtrl();
    this.#footerCtrl = new FooterCtrl();
    this.#init();
  }

  #init() {
    this.#headerCtrl.init();
    this.#footerCtrl.init();
    this.#themeCtrl.init();
  }
}
