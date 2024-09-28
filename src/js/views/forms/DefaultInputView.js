import { InputView } from "./InputView.js";

export class DefaultInputView extends InputView {
  _build() {
    return `
    <div class="form-group__inp-group">
      <label for="${this._id}" class="label form-group__label">${this._labelText}</label>
      <input id="${this._id}" type="${this._type}" inputmode="${this._inputmode}" name="${this._id}" placeholder="${this._placeholder}" aria-label="${this._labelText}"
      class="inp form-group__inp ${this._cssClass}">
      <span id="${this._id}-error" class="error-message"></span>
    </div>`;
  }
}
