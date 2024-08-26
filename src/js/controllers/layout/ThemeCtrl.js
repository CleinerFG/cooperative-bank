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

  #updateAssetPath(path, theme) {
    const basePath = "/src/assets/icons/";
    const iconPattern = /\/([^\/]+)\.svg$/;

    const iconMatch = path.match(iconPattern);
    const icon = iconMatch[0];

    return basePath + theme + icon;
  }

  #updateThemeIcon(theme) {
    this.#pathManager.updatePath(
      "asset",
      "#theme-icon",
      `icons${theme}`,
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
