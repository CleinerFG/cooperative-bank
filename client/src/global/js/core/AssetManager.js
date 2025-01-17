import { getStoredTheme } from '../utils/themeUtils.js';

/**
 * Utility class for managing and updating asset paths in DOM elements.
 */
export class AssetManager {
  static BASE_PATH = '/app/static/assets/';

  static get #iconsPath() {
    return AssetManager.BASE_PATH + 'icons/' + getStoredTheme() + '/';
  }

  static get #imagesPath() {
    return AssetManager.BASE_PATH + 'images/';
  }

  /**
   * @param {'icon' | 'img'} type
   * @param {string} selector
   * @param {string} filename
   */
  static updateAsset(type, selector, filename) {
    const paths = {
      icon: this.#iconsPath,
      img: this.#imagesPath,
    };
    const element = document.querySelector(selector);
    element.setAttribute('src', paths[type] + filename);
  }
}
