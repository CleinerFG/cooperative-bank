import { PageView } from '../../../global/js/views/PageView.js';
import { publicRouter } from '../core/publicRouter.js';

export class PublicPageView extends PageView {
  _handleRoutes() {
    const anchors = document.querySelectorAll('[data-link]');
    anchors.forEach((element) => {
      element.addEventListener('click', (e) => {
        e.preventDefault();
        publicRouter.navigateTo(element.getAttribute('href'));
      });
    });
  }

  _init() {
    super._init();
    this._handleRoutes();
  }
}
