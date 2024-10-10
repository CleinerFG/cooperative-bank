import { zeroValidator, emptyValidator } from "../../utils/validators.js";
import {
  currencyFormatter,
  percentFormatter,
  strictNumberFormatter,
} from "../../utils/inputFormatters.js";

export class Input {
  #containerElement;
  #strictToNumber;
  #formatter;
  #validators = [emptyValidator, zeroValidator];

  constructor(params) {
    this.#containerElement = params.containerElement;
    this._id = params.id;
    this._cssClass = params.cssClass ?? "";
    this._inputmode = params.inputmode ?? "text";
    this.#strictToNumber = params.strictToNumber;
    this.#formatter = params.formatter;
    this._labelText = params.labelText ?? "";
  }

  get id() {
    return this._id;
  }

  get inputElement() {
    return document.getElementById(this._id);
  }

  get _inputElement() {
    return document.getElementById(this._id);
  }

  set _dataValid(bool) {
    this._inputElement.dataset.valid = bool;
  }

  get _template() {
    return `
    <div class="form-group__inp-group">
      <label for="${this._id}" class="label form-group__label">${this._labelText}</label>
      <input id="${this._id}" type="text" inputmode="${this._inputmode}" name="${this._id}" aria-label="${this._labelText}"
      class="inp form-group__inp ${this._cssClass}" data-valid="false">
      <span id="${this._id}-error" class="error-message"></span>
    </div>`;
  }

  _failMessageHandler(method, errorMessage) {
    const span = document.querySelector(`#${this._id}-error`);
    span.innerHTML = errorMessage;
    this._inputElement.classList[method]("inp-error");
  }

  #executeValidators() {
    const value = this._inputElement.value;
    try {
      this.#validators.forEach((validator) => validator(value));
      this._dataValid = "true";
      this._failMessageHandler("remove", "");
    } catch (error) {
      this._dataValid = "false";
      this._failMessageHandler("add", error.message);
    }
  }

  #setupStrictToNumber() {
    if (this.#strictToNumber) {
      this._inputElement.addEventListener("input", strictNumberFormatter);
    }
  }

  #setupFormatter() {
    const formatters = {
      percent: percentFormatter,
      currency: currencyFormatter,
    };

    if (this.#formatter) {
      this._inputElement.addEventListener("input", formatters[this.#formatter]);
    }
  }

  #setupValidationOnBlur() {
    this._inputElement.addEventListener(
      "blur",
      this.#executeValidators.bind(this)
    );
  }

  _setupHandlers(active = true) {
    if (active) {
      this.#setupValidationOnBlur();
      this.#setupStrictToNumber();
      this.#setupFormatter();
    }
  }

  #render() {
    this.#containerElement.insertAdjacentHTML("beforeend", this._template);
  }

  init() {
    this.#render();
    this._setupHandlers();
  }
}
