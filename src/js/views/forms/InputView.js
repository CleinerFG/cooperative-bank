import { AbstractMethodError } from "../../errors/AbstractMethodError.js";

export class InputView {
  #container; // DOM element
  #strictToNumber; // Bool
  #formatter; // String
  #validators = [
    function emptyValue(ev) {
      const value = ev.target.value;
      return { status: value === "", message: "empty" };
    },
    function zeroValue(ev) {
      const value = ev.target.value;
      const regex = /0,00|^0+$/;
      return { status: regex.test(value), message: "zero" };
    },
  ];
  #formatterMethods = {
    monetary: () => {
      this._inputElement.addEventListener("input", (e) => {
        let value = e.target.value;
        value = (value / 100).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
        e.target.value = value;
      });
    },
    percentage: () => {
      this._inputElement.addEventListener("input", (e) => {
        let value = e.target.value;
        value = (parseFloat(value) / 100).toFixed(2).replace(".", ",");
        e.target.value = `${value} %`;
        const cursorPosition = e.target.value.length - 2;
        e.target.setSelectionRange(cursorPosition, cursorPosition);
      });
    },
  };
  constructor(
    container,
    id,
    inputmode,
    strictToNumber,
    formatter,
    labelText,
    placeholder
  ) {
    this.#container = container;
    this._id = id;
    this._inputmode = inputmode ?? "text";
    this.#strictToNumber = strictToNumber;
    this.#formatter = formatter;
    this._labelText = labelText;
    this._placeholder = placeholder;
    this._init();
  }

  get inputElement() {
    return this._inputElement;
  }

  #setGetterDomElement() {
    this._inputElement = document.getElementById(this._id);
  }

  #setStrictToNumber() {
    if (this.#strictToNumber) {
      this._inputElement.addEventListener("input", (ev) => {
        let value = ev.target.value.replace(/\D/g, "");
        value = Number(value);
        ev.target.value = value;
      });
    }
  }

  #setFormatter() {
    this.#formatterMethods[this.#formatter]?.();
  }

  #setValidators() {
    this._inputElement.addEventListener("blur", (ev) => {
      const results = this.#validators.map((validator) => validator(ev));
      const error = results.find((res) => res.status === true);
      if (error) {
        this.#failValidationHandler(
          "add",
          `The ${this._id.replace(/-/, " ")} can't be ${error.message}`
        );
        return;
      }
      this.#failValidationHandler("remove", "");
    });
  }

  #failValidationHandler(method, errorMessage) {
    const span = document.querySelector(`#${this._id}-error`);
    span.innerHTML = errorMessage;
    this._inputElement.classList[method]("inp-error");
  }

  #render() {
    this.#container.insertAdjacentHTML("beforeend", this._build());
  }

  _build() {
    throw new AbstractMethodError("_build");
  }

  _addValidator(validator) {
    this.#validators.push(validator);
  }

  _updateValidators() {
    this.#setValidators();
  }

  _settersHandler(keysToRemove) {
    const setterMethods = {
      getterDomElement: this.#setGetterDomElement.bind(this),
      stringToNumber: this.#setStrictToNumber.bind(this),
      formatter: this.#setFormatter.bind(this),
      validators: this.#setValidators.bind(this),
    };
    if (keysToRemove) keysToRemove.forEach((key) => delete setterMethods[key]);
    for (const key in setterMethods) {
      setterMethods[key]();
    }
  }

  _init() {
    this.#render();
    this._settersHandler();
  }
}
