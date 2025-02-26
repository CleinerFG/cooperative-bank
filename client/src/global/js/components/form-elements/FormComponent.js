import { AbstractGetterError } from '../../errors/AbstractErrors.js';
import '../../types/formElementsType.js';
import { emptyValidator } from '../../utils/validators.js';

export default class FormComponent {
  #containerElement;
  #id;
  #labelText;
  #placeholder;
  #type;
  #inputmode;
  #formatter;
  #customValidator;
  #validators = [emptyValidator];
  #listeners = [
    { eventType: 'blur', listener: this.#handleValidationOnBlur.bind(this) },
  ];

  /**
   * @param {FormComponentParams} params
   */
  constructor(params) {
    this.#id = params.id;
    this.#containerElement = params.containerElement;
    this.#labelText = params.labelText;
    this.#placeholder = params.placeholder;
    this.#type = params.type;
    this.#inputmode = params.inputmode;
    this.#formatter = params.formatter;
    this.#customValidator = params.customValidator;
  }

  get id() {
    return this.#id;
  }

  get _containerElement() {
    return this.#containerElement;
  }

  get _labelText() {
    return this.#labelText;
  }

  get _placeholder() {
    return this.#placeholder;
  }

  get _type() {
    return this.#type;
  }

  get _inputmode() {
    return this.#inputmode;
  }

  get _formElement() {
    return this._containerElement.querySelector(`#${this.#id}`);
  }

  /**
   * @type {boolean}
   */
  get dataValid() {
    return this._formElement.dataset.valid === 'true';
  }

  /**
   * @param {boolean} bool
   */
  set _dataValid(bool) {
    this._formElement.dataset.valid = bool;
  }

  get _errorSpanTemplate() {
    return `<span id="${this.#id}-error" class="error-message"></span>`;
  }

  get #errorSpanElement() {
    return this._containerElement.querySelector(`#${this.#id}-error`);
  }

  get _template() {
    throw new AbstractGetterError('_template');
  }

  /**
   *
   * @param {CustomListener} listenerConfig
   */
  _addCustomListener(listenerConfig) {
    this.#listeners.push(listenerConfig);
  }

  async getParseValue() {
    const value = this._formElement.value;
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
    this.#errorSpanElement.innerHTML = message;
    this._formElement.parentElement.classList[method]('inp-error');
  }

  #handleValidationOnBlur() {
    const value = this._formElement.value;
    try {
      this.#validators.forEach((validator) => validator(value));
      this._dataValid = true;
      this.handleFailMessage('remove');
    } catch (error) {
      this._dataValid = false;
      this.handleFailMessage('add', error.message);
    }
  }

  #setListeners() {
    this.#listeners.forEach(({ eventType, listener }) => {
      this._formElement.addEventListener(eventType, listener);
    });
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
      this._formElement.addEventListener(
        'input',
        formattersMap[this.#formatter]
      );
    }
  }

  #setCustomValidator() {
    if (this.#customValidator) this.#validators.push(this.#customValidator);
  }

  #render() {
    this.#containerElement.insertAdjacentHTML('beforeend', this._template);
  }

  /**
   * @param {['listeners'|'formatter']} useHandlers
   */
  _setHandlers(useHandlers) {
    this.#setCustomValidator();
    const handlersMap = {
      listeners: this.#setListeners.bind(this),
      formatter: this.#setFormatter.bind(this),
    };
    useHandlers.forEach((handler) => {
      handlersMap[handler]();
    });
  }

  init() {
    this.#render();
  }
}
