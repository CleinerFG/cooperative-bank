import { AbstractMethodError } from "../../errors/AbstractMethodError.js";
import { ApiService } from "../../service/ApiService.js";
import { FormViewUp } from "../../views/forms/FormViewUp.js";

export class FormCtrlUp {
  #view;
  constructor() {
    this.#view = new FormViewUp(
      this._viewParams,
      this._inputParams,
      this._submitParams
    );
    this.#init();
  }

  get _viewParams() {
    new AbstractMethodError("_viewParams");
  }

  get _inputParams() {
    new AbstractMethodError("_inputParams");
  }

  get _submitParams() {
    new AbstractMethodError("_submitParams");
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
    // this.#view.init();
    // this.#submitHandler();
  }
}
