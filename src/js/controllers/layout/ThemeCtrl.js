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

  get theme() {
    this.#themeView.bodyTheme;
  }

  addLayoutAssetHandler(handler) {
    this.layoutAssetHandlers.push(handler);
  }

  addPageAssetHandler(handler) {
    this.pageAssetHandlers.push(handler);
  }

  #setIcons() {
    const theme = this.#themeView.bodyTheme;
    console.log(theme);
    this.#pathManager.updatePath(
      "asset",
      "#theme-icon",
      `icons${theme}`,
      `${theme}-mode.svg`
    );
  }

  updateAssets() {
    const theme = this.#themeView.bodyTheme;
    this.#setIcons(theme);
    this.layoutAssetHandlers.forEach((handler) =>
      handler(this.#pathManager, theme)
    );
    this.pageAssetHandlers.forEach((handler) =>
      handler(this.#pathManager, theme)
    );
  }

  init() {
    this.#themeView.init();
  }
}

export const themeCtrl = new ThemeCtrl();
