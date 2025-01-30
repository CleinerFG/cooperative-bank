import { FormView } from '../views/FormView.js';
import { ApiService } from '../service/ApiService.js';
import { AbstractGetterError } from '../errors/AbstractErrors.js';
import { InvalidDataError } from '../errors/InvalidDataError.js';

/**
 * Controller for handling form interactions and data submissions.
 * Manages validation, configuration, and API submission for the form.
 */
export class FormCtrl {
  /**
   * @type {FormView}
   */
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

  /**
   * @type {import('../views/FormView.js').FormViewConfig}
   */
  get _viewConfig() {
    new AbstractGetterError('_viewConfig');
  }

  /**
   * @type {Array<import('../components/form/Input.js').InputDefaultConfig | import('../components/form/SearchInput.js').InputSearchConfig>}
   */
  get _inputsConfig() {
    new AbstractGetterError('_inputsConfig');
  }

  /**
   * @type {import('../components/form/SubmitButton.js').SubmitButtonConfig}}
   */
  get _submitConfig() {
    new AbstractGetterError('_submitConfig');
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
      ev.preventDefault();
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
