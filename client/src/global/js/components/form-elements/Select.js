import '../../types/formElementsType.js';
import { INP_ERRORS } from '../../constants/errorCodes.js';
import Input from './Input.js';

export default class Select extends Input {
  #options;

  /**
   * @param {SelectParams} params
   */
  constructor(params) {
    super(params);
    this.#options = params.options;
  }

  get #optionsTemplate() {
    return this.#options
      .map(({ value, text }) => `<option value="${value}">${text}</option>`)
      .join('');
  }

  get _template() {
    return `
      <div class="inp-group ">
        <label for="${this._id}" class="label">${this._labelText}</label>
        <div class="inp__wrapper">
          <select id="${this._id}" class="select" data-valid="false" required>
            <option value="" disabled selected>Select an option</option>
            ${this.#optionsTemplate}
          </select>
        </div>
        ${this._errorSpanTemplate}
      </div>
      `;
  }

  #setBlurOnChange() {
    this._inputElement.addEventListener('change', () => {
      this._inputElement.blur();
    });
  }

  init() {
    super.init();
    this.#setBlurOnChange();
  }
}
