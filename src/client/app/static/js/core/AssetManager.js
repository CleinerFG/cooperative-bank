import { Theme } from "../../js/components/layout/Theme.js";

/**
 * Utility class for managing and updating asset paths in DOM elements.
 *
 * @class
 */
export class AssetManager {
  /**
   * Paths for asset files, grouped by category (e.g., icons for light and dark themes, images).
   * 
   * @private
   * @static
   */
  static #assetsPaths = {
    icons_dark: "/app/static/assets/icons/dark/",
    icons_light: "/app/static/assets/icons/light/",
    images: "/app/static/assets/images/",
  };

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
    const element = document.querySelector(selector);
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
    const element = document.querySelector(selector);
    const theme = Theme.storedTheme;
    element.setAttribute(
      "src",
      PathManager.#assetsPaths[`icons_${theme}`] + filename
    );
  }
}
