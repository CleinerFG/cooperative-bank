import { AbstractMethodError } from "../../errors/AbstractMethodError.js";
import { InvalidDataError } from "../../errors/InvalidDataError.js";
import { ApiService } from "../../service/ApiService.js";
import { FormView } from "../../views/forms/FormView.js";

export class FormCtrl {
  #view;
  constructor() {
    this.#view = new FormView(
      this._viewParams,
      this._inputParams,
      this._submitParams
    );
    this.#init();
  }

  get _modelClass() {
    new AbstractMethodError("_modelClass");
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
    const params = {};
    this.#view.inputs.forEach((inp) => {
      params[inp.id] = inp.inputElement.value;
    });

    const model = new this._modelClass(params);
    return model.dataToApi;
  }

  _checkDataValidInputs() {
    const isValid = this.#view.inputs.every(
      (inp) => inp.inputElement.dataset.valid === "true"
    );

    if (!isValid) {
      throw new InvalidDataError();
    }
  }

  #submitHandler() {
    this.#view.formElement.addEventListener("submit", async (ev) => {
      ev.preventDefault();
      try {
        this._checkDataValidInputs();
        const res = await ApiService.sendTo(this._endpoint, this._formData);
        console.log(`Server return: ${res}`);
      } catch (e) {
        console.log(e);
      }
    });
  }

  #init() {
    this.#submitHandler();
  }
}
