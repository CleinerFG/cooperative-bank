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
  }


  addLayoutAssetHandler(handler) {
    this.layoutAssetHandlers.push(handler);
  }

  addPageAssetHandler(handler) {
    this.pageAssetHandlers.push(handler);
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
    this.layoutAssetHandlers.forEach((handler) =>
      handler(this.#pathManager, theme)
    );
    this.pageAssetHandlers.forEach((handler) =>
      handler(this.#pathManager, theme)
    );
  }

  init() {
    this.#themeView.init(this.updateAssets.bind(this));
  }
}

export const themeCtrl = new ThemeCtrl();
