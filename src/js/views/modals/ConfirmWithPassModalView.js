import { ModalView } from "./ModalView.js";
import { DefaultInputView } from "../forms/DefaultInputView.js";

export class ConfirmWithPassModalView extends ModalView {
  get _modalContent() {
    return `
      <h2>Confirm With Password</h2>
      <p>To confirm your action, enter the numeric transaction password</p>
    `;
  }

  _inputHandler() {
    const params = {
      container: document.querySelector(".modal__content"),
      id: "password",
      type: "password",
      strictToNumber: true,
    };
    const inpView = new DefaultInputView(params);
    inpView.init();
  }

  _init() {
    super._init();
    this._inputHandler();
  }
}
