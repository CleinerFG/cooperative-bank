import { InputView } from "./InputView.js";

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

  _switchVisibility(ev, assetHandler) {
    // const btn = document.querySelector(`${this._id}-visibility"`);
    const btn = ev.currentTarget;
    btn.addEventListener("click", () => {
      const visibility = this._inputElement.dataset.visibility;
      // Alternative text
      const alt = visibility === "on" ? "Closed eye" : "Opened eye";
      document.querySelector(".inp__visibility-icon").setAttribute("alt", alt);

      // Switching visibility and SVG file
      const state = visibility === "off" ? "on" : "off";
      // assetHandler(state);
      this._inputElement.dataset.visibility = state;
    });
  }

  _listenersHandler() {
    const btnSwitch = document.querySelector(`#${this._id}-visibility`);
    btnSwitch.addEventListener("click", (ev) => {
      // this._toggleInpType.bind(this);
      this._toggleInpType();
      this._switchVisibility(ev, undefined);
    });
  }
}
