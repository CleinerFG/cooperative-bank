import { AbstractMethodError } from "../../errors/AbstractMethodError.js";

export class InputView {
  #container; // DOM element
  #strictRules; // Array
  #formatter; // String
  #validators = [
    function emptyValue(ev) {
      const value = ev.target.value;
      return value === "" ? true : false;
    },
    function zeroValue(ev) {
      const value = ev.target.value;
      return value === "R$ 0,00" || value === "0";
    },
  ];
  #strictMethods = {
    number: () => {
      this._inputElement.addEventListener("input", (ev) => {
        let value = ev.target.value.replace(/\D/g, "");
        ev.target.value = value;
      });
    },
  };
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
      // Format in percentage -> 0,00%
    },
  };
  constructor(
    container,
    id,
    inputmode,
    strictRules,
    formatter,
    labelText,
    placeholder
  ) {
    this.#container = container;
    this._id = id;
    this._inputmode = inputmode ?? "text";
    this.#strictRules = strictRules;
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

  _initValidators() {
    this._inputElement.addEventListener("blur", (ev) => {
      const results = this.#validators.map((validator) => validator(ev));
      console.log(results);
      if (results.some((res) => res === true)) {
        this._failValidationHandler("add");
        return;
      }
      this._failValidationHandler("remove");
    });
  }

  #defineStrictRules() {
    if (this.#strictRules) {
      this.#strictRules.forEach((rule) => {
        this.#strictMethods[rule]();
      });
    }
  }

  #defineFormatter() {
    if (this.#formatter) {
      this.#formatterMethods[this.#formatter]();
    }
  }

  _init() {
    this._render();
    this.#defineGetterDomElement();
    this.#defineStrictRules();
    this.#defineFormatter();
  }
}
