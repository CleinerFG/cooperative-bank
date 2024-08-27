import { ThemeView } from "../../views/layout/ThemeView.js";

export class ThemeCtrl {
  #themeView;
  constructor() {
    this.#themeView = new ThemeView();
  }

  init() {
    this.#themeView.init();
  }
}
