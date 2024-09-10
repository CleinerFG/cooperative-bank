import { InputView } from "./InputView.js";

export class DefaultInputView extends InputView {
  _build() {
    return `
    <div class="form-group__input-group">
      <label for="${this._id}" class="label form-group__label">${this._labelText}</label>
      <input id="${this._id}" type="text" inputmode="${this._inputmode}" name="${this._id}" placeholder="${this._placeholder}" aria-label="${this._labelText}"
      class="input form-group__input">
      <span id="${this._id}-error"></span>
    </div>`;
  }

  _init(){
    super._init()
    this._setValidators()
  }
}
