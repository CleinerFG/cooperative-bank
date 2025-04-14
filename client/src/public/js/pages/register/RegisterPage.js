import LoginPage from '../login/LoginPage.js';
import { translate } from '../../../../global/js/i18n/Translator.js';

export default class RegisterPage extends LoginPage {
  get _infoText() {
    return translate('joinBank');
  }

  get _footerTemplate() {
    return `
    <footer class="login-register footer">
      <a href="/login" data-link>${translate('iCustomer')}</a>
    </footer>
    `;
  }

  get _pageTitle() {
    return translate('register');
  }

  async _setup() {
    this._handleRoutes('[data-link]');
    const RegisterFormCtrl = await import('./RegisterFormCtrl.js');
    new RegisterFormCtrl.default();
  }
}
