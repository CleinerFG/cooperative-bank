import { InputView } from "./InputView.js";
import { ThemeView } from "../layout/ThemeView.js";
import pathManager from "../../utils/PathManager.js";
import { users } from "../../testData.js";
import { NoSuchItemError } from "../../errors/InputValidationError.js";

export class LookupInputView extends InputView {
  #dataList = users;
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

  set dataList(list) {
    this.#dataList = list;
  }

  get _inputResultElement() {
    return document.getElementById(`${this._id}-result`);
  }

  #getDataWithId(dataId) {
    const item = this.#dataList.find((item) => item.id === dataId);
    if (item) return item;
    throw new NoSuchItemError(this._id);
  }

  _searchBtnHandler() {
    document.getElementById("search-icon").addEventListener("click", (ev) => {
      const dataId = this._inputElement.value;
      try {
        const item = this.#getDataWithId(Number(dataId));
        this._inputResultElement.value = item.name;
        this._failMessageHandler("remove", "")
      } catch (error) {
        this._inputResultElement.value = "";
        this._failMessageHandler("add", error.message)
      }
    });
  }

  _setDefaultOption() {
    this._inputElement.value = 1;
    this._inputResultElement.value = "Cooperative Bank Creditor";
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

  _init() {
    super._init();
    this._defineAssetPath();
    this._setDefaultOption();
    this._searchBtnHandler();
  }
}
