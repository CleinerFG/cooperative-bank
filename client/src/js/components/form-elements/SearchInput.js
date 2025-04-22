import '../../types/formElementsType.js';
import '../../types/serverResponseType.js';
import Input from './Input.js';
import searchUserService from '../SearchUserService.js';
import { USER_ERRORS, INP_ERRORS } from '../../constants/errorCodes.js';
import { cpfValidator } from '../../utils/validators.js';
import assetManager from '../../core/AssetManager.js';
import { handleIconDark } from '../../utils/themeUtils.js';

export default class SearchInput extends Input {
  #INP_QUERY_ID = `${this.id}`;
  #INP_RESULT_ID = `${this.id}-result`;
  #ICON_SEARCH_ID = `${this.id}-search-icon`;

  /**
   * @param {SearchInputParams} params
   */
  constructor(params) {
    super({
      formatter: 'cpf',
      customValidator: cpfValidator,
      ...params,
    });
  }

  get #inpQueryElement() {
    return this._containerElement.querySelector(`#${this.#INP_QUERY_ID}`);
  }

  get #inpResultElement() {
    return this._containerElement.querySelector(`#${this.#INP_RESULT_ID}`);
  }

  get #iconSearchElement() {
    return this._containerElement.querySelector(`#${this.#ICON_SEARCH_ID}`);
  }

  get #searchState() {
    return this.#inpQueryElement.dataset.search;
  }

  /**
   * @param {boolean} value
   */
  set #searchState(value) {
    this.#inpQueryElement.dataset.search = value;
    this.#searchAnimationHandler();
  }

  get _template() {
    const icon = `${assetManager.iconsPath}/form/icon-search.svg`;
    return `
      <div class="inp-group ">
        <label for="${this.#INP_QUERY_ID}" class="label form-components__label">${this._labelText}</label>
        <div class="inp__wrapper inp__wrapper-search">
          <input id="${this.#INP_QUERY_ID}" placeholder="${this._placeholder}" class="inp" type="text" inputmode="${this._inputmode}" autocomplete="off" 
            aria-label="${this._labelText}" data-valid="false" data-search="off">
          <button disabled type="button" class="btn-unset btn-icon"><img class="icon ${handleIconDark()}" id="${this.#ICON_SEARCH_ID}" src="${icon}" alt="Search Icon"></button>
        </div>
        <div class="inp__wrapper">
          <input id="${this.#INP_RESULT_ID}" type="text" class="inp form-components__inp" disabled>
        </div>
        ${this._errorSpanTemplate}
      </div>`;
  }

  async #fetchData() {
    const query = this.#inpQueryElement.value;
    try {
      return await searchUserService.getUserByCpf(query);
    } catch (e) {
      console.error(e);
    }
  }

  #searchAnimationHandler() {
    this.#inpResultElement.parentElement.classList.toggle('skelon-inp');
    this.#iconSearchElement.classList.toggle('search-animation');
    if (this.#searchState === 'true') {
      this.#inpResultElement.value = 'Searching...';
    }
  }

  /**
   * @param {User} res
   */
  #searchSuccessHandler(res) {
    const name = res.name;
    this._dataValid = true;
    this.#inpResultElement.value = name;
    this.handleFailMessage('remove');
  }

  /**
   * @param {ServerGetErrorResponse} res
   */
  #searchFailHandler(res) {
    let message = '';
    if (USER_ERRORS[res.error]) {
      message = USER_ERRORS[res.error];
    } else {
      message = INP_ERRORS[res.error];
    }
    this._dataValid = false;
    this.#inpResultElement.value = '';
    this.handleFailMessage('add', message);
  }

  #searchIsValid() {
    if (this.#searchState === 'true') return false;
    if (!this.dataValid) {
      this.#inpResultElement.value = '';
      return false;
    }
    return true;
  }

  async #handleSearch() {
    if (!this.#searchIsValid()) return;

    this.#searchState = true;
    const res = await this.#fetchData();

    if (!res.error) {
      this.#searchSuccessHandler(res);
    } else {
      this.#searchFailHandler(res);
    }

    this.#searchState = false;
  }

  init() {
    this._render();
    this._addCustomListener({
      eventType: 'blur',
      listener: this.#handleSearch.bind(this),
    });
    this._setHandlers();
  }
}
