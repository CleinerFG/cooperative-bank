import { PageView } from '../../../global/js/views/PageView.js';
import { publicRouter } from '../core/publicRouter.js';

export class PublicPageView extends PageView {
  static _ASSETS_PATH = '/public/static/assets';

  _handleRoutes() {
    const anchors = document.querySelectorAll('.public-link');
    anchors.forEach((element) => {
      element.addEventListener('click', (ev) => {
        ev.preventDefault();
        publicRouter.navigateTo(element.getAttribute('href'));
      });
    });
  }

  _init() {
    super._init();
    this._handleRoutes();
  }
}
