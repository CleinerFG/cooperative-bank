import { Modal } from './Modal.js';
import { TransactionPasswordFormCtrl } from './TransactionPasswordFormCtrl.js';

/**
 * Specifically designed for confirming actions via a numeric transaction password.
 *
 * @class
 * @extends Modal
 */
export class ConfirmActionModal extends Modal {
  get _modalContent() {
    return `
      <h2>Confirm Action</h2>
      <p>Enter the numeric transaction password</p>
    `;
  }

  _setup() {
    new TransactionPasswordFormCtrl();
  }
}
