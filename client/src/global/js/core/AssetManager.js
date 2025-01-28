import { ASSETS_ROUTE as APP_ASSETS_ROUTE } from '../../../app/js/constants/routes.js';
import { ASSETS_ROUTE as PUBLIC_ASSETS_ROUTE } from '../../../public/js/constants/routes.js';
import { getStoredTheme } from '../utils/themeUtils.js';

/**
 * Utility class for managing and updating asset paths in DOM elements.
 */
export class AssetManager {
  static get #spaLocation() {
    return window.location.pathname.includes('/app') ? 'app' : 'public';
  }

  static get #iconsPath() {
    const pathMap = {
      app: APP_ASSETS_ROUTE + '/icons/' + getStoredTheme() + '/',
      public: PUBLIC_ASSETS_ROUTE + '/icons/',
    };
    return pathMap[AssetManager.#spaLocation];
  }

  static get #imagesPath() {
    const pathMap = {
      app: APP_ASSETS_ROUTE,
      public: PUBLIC_ASSETS_ROUTE,
    };
    return pathMap[this.#spaLocation] + '/images/';
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
