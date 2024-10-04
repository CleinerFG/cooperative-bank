import { AbstractMethodError } from "../../errors/AbstractMethodError.js";

export class FormCtrl {
  #view;
  constructor(params) {
    this.#view = new params.view(params);
    this.#init();
  }

  get _endpoint() {
    new AbstractMethodError("_endpoint");
  }

  get _formData() {
    new AbstractMethodError("_formData");
  }

  async #fetchToApi(data) {
    const url = `http://localhost:3000/${this._endpoint}`
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  #submitHandler() {
    this.#view.formElement.addEventListener("submit", (ev) => {
      ev.preventDefault();
      this.#fetchToApi(this._formData);
    });
  }

  #init() {
    this.#view.init();
    this.#submitHandler();
  }
}
