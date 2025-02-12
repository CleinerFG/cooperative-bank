import '../../types/formElementsType.js';
import Input from './Input.js';
import { SearchInputService } from '../services/SearchInputService.js';
import { simulateWait } from '../../utils/tests.js';
import { AssetManager } from '../../core/AssetManager.js';
import { handleIconDark } from '../../utils/themeUtils.js';

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

  get _template() {
    const imgSrc = `${AssetManager.iconsPath}/icon-search.svg`;
    return `
      <div class="inp-group ">
        <label for="${this.#INP_QUERY_ID}" class="label form-group__label">${this._labelText}</label>
        <div class="inp__wrapper inp__wrapper-search">
          <input id="${this.#INP_QUERY_ID}" placeholder="${this._placeholder}" class="inp" type="text" inputmode="${this._inputmode}" autocomplete="off" 
            aria-label="${this._labelText}" data-valid="false" data-search="off">
          <button disabled type="button" class="btn-unset btn-icon"><img class="icon ${handleIconDark()}" id="${this.#ICON_SEARCH_ID}" src="${imgSrc}" alt="Search Icon"></button>
        </div>
        <div class="inp__wrapper">
          <input id="${this.#INP_RESULT_ID}" type="text" class="inp form-group__inp" disabled>
        </div>
        ${this._errorSpanTemplate}
      </div>`;
  }

  async #fetchData() {
    const query = this.#inpQueryElement.value;
    await simulateWait();
    const service = new SearchInputService(this.#endpoint, query);
    return await service.fetch();
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
    this.handleFailMessage('remove');
  }

  #handleSearchError(message) {
    this._dataValid = false;
    this.#inpResultElement.value = '';
    this.handleFailMessage('add', message);
  }

  async _handleSearch() {
    if (!this.dataValid) return;
    try {
      this.#inpState = 'on';
      const data = await this.#fetchData();
      this.#handleSearchSuccess(data.name);
    } catch (e) {
      this.#handleSearchError(e.message);
    } finally {
      this.#inpState = 'off';
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
