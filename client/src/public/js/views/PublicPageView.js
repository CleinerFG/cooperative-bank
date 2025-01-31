import { PageView } from '../../../global/js/views/PageView.js';
import { publicRouter } from '../core/publicRouter.js';

export class PublicPageView extends PageView {
  _init() {
    super._init();
    this._handleRoutes(publicRouter, '[data-link]');
  }
}
