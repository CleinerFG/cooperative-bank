import { AbstractMethodError } from "../../errors/AbstractMethodError.js";
import { ApiService } from "../../service/ApiService.js";

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

  #submitHandler() {
    this.#view.formElement.addEventListener("submit", async (ev) => {
      ev.preventDefault();
      const res = await ApiService.sendTo(this._endpoint, this._formData);
      console.log(`Submit handler ${res}`);
    });
  }

  #init() {
    this.#view.init();
    this.#submitHandler();
  }
}
