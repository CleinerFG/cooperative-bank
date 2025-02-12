import '../../types/formElementsType.js';
import { zeroValidator, emptyValidator } from '../../utils/validators.js';
import {
  cpfFormatter,
  currencyFormatter,
  percentFormatter,
  strictNumberFormatter,
} from '../../utils/inputFormatters.js';
import {
  cpfToString,
  currencyToNumber,
  percentToNumber,
} from '../../utils/formatters.js';

export default class Input {
  #containerElement;
  #strictToNumber;
  #formatter;

  /**
   * @type {import("../../utils/validators.js").Validator[]}
   */
  #validators = [emptyValidator, zeroValidator];
  #customValidator;

  /**
   * @param {InputParams} params
   */
  constructor(params) {
    this.#containerElement = params.containerElement;
    this._id = params.id;
    this._labelText = params.labelText ?? '';
    this._placeholder = params.placeholder ?? '';
    this._cssClass = params.cssClass ?? '';
    this.#strictToNumber = params.strictToNumber;
    this._type = params.type ?? 'text';
    this._inputmode = params.inputmode ?? 'text';
    this.#formatter = params.formatter;
    this.#customValidator = params.customValidator;
  }

  /**
   * @returns {string}
   */
  get id() {
    return this._id;
  }

  get _inputElement() {
    return document.getElementById(this._id);
  }

  /**
   * @type {string}
   */
  get value() {
    return this._inputElement.value;
  }

  get parseValue() {
    switch (this.#formatter) {
      case 'cpf':
        return cpfToString(this.value);
      case 'currency':
        return currencyToNumber(this.value);
      case 'percent':
        return percentToNumber(this.value);
      default:
        if (this.#strictToNumber) return Number(this.value);
        return this.value;
    }
  }

  /**
   * @type {boolean}
   */
  get dataValid() {
    return this._inputElement.dataset.valid === 'true';
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

  /**
   * This getter can be overridden by subclasses to provide their specific HTML structure.
   */
  get _template() {
    return `
    <div class="inp-group ">
      <label for="${this._id}" class="label">${this._labelText}</label>
      <div class="inp__wrapper">
        <input id="${this._id}" placeholder="${this._placeholder}" type="${this._type}" inputmode="${this._inputmode}" autocomplete="off" name="${this._id}" aria-label="${this._labelText}"
        class="inp ${this._cssClass}" data-valid="false">
      </div>
      ${this._errorSpanTemplate}
    </div>`;
  }

  /**
   * @param {"add" | "remove"} method
   * @param {string} errorMessage
   */
  handleFailMessage(method, errorMessage = '') {
    const span = document.querySelector(`#${this._id}-error`);
    span.innerHTML = errorMessage;
    this._inputElement.parentElement.classList[method]('inp-error');
  }

  #handleValidators() {
    const value = this._inputElement.value;
    if (this.#customValidator) this.#validators.push(this.#customValidator);
    try {
      this.#validators.forEach((validator) => validator(value));
      this._dataValid = true;
      this.handleFailMessage('remove', '');
    } catch (error) {
      this._dataValid = false;
      this.handleFailMessage('add', error.message);
    }
  }

  #setStrictToNumber() {
    if (this.#strictToNumber) {
      this._inputElement.addEventListener('input', strictNumberFormatter);
    }
  }

  #setFormatter() {
    const formatters = {
      percent: percentFormatter,
      currency: currencyFormatter,
      cpf: cpfFormatter,
    };

    if (this.#formatter) {
      this._inputElement.addEventListener('input', formatters[this.#formatter]);
    }
  }

  #setValidationOnBlur() {
    this._inputElement.addEventListener(
      'blur',
      this.#handleValidators.bind(this)
    );
  }

  /**
   * @param {boolean} [active=true]
   */
  _setDefaultHandlers(active = true) {
    if (active) {
      this.#setValidationOnBlur();
      this.#setStrictToNumber();
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
