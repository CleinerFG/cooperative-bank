import { simulateWait } from '../../../../global/js/utils/tests.js';
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
    super();
    this._init();
  }

  /**
   * @note When inplemented return token
   * @returns {Promise<boolean>}
   */
  async getToken() {
    return await this._tokenPromise;
  }

  get #formElement() {
    return document.getElementById('confirm-pass-form');
  }

  get _modalContent() {
    return `
      <h2>Confirm Action</h2>
      <p>Enter the numeric transaction password</p>
    `;
  }

  async #handleFormOnSubmit() {
    console.log('Form response:');
    const token = await this.#form.getResponse();
    console.log(token);
    this._token = token.success;
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
