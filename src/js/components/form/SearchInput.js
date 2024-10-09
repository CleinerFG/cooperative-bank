import { Input } from "./Input.js";
import { PathManager } from "../../utils/PathManager.js";
import { simulateWait } from "../../utils/tests.js";

export class SearchInput extends Input {
  #defaultDataItem;
  #fetchHandler;

  set defaultDataItem(value) {
    this.#defaultDataItem = value;
  }

  set fetchHandler(handler) {
    this.#fetchHandler = handler;
  }

  get _inputResultElement() {
    return document.getElementById(`${this._id}-result`);
  }

  get _searchElement() {
    return document.getElementById("search-icon");
  }

  _template() {
    const inputId = this._id;
    const resultId = `${this._id}-result`;
    const errorId = `${this._id}-error`;

    return `
      <div class="form-group__inp-group">
        <label for="${inputId}" class="label form-group__label">${this._labelText}</label>
        <div class="inp__container">
          <input id="${inputId}" type="text" placeholder="${this._placeholder}" aria-label="${this._labelText}" class="inp form-group__inp inp__lookup ${this._cssClass}" data-valid="true">
          <button type="button" class="btn-unset"><img class="icon" id="search-icon" alt="Search Icon"></button>
          <input id="${resultId}" type="text" class="inp form-group__inp" disabled>
        </div>
        <span id="${errorId}" class="error-message"></span>
      </div>`;
  }

  #toggleSearchState(action) {
    this._inputResultElement.classList[action]("inp-skelon");
    this._searchElement.classList[action]("search-animation");
    if (action === "add") {
      this._inputResultElement.value = "Searching...";
    }
  }

  async #fetchSearchResults() {
    const dataId = this._inputElement.value;
    if (!dataId || dataId === "0") return;

    this.#toggleSearchState("add");
    await simulateWait(3);
    return await this.#fetchHandler(dataId);
  }

  async _handleSearch() {
    try {
      const item = await this.#fetchSearchResults();
      if (item) {
        this._updateResult(item);
        this._dataValid = "true";
        this._failMessageHandler("remove", "");
      } else {
        this._updateResult(null);
        this._dataValid = "false";
      }
    } catch (error) {
      this._updateResult(null);
      this._dataValid = "false";
      this._failMessageHandler("add", error.message);
    }
  }

  _updateResult(item) {
    this.#toggleSearchState("remove");
    this._inputResultElement.value = item ? item.name : "";
  }

  _setDefaultItem() {
    if (this.#defaultDataItem) {
      this._inputElement.value = this.#defaultDataItem.id;
      this._inputResultElement.value = this.#defaultDataItem.name;
    }
  }

  _setupListeners() {
    this._searchElement.addEventListener(
      "click",
      this._handleSearch.bind(this)
    );
    this._inputElement.addEventListener("blur", this._handleSearch.bind(this));
  }

  _defineIconPath() {
    PathManager.updateIcon("#search-icon", "icon-search.svg");
  }

  init() {
    super.init();
    this._setDefaultItem();
    this._setupListeners();
    this._defineIconPath();
  }
}
