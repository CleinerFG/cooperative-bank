import { Input } from "./Input.js";
import { PathManager } from "../../utils/PathManager.js";
import { ApiService } from "../../service/ApiService.js";
import { simulateWait } from "../../utils/tests.js";
import { NotFoundError } from "../../errors/InputErrors.js";

export class SearchInput extends Input {
  #endpoint;
  constructor(params) {
    super(params);
    this.#endpoint = params.endpoint;
    this._defaultValue = params.defaultValue;
  }

  get #inputResultElement() {
    return document.getElementById(`${this._id}-result`);
  }

  get #searchElement() {
    return document.getElementById("search-icon");
  }

  get _template() {
    const inputId = this._id;
    const resultId = `${this._id}-result`;
    const errorId = `${this._id}-error`;

    return `
      <div class="form-group__inp-group">
        <label for="${inputId}" class="label form-group__label">${this._labelText}</label>
        <div class="inp__container">
          <input id="${inputId}" type="text" aria-label="${this._labelText}" class="inp form-group__inp inp__lookup ${this._cssClass}" data-valid="true">
          <button type="button" class="btn-unset"><img class="icon" id="search-icon" alt="Search Icon"></button>
          <input id="${resultId}" type="text" class="inp form-group__inp" disabled>
        </div>
        <span id="${errorId}" class="error-message"></span>
      </div>`;
  }

  async #fetchFromApi() {
    const dataId = this.inputElement.value;
    if (!dataId || dataId === "0") return;

    this.#toggleSearchState("add");
    await simulateWait(1);

    try {
      return await ApiService.fetchFrom(`${this.#endpoint}/${dataId}`);
    } catch (e) {
      throw new NotFoundError(this._id);
    }
  }

  #toggleSearchState(action) {
    this.#inputResultElement.classList[action]("inp-skelon");
    this.#searchElement.classList[action]("search-animation");
    if (action === "add") {
      this.#inputResultElement.value = "Searching...";
    }
  }

  async _handleSearch() {
    try {
      this._dataValid = "false";
      const item = await this.#fetchFromApi();
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
    this.#inputResultElement.value = item ? item.name : "";
  }

  _setupDefaultValue() {
    if (this._defaultValue) {
      this.inputElement.value = this._defaultValue.id;
      this.#inputResultElement.value = this._defaultValue.name;
    }
  }

  _setupListeners() {
    this.#searchElement.addEventListener(
      "click",
      this._handleSearch.bind(this)
    );
    this.inputElement.addEventListener("blur", this._handleSearch.bind(this));
  }

  _defineIconPath() {
    PathManager.updateIcon("#search-icon", "icon-search.svg");
  }

  init() {
    super.init();
    this._setupDefaultValue();
    this._setupListeners();
    this._defineIconPath();
  }
}
