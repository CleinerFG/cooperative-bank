import { ThemeView } from "../../views/layout/ThemeView.js";

class ThemeCtrl {
  #themeView;
  constructor() {
    this.#themeView = new ThemeView();
    this.layoutAssetHandlers = [];
    this.pageAssetHandlers = [];
  }

  get theme() {
    this.#themeView.bodyTheme;
  }

  init() {
    this.#themeView.init(this.buildAssetPath);
  }
}

export const themeCtrl = new ThemeCtrl();
