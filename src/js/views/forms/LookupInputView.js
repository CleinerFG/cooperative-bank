import { InputView } from "./InputView.js";
import { ThemeView } from "../layout/ThemeView.js";
import pathManager from "../../utils/PathManager.js";

export class LookupInputView extends InputView {
  _build() {
    return `
      <div class="form-group__input-group">
        <label for="${this._id}" class="label form-group__label">${this._labelText}</label>
        <div class="input__container">
          <input id="${this._id}" type="text" name="${this._id}" placeholder="${this._placeholder}" aria-label="${this._labelText}"
          class="input form-group__input">
           <img class="icon" id="search-icon" alt="Search Icon">
          <input id="${this._id}-result" type="text" class="input form-group__input" disabled>
        </div>
        <span id="${this._id}-error" class="error-message""></span>
      </div>`;
  }

  get _inputResult(){
    return document.getElementById(`${this._id}-result`)
  }

  _setDefaultOption() {
    this.inputElement.value = 1
    this._inputResult.value = "Cooperative Bank Creditor"
  }

  _defineAssetPath() {
    const theme = ThemeView.getStoredTheme();
    pathManager.updatePath(
      "asset",
      "#search-icon",
      `icons${theme}`,
      "icon-search.svg"
    );
  }

  _init(){
    super._init()
    this._defineAssetPath()
    this._setDefaultOption()
  }
}
