import { InputView } from "./InputView.js";

export class LookupInputView extends InputView {
  _build() {
    return `
      <div class="form-group__input-group">
        <label for="${this._id}" class="label form-group__label">${this._labelText}</label>
        <div class="input__container">
          <input id="${this._id}" type="text" name="${this._id}" placeholder="${this._placeholder}" aria-label="${this._labelText}"
          class="input form-group__input">
          <input id="${this._id}-result" type="text" class="input form-group__input" disabled>
        </div>
        <span id="${this._id}-error" class="error-message""></span>
      </div>`;
  }
}
