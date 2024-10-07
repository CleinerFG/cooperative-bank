import { AbstractMethodError } from "../../errors/AbstractMethodError.js";
import { zeroValidator, emptyValidator } from "../../utils/validators.js";

export class InputView {
  #container; // DOM element
  #strictToNumber; // Boolean
  #formatter; // String
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
    this.#container = params.container;
    this._id = params.id;
    this._cssClass = params.cssClass ?? "";
    this._type = params.type ?? "text";
    this._inputmode = params.inputmode ?? "text";
    this.#strictToNumber = params.strictToNumber;
    this.#formatter = params.formatter;
    this._labelText = params.labelText ?? "";
    this._placeholder = params.placeholder ?? "";
  }

  get inputElement() {
    return this._inputElement;
  }

  _build() {
    throw new AbstractMethodError("_build");
  }

  #render() {
    this.#container.insertAdjacentHTML("beforeend", this._build());
  }

  #setGetterDomElement() {
    this._inputElement = document.getElementById(this._id);
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

  _failMessageHandler(method, errorMessage) {
    const span = document.querySelector(`#${this._id}-error`);
    span.innerHTML = errorMessage;
    this._inputElement.classList[method]("inp-error");
  }

  executeValidators() {
    const value = this._inputElement.value;
    try {
      this.#validators.forEach((validator) => validator(value));
      this._failMessageHandler("remove", "");
    } catch (error) {
      this._failMessageHandler("add", error.message);
    }
  }

  #validationOnBlur() {
    this._inputElement.addEventListener(
      "blur",
      this.executeValidators.bind(this)
    );
  }

  _addValidator(validator) {
    this.#validators.push(validator);
  }

  _updateValidators() {
    this.#validationOnBlur();
  }

  _settersHandler(keysToRemove) {
    const setterMethods = {
      getterDomElement: this.#setGetterDomElement.bind(this),
      stringToNumber: this.#setStrictToNumber.bind(this),
      formatter: this.#setFormatter.bind(this),
      validators: this.#validationOnBlur.bind(this),
    };
    if (keysToRemove) keysToRemove.forEach((key) => delete setterMethods[key]);
    for (const key in setterMethods) {
      setterMethods[key]();
    }
  }

  init() {
    this.#render();
    this._settersHandler();
  }
}
