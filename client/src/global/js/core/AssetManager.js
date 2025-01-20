import { getStoredTheme } from '../utils/themeUtils.js';

/**
 * Utility class for managing and updating asset paths in DOM elements.
 */
export class AssetManager {
  static BASE_PATH = {
    app: '/app/static/assets/',
    public: '/public/static/assets/',
  };

  /**
   * @type {'app' | 'public'}
   */
  static get #spaLocation() {
    return window.location.pathname.includes('/app') ? 'app' : 'public';
  }

  /**
   * @type {string}
   */
  static get #iconsPath() {
    const pathMap = {
      app: AssetManager.BASE_PATH.app + 'icons/' + getStoredTheme() + '/',
      public: AssetManager.BASE_PATH.public + 'icons/',
    };
    return pathMap[AssetManager.#spaLocation];
  }

  /**
   * @type {string}
   */
  static get #imagesPath() {
    return AssetManager.BASE_PATH[this.#spaLocation] + 'images/';
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
