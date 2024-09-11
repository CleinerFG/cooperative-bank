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

  _build() {
    throw new AbstractMethodError("_build");
  }

  _render() {
    this.#container.insertAdjacentHTML("beforeend", this._build());
  }

  #defineGetterDomElement() {
    this._inputElement = document.getElementById(this._id);
  }

  _failValidationHandler(method) {
    const actions = {
      add: () => this._inputElement.classList.add("inp-error"),
      remove: () => this._inputElement.classList.remove("inp-error"),
    };

    actions[method]();
  }

  _addValidator(validator) {
    this.#validators.push(validator);
  }

  _setValidators() {
    this._inputElement.addEventListener("blur", (ev) => {
      const results = this.#validators.map((validator) => validator(ev));
      if (results.some((res) => res.status === true)) {
        this._failValidationHandler("add");
        return;
      }
      this._failValidationHandler("remove");
    });
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
    console.log(this.#formatter);
    this.#formatterMethods[this.#formatter]?.();
  }

  _init() {
    this._render();
    this.#defineGetterDomElement();
    this.#setStrictToNumber();
    this.#setFormatter();
  }
}
