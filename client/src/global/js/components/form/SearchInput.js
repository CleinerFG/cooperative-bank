import Input from './Input.js';
import { ApiService } from '../../service/ApiService.js';
import { simulateWait } from '../../utils/tests.js';
import { NotFoundError } from '../../errors/InputErrors.js';
import { ASSETS_ROUTE } from '../../../../app/js/constants/routes.js';
import { getStoredTheme } from '../../utils/themeUtils.js';

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
 */

/**
 * Represents a search input field that supports asynchronous
 * data retrieval by ID, displaying the result in a disabled field.
 */
export default class SearchInput extends Input {
  /**
   * @type {string}
   */
  #endpoint;

  #INP_QUERY_ID = `${this._id}`;
  #INP_RESULT_ID = `${this._id}-result`;
  #ICON_SEARCH_ID = `${this._id}-search-icon`;

  /**
   * @param {InputSearchConfig} config
   */
  constructor(config) {
    super(config);
    this.#endpoint = config.endpoint;
  }

  get #inpQueryElement() {
    return document.getElementById(this.#INP_QUERY_ID);
  }

  get #inpResultElement() {
    return document.getElementById(this.#INP_RESULT_ID);
  }

  get #iconSearchElement() {
    return document.getElementById(this.#ICON_SEARCH_ID);
  }

  get #inpState() {
    return this.#inpQueryElement.dataset.search;
  }

  /**
   * @param {"on" | "off"} value
   */
  set #inpState(value) {
    this.#inpQueryElement.dataset.search = value;
    this.#handleSearchAnimation();
  }

  get #queryIsValid() {
    const query = this.#inpQueryElement.value;
    return query !== '' && query !== '0';
  }

  get _template() {
    const imgSrc = `${ASSETS_ROUTE}/icons/${getStoredTheme()}/icon-search.svg`;
    return `
      <div class="form-group__inp-group">
        <label for="${this.#INP_QUERY_ID}" class="label form-group__label">${this._labelText}</label>
        <div class="inp-container">
          <input id="${this.#INP_QUERY_ID}" type="text" aria-label="${this._labelText}" class="inp form-group__inp inp-search ${this._cssClass}" data-valid="false" data-search="off">
          <button disabled class="btn-unset"><img class="icon" id="${this.#ICON_SEARCH_ID}" src="${imgSrc}" alt="Search Icon"></button>
          <input id="${this.#INP_RESULT_ID}" type="text" class="inp form-group__inp" disabled>
        </div>
        ${this._errorSpanTemplate}
      </div>`;
  }

  async #fetchFromApi() {
    this.#inpState = 'on';
    const query = this.#inpQueryElement.value;
    await simulateWait(1);
    try {
      return await ApiService.fetchFrom(`${this.#endpoint}/${query}`);
    } catch (e) {
      console.log(e);

      throw new NotFoundError(this._id);
    } finally {
      this.#inpState = 'off';
    }
  }

  #handleSearchAnimation() {
    this.#inpResultElement.classList.toggle('inp-skelon');
    this.#iconSearchElement.classList.toggle('search-animation');
    if (this.#inpState === 'on') {
      this.#inpResultElement.value = 'Searching...';
    }
  }

  #handleSearchSuccess(value) {
    this._dataValid = true;
    this.#inpResultElement.value = value;
    this._handleFailMessage('remove');
  }

  #handleSearchError(error) {
    this._dataValid = false;
    this.#inpResultElement.value = '';
    this._handleFailMessage('add', error.message);
  }

  async _handleSearch() {
    if (!this.#queryIsValid) return;
    try {
      const item = await this.#fetchFromApi();
      this.#handleSearchSuccess(item.name);
    } catch (error) {
      this.#handleSearchError(error);
    }
  }

  _setListeners() {
    this.#inpQueryElement.addEventListener(
      'blur',
      this._handleSearch.bind(this)
    );
  }

  init() {
    super.init();
    this._setListeners();
  }
}
