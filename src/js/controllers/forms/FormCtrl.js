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

  _validateInputs() {

  }

  #submitHandler() {
    this.#view.formElement.addEventListener("submit", async (ev) => {
      ev.preventDefault(); 
      try {
        const dataToApi = this._formData;
        const res = await ApiService.sendTo(this._endpoint, dataToApi);
        console.log(`Server return: ${res}`);
      } catch (err) {
        // this.#view.validate();
      }
    });
  }

  #init() {
    this.#view.init();
    this.#submitHandler();
  }
}
