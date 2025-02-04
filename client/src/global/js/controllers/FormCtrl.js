import { FormView } from '../views/FormView.js';
import { ApiService } from '../service/ApiService.js';
import { AbstractGetterError } from '../errors/AbstractErrors.js';
import { InvalidDataError } from '../errors/InvalidDataError.js';

/**
 * Controller for handling form interactions and data submissions.
 * Manages validation, configuration, and API submission for the form.
 */
export class FormCtrl {
  #view;

  constructor() {
    this.#view = new FormView(
      this._viewParams,
      this._inputsParams,
      this._submitButtonParams
    );
    this.#init();
  }

  get _modelClass() {
    new AbstractGetterError('_modelClass');
  }

  /**
   * @type {import('../views/FormView.js').FormViewParams}
   */
  get _viewParams() {
    new AbstractGetterError('_viewParams');
  }

  /**
   * @type {Array<import('../components/form/Input.js').InputParams | import('../components/form/SearchInput.js').SearchInputParams>}
   */
  get _inputsParams() {
    new AbstractGetterError('_inputsParams');
  }

  /**
   * @type {import('../components/form/SubmitButton.js').SubmitButtonParams}}
   */
  get _submitButtonParams() {
    new AbstractGetterError('_submitButtonParams');
  }

  /**
   * @type {string}
   */
  get _endpoint() {
    new AbstractGetterError('_endpoint');
  }

  /**
   * Collects and returns the form data.
   * Uses the model class to format data for the API.
   *
   * @returns {object}
   */
  get _formData() {
    const params = {};
    this.#view.inputs.forEach((inp) => {
      params[inp.id] = inp.inputElement.value;
    });

    const model = new this._modelClass(params);
    return model.dataToApi;
  }

  _handleInputsDataIsValid() {
    const isValid = this.#view.inputs.every(
      (inp) => inp.inputElement.dataset.valid === 'true'
    );

    if (!isValid) {
      throw new InvalidDataError();
    }
  }

  #handleSubmit() {
    this.#view.formElement.addEventListener('submit', async (ev) => {
      e.preventDefault();
      try {
        this._handleInputsDataIsValid();
        const res = await ApiService.sendTo(this._endpoint, this._formData);
        console.log(`Server return: ${res}`);
      } catch (e) {
        console.log(e);
      }
    });
  }

  #init() {
    this.#handleSubmit();
  }
}
