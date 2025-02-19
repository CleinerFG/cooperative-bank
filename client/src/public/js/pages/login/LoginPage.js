import { Page } from '../../../../global/js/core/Page.js';
import { ASSETS_ROUTE } from '../../constants/routes.js';
import publicRouter from '../../core/publicRouter.js';

export default class LoginPage extends Page {
  constructor() {
    super();
    this._init();
    this._setup();
  }

  get _headerTemplate() {
    return `
    <header class="header">
      <a class="brand-container" href="/" data-link>
        <img class="icon brand-icon" src="${ASSETS_ROUTE}/icons/icon-globe.svg" alt="Globe">
        <span class="brand-name">COOPERATIVE BANK</span>
      </a>
    </header>
    `;
  }

  get _infoText() {
    return 'Access your Cooperative Bank Account';
  }

  get _mainContainer() {
    return `
    <main class="login-register content-container">
      <div class="info-container">
        <h1 class="login-h1">${this._infoText}</h1>
      </div>
      <div class="form-container">  
      </div>
    </main>
    `;
  }

  get _footerTemplate() {
    return `
    <footer class="login-register footer">
      <a href="/register" data-link>I am not a customer</a>
    </footer>
    `;
  }

  get _pageTitle() {
    return 'Cooperative Bank - Login';
  }

  get _template() {
    return this._headerTemplate + this._mainContainer + this._footerTemplate;
  }

  async _setup() {
    this._handleRoutes(publicRouter, '[data-link]');
    const LoginFormCtrlModule = await import('./LoginFormCtrl.js');
    new LoginFormCtrlModule.default();
  }
}
