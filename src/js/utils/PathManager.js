import { Theme } from "../../js/components/layout/Theme.js";

/**
 * Utility class for managing and updating asset and HTML pages paths in DOM elements.
 *
 * @class
 */
export class PathManager {
  /**
   * Paths for asset files, grouped by category (e.g., icons for light and dark themes, images).
   * @private
   * @static
   */
  static #assetsPaths = {
    iconsdark: "/src/assets/icons/dark/",
    iconslight: "/src/assets/icons/light/",
    images: "/src/assets/images/",
  };

  /**
   * Paths for HTML page directories.
   * @private
   * @static
   */
  static #htmlPaths = {
    home: "/src/pages/home/",
    menu: "/src/pages/menu/",
    loans: "/src/pages/loans/",
    investments: "/src/pages/investments/",
  };

  /**
   * Retrieves a DOM element by its CSS selector.
   *
   * @public
   * @static
   * @param {string} selector - The CSS selector of the element to retrieve.
   * @returns {HTMLElement|null} The selected DOM element, or null if not found.
   */
  static getElement(selector) {
    return document.querySelector(selector);
  }

  /**
   * Updates the `src` attribute of an element with an image path.
   * Fetches the path from the `images` category in `#assetsPaths`.
   *
   * @public
   * @static
   * @param {string} selector - The CSS selector of the element to update.
   * @param {string} filename - The filename of the image to set.
   */
  static updateAsset(selector, filename) {
    const element = PathManager.getElement(selector);
    element.setAttribute("src", PathManager.#assetsPaths["images"] + filename);
  }

  /**
   * Updates the `src` attribute of an element with an icon path based on the current theme.
   * Selects the appropriate path from either `iconsdark` or `iconslight` in `#assetsPaths`.
   *
   * @public
   * @static
   * @param {string} selector - The CSS selector of the icon element to update.
   * @param {string} filename - The filename of the icon to set.
   */
  static updateIcon(selector, filename) {
    const element = PathManager.getElement(selector);
    const theme = Theme.getStoredTheme();
    element.setAttribute(
      "src",
      PathManager.#assetsPaths[`icons${theme}`] + filename
    );
  }

  /**
   * Updates the `href` attribute of an element with an HTML path.
   * Fetches the path based on the key provided in `#htmlPaths`.
   *
   * @public
   * @static
   * @param {string} selector - The CSS selector of the element to update.
   * @param {string} pathKey - The key in `#htmlPaths` corresponding to the desired page path.
   * @param {string} filename - The filename to append to the HTML path.
   */
  static updateHtml(selector, pathKey, filename) {
    const element = PathManager.getElement(selector);
    element.setAttribute("href", PathManager.#htmlPaths[pathKey] + filename);
  }
}
