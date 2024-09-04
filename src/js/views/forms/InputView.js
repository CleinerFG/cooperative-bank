export class InputView {
  #element;
  constructor(cssId, callBackValidator) {
    this.#element = document.getElementById(cssId);
    this.#errorHandler(callBackValidator);
  }

  #errorHandler(callBackValidator) {
    this.#element.addEventListener("blur", (e) => {
      const value = e.target.value;
      console.log(callBackValidator(value));
      if (callBackValidator(value)) {
        e.target.classList.add("inp-error");
        return;
      }
      e.target.classList.remove("inp-error");
    });
  }

  validateMonetary() {
    this.#element.addEventListener("input", (e) => {
      let value = e.target.value.replace(/\D/g, "");
      value = (value / 100).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      e.target.value = value;
    });
  }
}
