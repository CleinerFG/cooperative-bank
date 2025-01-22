import('../../../css/pages/login-register.css');

import { PublicPageView } from '../../views/PublicPageView.js';

export default class LoginPageView extends PublicPageView {
  get _headerTemplate() {
    return `
    <header class="header">
      <a class="brand-container" href="/">
        <img class="icon brand-icon" src="${PublicPageView._ASSETS_PATH}/icons/icon-globe.svg" alt="Globe">
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
    <main class="content-container">
      <div class="info-container">
        <h1>${this._infoText}</h1>
      </div>
      <div class="form-container">  
      </div>
    </main>
    `;
  }

  get _footerTemplate() {
    return `
    <footer class="footer">
      <a href="/register">I am not a customer</a>
    </footer>
    `;
  }

  get _pageTitle() {
    return 'Cooperative Bank - Login';
  }

  get _template() {
    return this._headerTemplate + this._mainContainer + this._footerTemplate;
  }

  async _initComponents() {
    const LoginFormCtrl = await import('./controllers/LoginFormCtrl.js');

    new LoginFormCtrl.default();
  }
}
