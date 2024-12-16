import { Input } from './Input.js';
import { AssetManager } from '../../core/AssetManager.js';
import { ApiService } from '../../service/ApiService.js';
import { simulateWait } from '../../utils/tests.js';
import { NotFoundError } from '../../errors/InputErrors.js';

/**
 * @typedef {object} InputSearchConfig
 * @property {HTMLElement} containerElement
 * @property {string} id
 * @property {string} labelText
 * @property {string} cssClass
 * @property {"text" | "numeric"} inputmode
 * @property {boolean} strictToNumber
 * @property {"currency" | "percent"} formatter
 * @property {string} endpoint
 * @property {{id: number, name: string}} defaultValue
 */

/**
 * Represents a search input field that supports asynchronous
 * data retrieval by ID, displaying the result in a disabled field.
 */
export class SearchInput extends Input {
  /**
   * @type {string}
   */
  #endpoint;

  #INPUT_QUERY_ID = `${this._id}`;
  #INPUT_RESULT_ID = `${this._id}-result`;
  #BTN_SEARCH_ID = `${this._id}-search-btn`;
  #ICON_SEARCH_ID = `${this._id}-search-icon`;

  constructor(config) {
    super(config);
    this.#endpoint = config.endpoint;
    this._defaultValue = config.defaultValue;
  }

  get #inputQueryElement() {
    return document.getElementById(this.#INPUT_QUERY_ID);
  }

  get #inputResultElement() {
    return document.getElementById(this.#INPUT_RESULT_ID);
  }

  get #btnSearchElement() {
    return document.getElementById(this.#BTN_SEARCH_ID);
  }

  get #searchIconElement() {
    return document.getElementById(this.#ICON_SEARCH_ID);
  }

  get #queryIsValid() {
    const query = this.#inputQueryElement.value;
    return query !== '' && query !== '0';
  }

  get _template() {
    return `
      <div class="form-group__inp-group">
        <label for="${this.#INPUT_QUERY_ID}" class="label form-group__label">${this._labelText}</label>
        <div class="inp__container">
          <input id="${this.#INPUT_QUERY_ID}" type="text" aria-label="${this._labelText}" class="inp form-group__inp inp__search ${this._cssClass}" data-valid="true">
          <button id="${this.#BTN_SEARCH_ID}" type="button" class="btn-unset"><img class="icon" id="${this.#ICON_SEARCH_ID}" alt="Search Icon"></button>
          <input id="${this.#INPUT_RESULT_ID}" type="text" class="inp form-group__inp" disabled>
        </div>
        ${this._errorSpanTemplate}
      </div>`;
  }

  /**
   * @param {"add" | "remove"} action
   */
  #toggleSearchState(action) {
    this.#inputResultElement.classList[action]('inp-skelon');
    this.#searchIconElement.classList[action]('search-animation');
    if (action === 'add') {
      this.#inputResultElement.value = 'Searching...';
    }
  }

  async #fetchFromApi() {
    if (!this.#queryIsValid) return;

    this.#toggleSearchState('add');
    await simulateWait(1);

    try {
      return await ApiService.fetchFrom(`${this.#endpoint}/${query}`);
    } catch (e) {
      throw new NotFoundError(this._id);
    }
  }

  #handleSearchSuccess(item) {
    if (item) {
      this._updateResult(item);
      this._dataValid = true;
      this._failMessageHandler('remove', '');
    } else {
      this._updateResult(null);
      this._dataValid = false;
    }
  }

  #handleSearchError(error) {
    this._updateResult(null);
    this._dataValid = false;
    this._failMessageHandler('add', error.message);
  }

  async _handleSearch() {
    try {
      this._dataValid = false;
      const item = await this.#fetchFromApi();
      this.#handleSearchSuccess(item);
    } catch (error) {
      this.#handleSearchError(error);
    }
  }

  /**
   * @param {Object | null} item
   * @param {string} item.name
   */
  _updateResult(item) {
    this.#toggleSearchState('remove');
    this.#inputResultElement.value = item ? item.name : '';
  }

  _setDefaultValue() {
    if (this._defaultValue) {
      this.#inputQueryElement.value = this._defaultValue.id;
      this.#inputResultElement.value = this._defaultValue.name;
    }
  }

  _setListeners() {
    this.#btnSearchElement.addEventListener(
      'click',
      this._handleSearch.bind(this)
    );
    this.#inputQueryElement.addEventListener(
      'blur',
      this._handleSearch.bind(this)
    );
  }

  _handleAssets() {
    AssetManager.updateIcon(`#${this.#ICON_SEARCH_ID}`, 'icon-search.svg');
  }

  init() {
    super.init();
    this._setDefaultValue();
    this._setListeners();
    this._handleAssets();
  }
}
