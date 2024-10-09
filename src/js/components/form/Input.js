import { zeroValidator, emptyValidator } from "../../utils/validators.js";

export class Input {
  #containerElement;
  #strictToNumber;
  #formatter;
  #validators = [emptyValidator, zeroValidator];
  #formatterMethods = {
    currency: () => {
      this._inputElement.addEventListener("input", (e) => {
        let value = e.target.value;
        value = (value / 100).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
        e.target.value = value;
      });
    },
    percent: () => {
      this._inputElement.addEventListener("input", (e) => {
        let value = e.target.value;
        value = (parseFloat(value) / 100).toFixed(2).replace(".", ",");
        e.target.value = `${value} %`;
        const cursorPosition = e.target.value.length - 2;
        e.target.setSelectionRange(cursorPosition, cursorPosition);
      });
    },
  };

  constructor(params) {
    this.#containerElement = params.container;
    this._id = params.id;
    this._cssClass = params.cssClass ?? "";
    this._type = params.type ?? "text";
    this._inputmode = params.inputmode ?? "text";
    this.#strictToNumber = params.strictToNumber;
    this.#formatter = params.formatter;
    this._labelText = params.labelText ?? "";
    this._placeholder = params.placeholder ?? "";
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
      <input id="${this._id}" type="${this._type}" inputmode="${this._inputmode}" name="${this._id}" placeholder="${this._placeholder}" aria-label="${this._labelText}"
      class="inp form-group__inp ${this._cssClass}" data-valid="false">
      <span id="${this._id}-error" class="error-message"></span>
    </div>`;
  }

  #render() {
    this.#containerElement.insertAdjacentHTML("beforeend", this._template);
  }

  #setStrictToNumber() {
    if (this.#strictToNumber) {
      this._inputElement.addEventListener("input", (ev) => {
        let value = ev.target.value.replace(/\D/g, "");
        ev.target.value = value;
      });
    }
  }

  #setFormatter() {
    this.#formatterMethods[this.#formatter]?.();
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

  #validationOnBlur() {
    this._inputElement.addEventListener(
      "blur",
      this.#executeValidators.bind(this)
    );
  }

  _failMessageHandler(method, errorMessage) {
    const span = document.querySelector(`#${this._id}-error`);
    span.innerHTML = errorMessage;
    this._inputElement.classList[method]("inp-error");
  }

  _setupHandlers(active = true) {
    if (active) {
      this.#setStrictToNumber();
      this.#setFormatter();
      this.#validationOnBlur();
    }
  }

  init() {
    this.#render();;
    this._setupHandlers();
  }
}
