import { AbstractMethodError } from "../errors/AbstractMethodError.js";

export class InputView {
  #element;
  constructor(cssId) {
    this.#element = document.getElementById(cssId);
  }

  _errorHandler(callBackValidate) {
    this.#element.addEventListener("blur", (e) => {
      const value = e.target.value;
      if (callBackValidate(value)) {
        inp.classList.add("inp-error");
        return;
      }
      inp.classList.remove("inp-error");
    });
  }

  _validateMonetary() {
    this.#element.addEventListener("input", (e) => {
      let value = e.target.value.replace(/\D/g, "");
      value = (value / 100).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      e.target.value = value;
    });
  }

  addListeners() {
    throw new AbstractMethodError("addListeners");
  }
}
