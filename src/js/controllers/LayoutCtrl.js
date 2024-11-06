import { Header } from "../components/layout/Header.js";
import { Footer } from "../components/layout/Footer.js";
import { Theme } from "../components/layout/Theme.js";

export class LayoutCtrl {
  constructor() {
    this.#init();
  }

  #init() {
    new Header();
    new Footer();
    new Theme();
  }
}
