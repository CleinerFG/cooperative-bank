import { InputView } from "./InputView.js";
// import { ThemeView } from "../layout/ThemeView.js";
// import pathManager from "../../utils/PathManager.js";
import { users } from "../../testData.js";
import { NoSuchItemError } from "../../errors/InputValidationError.js";

export class LookupInputView extends InputView {
  #DEFAULT_DATA_ID = 1;
  #dataList = users;
  constructor(params) {
    super(params);
    this._setDefaultItem();
  }

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
    const dataId = this._inputElement.value;
    try {
      const item = this.#getDataWithId(Number(dataId));
      this._inputResultElement.value = item.name;
      this._failMessageHandler("remove", "");
    } catch (error) {
      this._inputResultElement.value = "";
      this._failMessageHandler("add", error.message);
    }
  }

  _enterPressHandler(ev) {
    if (ev.key === "Enter") {
      console.log(ev.key);
      this._searchBtnHandler();
    }
  }

  _setListeners() {
    const icon = document.getElementById("search-icon");
    icon.addEventListener("click", this._searchBtnHandler.bind(this));
    this._inputElement.addEventListener(
      "keydown",
      this._enterPressHandler.bind(this)
    );
  }

  _setDefaultItem() {
    this._inputElement.value = this.#DEFAULT_DATA_ID;
    this._searchBtnHandler();
  }

  _validationHandler() {
    this._addValidator(() => {
      if (this._inputResultElement.value === "") {
        throw new NoSuchItemError(this._id);
      }
    });
    this._updateValidators();
  }

  _init() {
    super._init();
    this._setListeners();
    this._validationHandler();
  }
}
