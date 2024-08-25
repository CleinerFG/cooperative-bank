import { ThemeView } from "../../views/layout/ThemeView.js";
import pathUtil from "../../utils/PathManager.js";

export class ThemeCtrl {
  #themeView;
  #pathManager;
  constructor() {
    this.#themeView = new ThemeView();
    this.#pathManager = pathUtil;
    this.#init();
  }

  get #theme() {
    return this.#themeView.bodyTheme;
  }

  #updateThemeIcon() {
    this.#pathManager.updatePath(
      "asset",
      "#theme-icon",
      "theme",
      `${this.#theme}-mode.svg`
    );
  }

  _updateAssets(assetsHandler) {
    assetsHandler(this.#theme);
  }

  #init() {
    this.#updateThemeIcon();
    const icons = document.querySelectorAll(".icon");
    this.#themeView.applyStoredTheme(icons);
    this.#themeView.btnHandler(icons);
  }
}