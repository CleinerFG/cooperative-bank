import { Input } from "./Input.js";
import { PathManager } from "../../utils/PathManager.js";

/**
 * Represents a password input field with visibility toggle functionality.
 * @class
 * @extends Input
 */
export class PasswordInput extends Input {
  /**
   * Generates the HTML template for the password input field.
   * @protected
   * @returns {string} The HTML as string for the input field, including a visibility toggle button and an error message.
   * @override
   */
  get _template() {
    return `
    <div class="form-group__inp-group">
      <label for="${this._id}" class="label form-group__label">${this._labelText}</label>
      <div class="inp__container container__${this._cssClass}">
        <input id="${this._id}" type="password" inputmode="${this._inputmode}" name="${this._id}" aria-label="${this._labelText}" autocomplete="off"
        class="inp form-group__inp inp-${this._cssClass}" data-visibility="off" data-valid="false">
        <button id="${this._id}-visibility" type="button" class="btn-unset">
          <img id="${this._id}-visibility-icon" class="icon inp__visibility-icon" alt="Closed eye">
        </button>
      </div>
      <span id="${this._id}-error" class="error-message"></span>
    </div>`;
  }

  /**
   * Updates the icon path based on the visibility state.
   * @protected
   * @param {"on" | "off"} state - The state of visibility.
   */
  _updateIconPath(state) {
    PathManager.updateIcon(
      `#${this._id}-visibility-icon`,
      `icon-visibility-${state}.svg`
    );
  }

  /**
   * Toggles the input type between "text" and "password".
   * @protected
   */
  _toggleInpType() {
    const currentType = this.inputElement.type;
    this.inputElement.type = currentType === "text" ? "password" : "text";
  }

  /**
   * Switches the visibility of the password input and updates the icon.
   * @protected
   */
  _switchVisibility() {
    const icon = document.querySelector(`#${this._id}-visibility-icon`);
    const currentState = this.inputElement.dataset.visibility;

    const alt = currentState === "on" ? "Closed eye" : "Opened eye";
    icon.setAttribute("alt", alt);

    const newState = currentState === "off" ? "on" : "off";
    this._updateIconPath(newState);
    this.inputElement.dataset.visibility = newState;
  }

  /**
   * Sets up event listeners for the password visibility toggle button.
   * @protected
   */
  _setupListeners() {
    const btnSwitch = document.querySelector(`#${this._id}-visibility`);
    btnSwitch.addEventListener("click", () => {
      this._switchVisibility();
      this._toggleInpType();
    });
  }

  /**
   * Initializes the password input, rendering the input field, setting up listeners and updating the icon.
   * @public
   * @override
   */
  init() {
    super.init();
    this._setupListeners();
    this._updateIconPath("off");
  }
}
