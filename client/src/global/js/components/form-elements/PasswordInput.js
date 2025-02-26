import Input from './Input.js';
import assetManager from '../../core/AssetManager.js';
import { handleIconDark } from '../../utils/themeUtils.js';

export default class PasswordInput extends Input {
  #BTN_VISIBILITY_ID = `${this.id}-visibility-btn`;
  #ICON_VISIBILITY_ID = `${this.id}-visibility-icon`;

  /**
   * @type {PasswordInputParams}
   */
  constructor(params) {
    super(params);
  }

  get _template() {
    return `
    <div class="inp-group ">
      <label for="${this.id}" class="label">${this._labelText}</label>
      <div class="inp__wrapper inp__wrapper-pass">
        <input id="${this.id}" type="password" inputmode="${this._inputmode}" name="${this.id}" aria-label="${this._labelText}" autocomplete="off"
        class="inp" data-visibility="off" data-valid="false">
        <button id="${this.#BTN_VISIBILITY_ID}" type="button" class="btn-unset btn-icon">
          <img id="${this.#ICON_VISIBILITY_ID}"
          class="icon ${handleIconDark()}"
          src="${assetManager.iconsPath}/icon-visibility-off.svg"
          alt="Closed eye">
        </button>
      </div>
      ${this._errorSpanTemplate}
    </div>`;
  }

  get #btnVisibilityElement() {
    return this._containerElement.querySelector(`#${this.#BTN_VISIBILITY_ID}`);
  }

  get #iconVisibilityElement() {
    return this._containerElement.querySelector(`#${this.#ICON_VISIBILITY_ID}`);
  }

  get #inpVisibilityState() {
    return this._formElement.dataset.visibility;
  }

  /**
   * @param {"on" | "off"} value
   */
  set #inpVisibilityState(value) {
    this._formElement.dataset.visibility = value;
  }

  /**
   * @param {"on" | "off"} visibilityState
   */
  #updateIcon(visibilityState) {
    assetManager.updateAsset(
      `#${this.#ICON_VISIBILITY_ID}`,
      `icon-visibility-${visibilityState}.svg`
    );
  }

  #toggleInpType() {
    const currentType = this._formElement.type;
    this._formElement.type = currentType === 'text' ? 'password' : 'text';
  }

  #toggleVisibility() {
    const alt = this.#inpVisibilityState === 'on' ? 'Closed eye' : 'Opened eye';
    this.#iconVisibilityElement.setAttribute('alt', alt);

    const newState = this.#inpVisibilityState === 'on' ? 'off' : 'on';
    this.#updateIcon(newState);
    this.#inpVisibilityState = newState;
  }

  _setListeners() {
    this.#btnVisibilityElement.addEventListener('click', () => {
      this.#toggleVisibility();
      this.#toggleInpType();
    });
  }

  init() {
    super.init();
    this._setListeners();
  }
}
