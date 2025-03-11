import { translate } from '../../../../global/js/i18n/Translator.js';
import '../../../../global/js/types/serverResponseType.js';
import { ASSETS_ROUTE } from '../../constants/routes.js';
import { Modal } from './Modal.js';
import { OperationPasswordFormCtrl } from './OperationPasswordFormCtrl.js';

export class ConfirmOperationModal extends Modal {
  #form;

  constructor() {
    super('confirm-operation');
    this._init();
  }

  /**
   * @note When inplemented return real token
   * @returns {Promise<boolean>}
   */
  async getToken() {
    return await this._tokenPromise;
  }

  get #successBtnElement() {
    return this._footerElement.querySelector('.btn-success');
  }

  get #formElement() {
    return this._contentElement.querySelector('#confirm-pass-form');
  }

  get _headerTemplate() {
    return `<h2 class="modal-title">${translate('authOperation')}</h2>`;
  }

  get _contentTemplate() {
    return `
      <p class="info-text">${translate('enterNumOpPass')}</p>
    `;
  }

  get _footerTemplate() {
    return '';
  }

  #authMessageHandler() {
    const header = `
      <img class="modal-icon" src="${ASSETS_ROUTE}/icons/icon-success.svg" alt="Success">
      <h2>${translate('success')}</h2>
    `;
    const message = `<span class="info-text">${translate('authOperationSuccess')}</span>`;
    const btn = `<button class="btn btn-success">OK</button>`;
    this._headerElement.innerHTML = header;
    this._contentElement.innerHTML = message;
    this._footerElement.innerHTML = btn;
  }

  #successBtnHandler() {
    this.#successBtnElement.addEventListener(
      'click',
      this._handleCloseModal.bind(this)
    );
  }

  async #handleFormOnSubmit() {
    /**
     * @type {ServerFormResponse}
     */
    const res = await this.#form.getResponse();
    if (res.token) {
      this._token = res.token;
      this.#authMessageHandler();
      this.#successBtnHandler();
    }
  }

  _setListeners() {
    super._setListeners();
    this.#formElement.addEventListener(
      'submit',
      this.#handleFormOnSubmit.bind(this)
    );
  }

  async _setup() {
    this.#form = new OperationPasswordFormCtrl();
  }
}
