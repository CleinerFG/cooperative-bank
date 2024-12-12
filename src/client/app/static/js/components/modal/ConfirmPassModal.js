import { Modal } from './Modal.js';
import { ConfirmPassFormCtrl } from './ConfirmPassFormCtrl.js';

/**
 * Specifically designed for confirming actions via a numeric transaction password.
 *
 * @class
 * @extends Modal
 */
export class ConfirmPassModal extends Modal {
  get _modalContent() {
    return `
      <h2>Confirm Password</h2>
      <p>To confirm your action, enter the numeric transaction password</p>
    `;
  }

  _initControllers() {
    new ConfirmPassFormCtrl();
  }
}
