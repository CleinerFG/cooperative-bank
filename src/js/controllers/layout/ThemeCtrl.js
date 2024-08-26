import { ThemeView } from "../../views/layout/ThemeView.js";
import pathUtil from "../../utils/PathManager.js";

export class ThemeCtrl {
  #themeView;
  #pathManager;
  constructor() {
    this.#themeView = new ThemeView();
    this.#pathManager = pathUtil;
    this.assetHandlers = [];
  }

  addAssetHandler(handler) {
    this.assetHandlers.push(handler);
  }

  #updateThemeIcon(theme) {
    this.#pathManager.updatePath(
      "asset",
      "#theme-icon",
      "theme",
      `${theme}-mode.svg`
    );
  }

  updateAssets() {
    const theme = this.#themeView.bodyTheme;
    this.#updateThemeIcon(theme);
    this.assetHandlers.forEach((h) => h(this.#pathManager, theme));
  }

  init() {
    this.#themeView.init(this.updateAssets.bind(this));
  }
}
