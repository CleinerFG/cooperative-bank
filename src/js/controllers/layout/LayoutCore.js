import { HeaderCtrl } from "./HeaderCtrl.js";
import { FooterCtrl } from "./FooterCtrl.js";
import { ThemeCtrl } from "./ThemeCtrl.js";

export class LayoutCore {
  static #themeCtrl = new ThemeCtrl();
  static #headerCtrl = new HeaderCtrl();
  static #footerCtrl = new FooterCtrl();

  static init() {
    LayoutCore.#headerCtrl.init();
    LayoutCore.#footerCtrl.init();
    LayoutCore.#themeCtrl.init();
  }
}
