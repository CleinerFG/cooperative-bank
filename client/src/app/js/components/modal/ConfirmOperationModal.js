import { Modal } from './Modal.js';
import { TransactionPasswordFormCtrl } from './TransactionPasswordFormCtrl.js';

/**
 * Specifically designed for confirming actions via a numeric transaction password.
 *
 * @class
 * @extends Modal
 */
export class ConfirmOperationModal extends Modal {
  _token;

  constructor() {
    super();
    this._init();
  }

  get _modalContent() {
    return `
      <h2>Confirm Action</h2>
      <p>Enter the numeric transaction password</p>
    `;
  }

  /**
   * @type {Promise}
   */
  get token() {
    console.log('token in class');

    console.log(this._token);
    return this._token;
  }

  async _setup() {
    const form = new TransactionPasswordFormCtrl();
    this._token = form.getResponse();
  }
}
