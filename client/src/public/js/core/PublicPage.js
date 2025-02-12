import { Page } from '../../../global/js/core/Page.js';
import publicRouter from './publicRouter.js';

export class PublicPage extends Page {
  _setup() {
    this._handleRoutes(publicRouter, '[data-link]');
  }
}
