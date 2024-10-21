import { Modal } from "./Modal.js";
import { ConfirmPassFormCtrl } from "./ConfirmPassFormCtrl.js";

export class ConfirmPassModalView extends Modal {
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
