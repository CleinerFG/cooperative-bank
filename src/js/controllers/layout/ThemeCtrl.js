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

  #updateThemeIcon(theme) {
    this.#pathManager.updatePath(
      "asset",
      "#theme-icon",
      "theme",
      `${theme}-mode.svg`
    );
  }

  updateAssets(assetsHandler) {
    const theme = this.#themeView.bodyTheme;
    this.#updateThemeIcon(theme);
    // assetsHandler(theme);
  }

  #init() {
    this.updateAssets();
    this.#themeView.applyStoredTheme(this.updateAssets.bind(this));
    this.#themeView.btnHandler(this.updateAssets.bind(this));
  }
}
