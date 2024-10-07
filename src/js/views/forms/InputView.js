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

  get _inputElement() {
    return document.getElementById(this._id);
  }

  _build() {
    throw new AbstractMethodError("_build");
  }

  #render() {
    this.#container.insertAdjacentHTML("beforeend", this._build());
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

  #validationOnBlur() {
    this._inputElement.addEventListener(
      "blur",
      this.executeValidators.bind(this)
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

  executeValidators() {
    const value = this._inputElement.value;
    try {
      this.#validators.forEach((validator) => validator(value));
      this._failMessageHandler("remove", "");
    } catch (error) {
      this._failMessageHandler("add", error.message);
    }
  }

  init() {
    this.#render();
    this._setupHandlers();
  }
}
