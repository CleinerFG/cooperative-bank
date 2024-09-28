import { InputView } from "./InputView.js";
import { NoSuchItemError } from "../../errors/InputValidationError.js";
import { PathManager } from "../../utils/PathManager.js";

export class LookupInputView extends InputView {
  #dataList;
  #defaultDataItem;

  set dataList(list) {
    this.#dataList = list;
  }

  set defaultDataItem(item) {
    this.#defaultDataItem = item;
  }

  get _inputResultElement() {
    return document.getElementById(`${this._id}-result`);
  }

  get _searchElement() {
    return document.getElementById("search-icon");
  }

  _build() {
    const inputId = this._id;
    const resultId = `${this._id}-result`;
    const errorId = `${this._id}-error`;
    return `
      <div class="form-group__inp-group">
        <label for="${inputId}" class="label form-group__label">${this._labelText}</label>
        <div class="inp__container">
          <input id="${inputId}" type="text" name="${inputId}" placeholder="${this._placeholder}" aria-label="${this._labelText}" class="inp form-group__inp inp__lookup ${this._cssClass}">
          <button type="button" class="btn-unset"><img class="icon" id="search-icon" alt="Search Icon"></button>
          <input id="${resultId}" type="text" class="inp form-group__inp" disabled>
        </div>
        <span id="${errorId}" class="error-message"></span>
      </div>`;
  }

  #getDataWithId(dataId) {
    const item = this.#dataList.find((item) => item.id === dataId);
    if (item) return item;
    throw new NoSuchItemError(this._id);
  }

  _performSearch() {
    const dataId = this._inputElement.value;
    return this.#getDataWithId(Number(dataId));
  }

  _updateResult(item) {
    this._inputResultElement.value = item ? item.name : "";
  }

  _handleSearch() {
    try {
      const item = this._performSearch();
      this._updateResult(item);
      this._failMessageHandler("remove", "");
    } catch (error) {
      this._updateResult(null);
      this._failMessageHandler("add", error.message);
    }
  }

  _handleLostFocus(ev) {
    if (ev.key === "Enter" || ev.key === "Tab") {
      this._handleSearch();
    }
  }

  _setDefaultItem() {
    this._inputElement.value = this.#defaultDataItem.id;
    this._handleSearch();
  }

  _setListeners() {
    this._searchElement.addEventListener(
      "click",
      this._handleSearch.bind(this)
    );
    this._inputElement.addEventListener(
      "keydown",
      this._handleLostFocus.bind(this)
    );
  }

  _validationHandler() {
    this._addValidator(() => {
      if (this._inputResultElement.value === "") {
        throw new NoSuchItemError(this._id);
      }
    });
    this._updateValidators();
  }

  _defineIconPath() {
    PathManager.updateIcon("#search-icon", "icon-search.svg");
  }

  init() {
    super.init();
    this._setDefaultItem();
    this._setListeners();
    this._validationHandler();
    this._defineIconPath();
  }
}
