import { ThemeView } from "../../views/layout/ThemeView.js";
import pathUtil from "../../utils/PathManager.js";

class ThemeCtrl {
  #themeView;
  #pathManager;
  constructor() {
    this.#themeView = new ThemeView();
    this.#pathManager = pathUtil;
    this.layoutAssetHandlers = [];
    this.pageAssetHandlers = [];
    // this.init();
  }

  get theme() {
    this.#themeView.bodyTheme;
  }

  init() {
    this.#themeView.init();
  }
}

export const themeCtrl = new ThemeCtrl();
