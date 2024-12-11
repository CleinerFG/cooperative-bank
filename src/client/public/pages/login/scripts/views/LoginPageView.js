import { PageView } from '../../../../js/views/PageView.js';

/**
 * Represents the view for the public login.
 *
 * @class
 * @extends PageView
 */

export class LoginPageView extends PageView {
  /**
   * Returns Header template as a HTML string
   * 
   * @protected
   * @type {string}
   */
  get _headerTemplate() {
    return `    
    <header class="header">
      <a class="brand-container" href="../index.html">
        <img class="icon brand-icon" src="../../assets/landing-page/icon-globe.svg" alt="Globe">
        <span class="brand-name">COOPERATIVE BANK</span>
      </a>
    </header>`;
  }

    /**
   * Returns Footer template as a HTML string
   * 
   * @protected
   * @type {string}
   */
  get _footerTemplate() {
    return `
    <footer class="footer">
      <a href="#">I am not a customer</a>
    </footer>
    `;
  }

  _pageContent() {
    return `
    <div class="container">
    ${this._headerTemplate}
    <main class="content-container">
      <div class="info-container">
        <h1 class="login-h1">Access your Cooperative Bank Account</h1>
      </div>
      <div class="form-container"></div>
    </main>
    ${this._footerTemplate}
  </div>
    `;
  }
}
