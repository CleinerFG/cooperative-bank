import { Modal } from './Modal.js';
import { translate } from '../../i18n/Translator.js';

export default class NotAuthModal extends Modal {
  _resolvePromise;
  _redirectPromise = new Promise((resolve) => (this._resolvePromise = resolve));

  constructor() {
    super('not-auth');
    super._init();
  }

  get _headerTemplate() {
    return `<h2 class="modal-title">${translate('notAuthTitle')}</h2>`;
  }

  get _contentTemplate() {
    return `
      <img src="/app/static/assets/images/unauthorized.svg"/>
      <p class="info-text">${translate('notAuthMsg')}</p>
    `;
  }

  get _footerTemplate() {
    return `<button id="redirect" class="btn">OK</button>`;
  }

  _redirectToLogin() {
    this._resolvePromise();
    window.location.href = '/login';
  }

  _handleRedirect() {
    this._footerElement
      .querySelector('#redirect')
      .addEventListener('click', this._redirectToLogin.bind(this));
    this._closeModalBtnElement.addEventListener(
      'click',
      this._redirectToLogin.bind(this)
    );
  }

  _setListeners() {
    super._setListeners();
    this._handleRedirect();
  }

  _setup() {
    setTimeout(this._redirectToLogin.bind(this), 5000);
  }
}
