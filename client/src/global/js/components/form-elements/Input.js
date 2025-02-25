import '../../types/formElementsType.js';
import { emptyValidator } from '../../utils/validators.js';

export default class Input {
  #containerElement;
  #formatter;
  #validators = [emptyValidator];
  #customValidator;

  /**
   * @param {InputParams} params
   */
  constructor(params) {
    this.#containerElement = params.containerElement;
    this._id = params.id;
    this._labelText = params.labelText ?? '';
    this._placeholder = params.placeholder ?? '';
    this._type = params.type ?? 'text';
    this._inputmode = params.inputmode ?? 'text';
    this.#formatter = params.formatter;
    this.#customValidator = params.customValidator;
  }

  get _containerElement() {
    return this.#containerElement;
  }

  get _inputElement() {
    return document.getElementById(this._id);
  }

  /**
   * @param {boolean} bool
   */
  set _dataValid(bool) {
    this._inputElement.dataset.valid = bool;
  }

  get _errorSpanTemplate() {
    return `<span id="${this._id}-error" class="error-message"></span>`;
  }

  get _template() {
    return `
    <div class="inp-group ">
      <label for="${this._id}" class="label">${this._labelText}</label>
      <div class="inp__wrapper">
        <input id="${this._id}" placeholder="${this._placeholder}" type="${this._type}" inputmode="${this._inputmode}" autocomplete="off" name="${this._id}" aria-label="${this._labelText}"
        class="inp" data-valid="false">
      </div>
      ${this._errorSpanTemplate}
    </div>`;
  }

  get id() {
    return this._id;
  }

  /**
   * @type {boolean}
   */
  get dataValid() {
    return this._inputElement.dataset.valid === 'true';
  }

  async getParseValue() {
    const value = this._inputElement.value;
    if (this.#formatter) {
      const module = await import('../../utils/formatters.js');
      const formattersMap = {
        cpf: module.cpfToString,
        currency: module.currencyToNumber,
        percent: module.percentToNumber,
        strictNumber: (value) => Number(value),
      };
      return formattersMap[this.#formatter](value);
    }
    return value;
  }

  /**
   * @param {"add" | "remove"} method
   * @param {string} message
   */
  handleFailMessage(method, message) {
    if (method === 'remove') message = '';
    const span = document.querySelector(`#${this._id}-error`);
    span.innerHTML = message;
    this._inputElement.parentElement.classList[method]('inp-error');
  }

  #setCustomValidator() {
    if (this.#customValidator) this.#validators.push(this.#customValidator);
  }

  async #setFormatter() {
    if (this.#formatter) {
      const module = await import('../../utils/inputFormatters.js');
      const formattersMap = {
        percent: module.percentFormatter,
        currency: module.currencyFormatter,
        cpf: module.cpfFormatter,
        strictNumber: module.strictNumberFormatter,
      };
      this._inputElement.addEventListener(
        'input',
        formattersMap[this.#formatter]
      );
    }
  }

  #validateValueHandler() {
    const value = this._inputElement.value;
    try {
      this.#validators.forEach((validator) => validator(value));
      this._dataValid = true;
      this.handleFailMessage('remove');
    } catch (error) {
      this._dataValid = false;
      this.handleFailMessage('add', error.message);
    }
  }

  #setValidationOnBlur() {
    this._inputElement.addEventListener(
      'blur',
      this.#validateValueHandler.bind(this)
    );
  }

  /**
   * @param {boolean} [active=true]
   */
  _setDefaultHandlers(active = true) {
    if (active) {
      this.#setCustomValidator();
      this.#setValidationOnBlur();
      this.#setFormatter();
    }
  }

  #render() {
    this.#containerElement.insertAdjacentHTML('beforeend', this._template);
  }

  init() {
    this.#render();
    this._setDefaultHandlers();
  }
}
