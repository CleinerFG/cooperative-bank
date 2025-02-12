import '../../types/formElementsType.js';

export default class Select {
  #containerElement;
  #id;
  #labelText;
  #options;

  /**
   * @param {SelectParams} params
   */
  constructor(params) {
    this.#containerElement = params.containerElement;
    this.#id = params.id;
    this.#labelText = params.labelText;
    this.#options = params.options;
  }

  /**
   * @type {string}
   */
  get id() {
    return this.#id;
  }

  /**
   * @type {string}
   */
  get value() {
    return this.#element.value;
  }

  /**
   * @type {boolean}
   */
  get dataValid() {
    return this.#element.dataset.valid === 'true';
  }

  /**
   * @param {boolean} bool
   */
  set _dataValid(bool) {
    this.#element.dataset.valid = bool;
  }

  get #element() {
    return document.getElementById(this.#id);
  }

  get #optionsTemplate() {
    return this.#options
      .map(({ value, text }) => `<option value="${value}">${text}</option>`)
      .join('');
  }

  get #template() {
    return `
      <div class="inp-group ">
        <label for="${this.#id}" class="label">${this.#labelText}</label>
        <select id="${this.#id}" class="select-box" data-valid="false" required>
          <option value="" disabled selected>Select an option</option>
          ${this.#optionsTemplate}
        </select>
      </div>
      `;
  }

  /**
   * @param {"add" | "remove"} method
   * @param {string} errorMessage
   */
  handleFailMessage(method) {
    this.#element.classList[method]('select-error');
  }

  #setListeners() {
    this.#element.addEventListener('change', () => {
      if (this.#element.value) {
        this._dataValid = true;
      } else {
        this._dataValid = false;
      }
    });
    this.#element.addEventListener('blur', () => {
      if (!this.dataValid) {
        this.handleFailMessage('add');
        return;
      }
      this.handleFailMessage('remove');
    });
  }

  #render() {
    this.#containerElement.insertAdjacentHTML('beforeend', this.#template);
  }

  init() {
    this.#render();
    this.#setListeners();
  }
}
