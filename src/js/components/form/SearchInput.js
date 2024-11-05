import { Input } from "./Input.js";
import { PathManager } from "../../utils/PathManager.js";
import { ApiService } from "../../service/ApiService.js";
import { simulateWait } from "../../utils/tests.js";
import { NotFoundError } from "../../errors/InputErrors.js";

/**
 * Represents a search input field that supports asynchronous
 * data retrieval by ID, displaying the result in a disabled field.
 * @class
 * @extends Input
 */
export class SearchInput extends Input {
  /**
   * API endpoint to fetch search.
   * @private
   * @type {string}
   */
  #endpoint;

  /**
   * Creates an instance of SearchInput.
   * @param {Object} params - The parameters for configuring the Input instance.
   * @param {string} params.endpoint - The API endpoint to fetch data from.
   * @param {Object} params.defaultValue - Default value to pre-fill the input and result fields.
   * @override
   * @note Additional parameters are inherited from the `Input` class.
   */
  constructor(params) {
    super(params);
    this.#endpoint = params.endpoint;
    this._defaultValue = params.defaultValue;
  }

  /**
   * Returns the result display element associated with this input.
   * @private
   * @type {HTMLElement}
   */
  get #inputResultElement() {
    return document.getElementById(`${this._id}-result`);
  }

  /**
   * Returns the search button element.
   * @private
   * @type {HTMLElement}
   */
  get #searchElement() {
    return document.getElementById("search-icon");
  }

  /**
   * Generates the HTML template for the search input elements group.
   * @protected
   * @returns {string} The HTML as string for the input field, including disabled input as search result, a search button and an error message.
   * @override
   */
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

  /**
   * Asynchronously fetches data from the API based on the input value.
   * @async
   * @private
   * @returns {Promise<Object>} The retrieved data object.
   * @throws {NotFoundError} Throws if the data is not found.
   */
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

  /**
   * Toggles the loading state for the search elements.
   * @private
   * @param {"add" | "remove"} action - Specifies the action to add or remove loading styles.
   */
  #toggleSearchState(action) {
    this.#inputResultElement.classList[action]("inp-skelon");
    this.#searchElement.classList[action]("search-animation");
    if (action === "add") {
      this.#inputResultElement.value = "Searching...";
    }
  }

  /**
   * Handles the search operation, updating the result field and managing errors.
   * @async
   * @protected
   */
  async _handleSearch() {
    try {
      this._dataValid = false;
      const item = await this.#fetchFromApi();
      if (item) {
        this._updateResult(item);
        this._dataValid = true;
        this._failMessageHandler("remove", "");
      } else {
        this._updateResult(null);
        this._dataValid = false;
      }
    } catch (error) {
      this._updateResult(null);
      this._dataValid = false;
      this._failMessageHandler("add", error.message);
    }
  }

  /**
   * Updates the result display with the fetched item or clears it if no item.
   * @protected
   * @param {Object | null} item - The item to display, or null if not found.
   * @param {string} item.name - The name of item fetched.
   */
  _updateResult(item) {
    this.#toggleSearchState("remove");
    this.#inputResultElement.value = item ? item.name : "";
  }

  /**
   * Sets the default value for the input and result fields if specified.
   * @protected
   */
  _setupDefaultValue() {
    if (this._defaultValue) {
      this.inputElement.value = this._defaultValue.id;
      this.#inputResultElement.value = this._defaultValue.name;
    }
  }

  /**
   * Initializes event listeners for the search button and input blur events.
   * @protected
   */
  _setupListeners() {
    this.#searchElement.addEventListener(
      "click",
      this._handleSearch.bind(this)
    );
    this.inputElement.addEventListener("blur", this._handleSearch.bind(this));
  }

  /**
   * Sets the path for the search icon using the {@link PathManager}.
   * @protected
   */
  _defineIconPath() {
    PathManager.updateIcon("#search-icon", "icon-search.svg");
  }

  /**
   * Initializes the search input, setting default values, event listeners, and icon path.
   * @public
   * @override
   */
  init() {
    super.init();
    this._setupDefaultValue();
    this._setupListeners();
    this._defineIconPath();
  }
}
