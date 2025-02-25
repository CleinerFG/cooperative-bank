import { ASSETS_ROUTE as APP_ASSETS_ROUTE } from '../../../app/js/constants/routes.js';
import { ASSETS_ROUTE as PUBLIC_ASSETS_ROUTE } from '../../../public/js/constants/routes.js';

class AssetManager {
  get #spaLocation() {
    return window.location.pathname.includes('/app') ? 'app' : 'public';
  }

  get iconsPath() {
    const pathMap = {
      app: APP_ASSETS_ROUTE + '/icons/',
      public: PUBLIC_ASSETS_ROUTE + '/icons/',
    };
    return pathMap[this.#spaLocation];
  }

  /**
   * @param {string} selector
   * @param {string} filename
   */
  updateAsset(selector, filename) {
    const el = document.querySelector(selector);
    el.setAttribute('src', this.iconsPath + filename);
  }
}

export default new AssetManager();
