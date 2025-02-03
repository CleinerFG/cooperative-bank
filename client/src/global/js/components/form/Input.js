import { zeroValidator, emptyValidator } from '../../utils/validators.js';
import {
  currencyFormatter,
  percentFormatter,
  strictNumberFormatter,
} from '../../utils/inputFormatters.js';

/**
 * @typedef {object} InputDefaultConfig
 * @property {HTMLElement} containerElement
 * @property {string} id
 * @property {string} labelText
 * @property {string} cssClass
 * @property {"text" | "numeric"} inputmode
 * @property {boolean} strictToNumber
 * @property {"currency" | "percent"} formatter
 */

/**
 * Input class for creating and managing input elements with validation,
 * formatting, and error handling.
 */
export default class Input {
  /**
   * @type {HTMLElement}
   */
  #containerElement;

  /**
   * @type {boolean}
   */
  #strictToNumber;

  /**
   * @type {"currency" | "percent"}
   */
  #formatter;

  /**
   * @type {import("../../utils/validators.js").Validator[]}
   */
  #validators = [emptyValidator, zeroValidator];

  /**
   * @param {InputDefaultConfig} config
   */
  constructor(config) {
    this.#containerElement = config.containerElement;
    this._id = config.id;
    this._cssClass = config.cssClass ?? '';
    this._inputmode = config.inputmode ?? 'text';
    this.#strictToNumber = config.strictToNumber;
    this.#formatter = config.formatter;
    this._labelText = config.labelText ?? '';
  }

  /**
   * @returns {string}
   */
  get id() {
    return this._id;
  }

  get inputElement() {
    return document.getElementById(this._id);
  }

  /**
   * @param {boolean} bool
   */
  set _dataValid(bool) {
    this.inputElement.dataset.valid = bool;
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
        <input id="${this._id}" type="text" inputmode="${this._inputmode}" autocomplete="off" name="${this._id}" aria-label="${this._labelText}"
        class="inp ${this._cssClass}" data-valid="false">
      </div>
      ${this._errorSpanTemplate}
    </div>`;
  }

  /**
   * @param {"add" | "remove"} method
   * @param {string} errorMessage
   */
  _handleFailMessage(method, errorMessage = '') {
    const span = document.querySelector(`#${this._id}-error`);
    span.innerHTML = errorMessage;
    this.inputElement.parentElement.classList[method]('inp-error');
  }

  #handleValidators() {
    const value = this.inputElement.value;
    try {
      this.#validators.forEach((validator) => validator(value));
      this._dataValid = true;
      this._handleFailMessage('remove', '');
    } catch (error) {
      this._dataValid = false;
      this._handleFailMessage('add', error.message);
    }
  }

  #setStrictToNumber() {
    if (this.#strictToNumber) {
      this.inputElement.addEventListener('input', strictNumberFormatter);
    }
  }

  #setFormatter() {
    const formatters = {
      percent: percentFormatter,
      currency: currencyFormatter,
    };

    if (this.#formatter) {
      this.inputElement.addEventListener('input', formatters[this.#formatter]);
    }
  }

  #setValidationOnBlur() {
    this.inputElement.addEventListener(
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
