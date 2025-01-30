import LoginPageView from '../login/LoginPageView.js';

export default class RegisterPageView extends LoginPageView {
  get _infoText() {
    return 'Join the Cooperative Bank';
  }

  get _footerTemplate() {
    return `
    <footer class="login-register footer">
      <a href="/login">I am a customer</a>
    </footer>
    `;
  }

  get _pageTitle() {
    return 'Cooperative Bank - Register';
  }

  async _initComponents() {
    const RegisterFormCtrl = await import('./controllers/RegisterFormCtrl.js');

    new RegisterFormCtrl.default();
  }
}
