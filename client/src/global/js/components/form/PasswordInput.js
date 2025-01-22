import { Input } from './Input.js';
import { AssetManager } from '../../core/AssetManager.js';

/**
 * Represents a password input field with visibility toggle functionality.
 */
export class PasswordInput extends Input {
  #BTN_VISIBILITY_ID = `${this._id}-visibility-btn`;
  #ICON_VISIBILITY_ID = `${this._id}-visibility-icon`;

  get #btnVisibilityElement() {
    return document.getElementById(this.#BTN_VISIBILITY_ID);
  }

  get #iconVisibilityElement() {
    return document.getElementById(this.#ICON_VISIBILITY_ID);
  }

  get #inpVisibilityState() {
    return this.inputElement.dataset.visibility;
  }

  /**
   * @param {"on" | "off"} value
   */
  set #inpVisibilityState(value) {
    this.inputElement.dataset.visibility = value;
  }

  get _template() {
    return `
    <div class="form-group__inp-group">
      <label for="${this._id}" class="label form-group__label">${this._labelText}</label>
      <div class="inp-container inp-container__pass">
        <input id="${this._id}" type="password" inputmode="${this._inputmode}" name="${this._id}" aria-label="${this._labelText}" autocomplete="off"
        class="inp form-group__inp inp-${this._cssClass}" data-visibility="off" data-valid="false">
        <button id="${this.#BTN_VISIBILITY_ID}" type="button" class="btn-unset">
          <img id="${this.#ICON_VISIBILITY_ID}" class="icon inp__visibility-icon" alt="Closed eye">
        </button>
      </div>
      ${this._errorSpanTemplate}
    </div>`;
  }

  /**
   * @param {"on" | "off"} visibilityState
   */
  _handleAssets(visibilityState) {
    AssetManager.updateAsset(
      'icon',
      `#${this.#ICON_VISIBILITY_ID}`,
      `icon-visibility-${visibilityState}.svg`
    );
  }

  _toggleInpType() {
    const currentType = this.inputElement.type;
    this.inputElement.type = currentType === 'text' ? 'password' : 'text';
  }

  _toggleVisibility() {
    const alt = this.#inpVisibilityState === 'on' ? 'Closed eye' : 'Opened eye';
    this.#iconVisibilityElement.setAttribute('alt', alt);

    const newState = this.#inpVisibilityState === 'on' ? 'off' : 'on';
    this._handleAssets(newState);
    this.#inpVisibilityState = newState;
  }

  _setListeners() {
    this.#btnVisibilityElement.addEventListener('click', () => {
      this._toggleVisibility();
      this._toggleInpType();
    });
  }

  init() {
    super.init();
    this._setListeners();
    this._handleAssets('off');
  }
}
