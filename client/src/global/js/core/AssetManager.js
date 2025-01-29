import { ASSETS_ROUTE as APP_ASSETS_ROUTE } from '../../../app/js/constants/routes.js';
import { ASSETS_ROUTE as PUBLIC_ASSETS_ROUTE } from '../../../public/js/constants/routes.js';

/**
 * Utility class for managing and updating asset paths in DOM elements.
 */
export class AssetManager {
  static get #spaLocation() {
    return window.location.pathname.includes('/app') ? 'app' : 'public';
  }

  static get iconsPath() {
    const pathMap = {
      app: APP_ASSETS_ROUTE + '/icons/',
      public: PUBLIC_ASSETS_ROUTE + '/icons/',
    };
    return pathMap[AssetManager.#spaLocation];
  }

  /**
   * @param {string} selector
   * @param {string} filename
   */
  static updateAsset(selector, filename) {
    const element = document.querySelector(selector);
    element.setAttribute('src', this.iconsPath + filename);
  }
}
