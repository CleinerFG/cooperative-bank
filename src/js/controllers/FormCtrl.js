import { FormView } from '../views/FormView.js';
import { ApiService } from '../service/ApiService.js';
import { AbstractGetterError } from '../errors/AbstractErrors.js';
import { InvalidDataError } from '../errors/InvalidDataError.js';

export class FormCtrl {
  #view;
  constructor() {
    this.#view = new FormView(
      this._viewConfig,
      this._inputsConfig,
      this._submitConfig
    );
    this.#init();
  }

  get _modelClass() {
    new AbstractGetterError('_modelClass');
  }

  get _viewConfig() {
    new AbstractGetterError('_viewConfig');
  }

  get _inputsConfig() {
    new AbstractGetterError('_inputsConfig');
  }

  get _submitConfig() {
    new AbstractGetterError('_submitConfig');
  }

  get _endpoint() {
    new AbstractGetterError('_endpoint');
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
      (inp) => inp.inputElement.dataset.valid === 'true'
    );

    if (!isValid) {
      throw new InvalidDataError();
    }
  }

  #submitHandler() {
    this.#view.formElement.addEventListener('submit', async (ev) => {
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
