import { AbstractMethodError } from "../../errors/AbstractMethodError.js";
import { ApiService } from "../../service/ApiService.js";

export class FormCtrl {
  #view;
  constructor() {
    this.#view = new this._viewClass(this._viewParams);
    this.#init();
  }

  get _viewClass() {
    new AbstractMethodError("_view");
  }

  get _viewParams() {
    new AbstractMethodError("_viewParams");
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
      try {
        const dataToApi = this._formData;
        const res = await ApiService.sendTo(this._endpoint, dataToApi);
        console.log(`Server return: ${res}`);
      } catch (e) {}
    });
  }

  #init() {
    this.#view.init();
    this.#submitHandler();
  }
}
