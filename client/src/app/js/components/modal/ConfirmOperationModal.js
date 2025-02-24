import '../../../../global/js/types/serverResponseType.js';
import { ASSETS_ROUTE } from '../../constants/routes.js';
import { Modal } from './Modal.js';
import { TransactionPasswordFormCtrl } from './TransactionPasswordFormCtrl.js';

/**
 * Specifically designed for confirming actions via a numeric transaction password.
 *
 * @class
 * @extends Modal
 */
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
    return document.getElementById('confirm-pass-form');
  }

  get _headerTemplate() {
    return '<h2 class="modal-title">Authorize operation</h2>';
  }

  get _contentTemplate() {
    return `
      <p class="info-text">Enter the numeric transaction password</p>
    `;
  }

  get _footerTemplate() {
    return '';
  }

  #authMessageHandler() {
    const header = `
      <img class="icon-success" src="${ASSETS_ROUTE}/icons/icon-success.svg" alt="Success">
      <h2>Success</h2>
    `;
    const message = `<span class="info-text">The operation was authorized.</span>`;
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
    this.#form = new TransactionPasswordFormCtrl();
  }
}
