import { InputView } from "./InputView.js";

export class SwitchVisibilityInputView extends InputView {
  _build() {
    return `
    <div class="form-group__input-group">
      <label for="${this._id}" class="label form-group__label">${this._labelText}</label>
      <div class="input__container">
        <input id="${this._id}" type="${this._type}" inputmode="${this._inputmode}" name="${this._id}" placeholder="${this._placeholder}" aria-label="${this._labelText}"
        class="input form-group__input">
        <button id="${this._id}-visibility">Switch</button>
      </div>
      <span id="${this._id}-error" class="error-message"></span>
    </div>`;
  }

  _toggleInpType() {
    let type = "text";
    if (this._inputElement.type === "text") type = "password";
    this._inputElement.type = type;
  }

  _listenersHandler() {
    const btnSwitch = document.querySelector(`#${this._id}-visibility`);
    btnSwitch.addEventListener("click", this._toggleInpType.bind(this));
  }
}
