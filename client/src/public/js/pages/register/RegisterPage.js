import LoginPage from '../login/LoginPage.js';
import publicRouter from '../../core/publicRouter.js';

export default class RegisterPage extends LoginPage {
  get _infoText() {
    return 'Join the Cooperative Bank';
  }

  get _footerTemplate() {
    return `
    <footer class="login-register footer">
      <a href="/login" data-link>I am a customer</a>
    </footer>
    `;
  }

  get _pageTitle() {
    return 'Cooperative Bank - Register';
  }

  async _setup() {
    this._handleRoutes(publicRouter, '[data-link]');
    const RegisterFormCtrl = await import('./RegisterFormCtrl.js');
    new RegisterFormCtrl.default();
  }
}
