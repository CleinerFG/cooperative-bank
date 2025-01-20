import { PublicPageView } from '../../views/PublicPageView.js';

export default class LoginPageView extends PublicPageView {
  static _ASSETS_PATH = '/public/static/assets';

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
    return this._headerTemplate + this._footerTemplate;
  }

  _initComponents() {}
}
