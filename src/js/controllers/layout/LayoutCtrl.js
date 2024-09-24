import { HeaderView } from "../../views/layout/HeaderView.js";
import { FooterView } from "../../views/layout/FooterView.js";
import { ThemeView } from "../../views/layout/ThemeView.js";

export class LayoutCtrl {
  constructor() {
    this.#init();
  }

  #init() {
    new HeaderView();
    new FooterView();
    new ThemeView();
  }
}
