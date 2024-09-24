import { ThemeView } from "../../js/views/layout/ThemeView.js";

export class PathManager {
  static #assetsPaths = {
    iconsdark: "/src/assets/icons/dark/",
    iconslight: "/src/assets/icons/light/",
    images: "/src/assets/images/",
  };

  static #htmlPaths = {
    home: "/src/pages/home/",
    menu: "/src/pages/menu/",
    loans: "/src/pages/loans/",
    investments: "/src/pages/investments/",
  };

  static getElement(selector) {
    return document.querySelector(selector);
  }

  static updateAsset(selector, filename) {
    const element = PathManager.getElement(selector);
    element.setAttribute("src", PathManager.#assetsPaths["images"] + filename);
  }

  static updateIcon(selector, filename) {
    const element = PathManager.getElement(selector);
    const theme = ThemeView.getStoredTheme();
    element.setAttribute(
      "src",
      PathManager.#assetsPaths[`icons${theme}`] + filename
    );
  }

  static updateHtml(selector, pathKey, filename) {
    const element = PathManager.getElement(selector);
    element.setAttribute("href", PathManager.#htmlPaths[pathKey] + filename);
  }
}
