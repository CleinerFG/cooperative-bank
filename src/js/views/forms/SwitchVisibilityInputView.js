import { InputView } from "./InputView.js";
import { PathManager } from "../../utils/PathManager.js";

export class SwitchVisibilityInputView extends InputView {
  _build() {
    return `
    <div class="form-group__input-group">
      <label for="${this._id}" class="label form-group__label">${this._labelText}</label>
      <div class="input__container">
        <input id="${this._id}" type="${this._type}" inputmode="${this._inputmode}" name="${this._id}" placeholder="${this._placeholder}" aria-label="${this._labelText}"
        class="input form-group__input" data-visibility="off">
        <button id="${this._id}-visibility">
          <img id="visibility-icon" class="icon inp__visibility-icon" alt="Closed eye">
        </button>
      </div>
      <span id="${this._id}-error" class="error-message"></span>
    </div>`;
  }

  _toggleInpType() {
    let type = "text";
    if (this._inputElement.type === "text") type = "password";
    this._inputElement.type = type;
  }

  _switchVisibility() {
    const icon = document.querySelector(".inp__visibility-icon");
    const currentState = this._inputElement.dataset.visibility;

    const alt = currentState === "on" ? "Closed eye" : "Opened eye";
    icon.setAttribute("alt", alt);

    const newState = currentState === "off" ? "on" : "off";
    this._defineIconPath(newState);
    this._inputElement.dataset.visibility = newState;
  }

  _listenersHandler() {
    const btnSwitch = document.querySelector(`#${this._id}-visibility`);
    btnSwitch.addEventListener("click", () => {
      this._switchVisibility();
      this._toggleInpType();
    });
  }

  _defineIconPath(state) {
    PathManager.updateIcon("#visibility-icon", `icon-visibility-${state}.svg`);
  }

  init() {
    super.init();
    this._listenersHandler();
    this._defineIconPath("off");
  }
}
