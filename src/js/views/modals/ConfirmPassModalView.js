import { ModalView } from "./ModalView.js";
import { DefaultInputView } from "../forms/DefaultInputView.js";

export class ConfirmPassModalView extends ModalView {
  get _modalContent() {
    return `
      <h2>Confirm Password</h2>
      <p>To confirm your action, enter the numeric transaction password</p>
      <div class="modal__inp-container"></div>
      <button class="btn">Confirm</button>
    `;
  }

  _inputHandler() {
    const params = {
      container: document.querySelector(".modal__inp-container"),
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
