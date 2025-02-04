import Input from './Input.js';
import { ApiService } from '../../service/ApiService.js';
import { simulateWait } from '../../utils/tests.js';
import { NotFoundError } from '../../errors/InputErrors.js';
import { AssetManager } from '../../core/AssetManager.js';
import { handleIconDark } from '../../utils/themeUtils.js';

/**
 * @typedef {object} SearchInputParams
 * @property {HTMLElement} containerElement
 * @property {string} id
 * @property {string} labelText
 * @property {string} cssClass
 * @property {boolean} strictToNumber
 * @property {"text" | "numeric"} inputmode
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
   * @param {SearchInputParams} params
   */
  constructor(params) {
    super(params);
    this.#endpoint = params.endpoint;
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
    const imgSrc = `${AssetManager.iconsPath}/icon-search.svg`;
    return `
      <div class="inp-group ">
        <label for="${this.#INP_QUERY_ID}" class="label form-group__label">${this._labelText}</label>
        <div class="inp__wrapper inp__wrapper-search">
          <input id="${this.#INP_QUERY_ID}" class="inp ${this._cssClass}" type="text" inputmode="${this._inputmode}" autocomplete="off" 
            aria-label="${this._labelText}" data-valid="false" data-search="off">
          <button disabled type="button" class="btn-unset btn-icon"><img class="icon ${handleIconDark()}" id="${this.#ICON_SEARCH_ID}" src="${imgSrc}" alt="Search Icon"></button>
        </div>
        <div class="inp__wrapper">
          <input id="${this.#INP_RESULT_ID}" type="text" class="inp form-group__inp" disabled>
        </div>
        ${this._errorSpanTemplate}
      </div>`;
  }

  async #fetchFromApi() {
    this.#inpState = 'on';
    const query = this.#inpQueryElement.value;
    await simulateWait();
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
