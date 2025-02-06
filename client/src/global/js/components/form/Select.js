/**
 * @typedef {object} SelectParams
 * @property {HTMLElement} containerElement
 * @property {string} id
 * * @property {string} labelText
 * @property {{value:string, text: string}[]} options
 */

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
   * @type {'true'|'false'}
   */
  get dataValid() {
    return this.#element.dataset.valid === 'true';
  }

  /**
   * @param {boolean} bool
   */
  set dataValid(bool) {
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

  #handleListeners() {
    this.#element.addEventListener('change', () => {
      if (this.#element.value) {
        this.dataValid = 'true';
        return;
      }
    });
    this.#element.addEventListener('blur', () => {
      if (!this.dataValid) {
        this.#element.classList.add('select-error');
      } else {
        this.#element.classList.remove('select-error');
      }
    });
  }

  #render() {
    this.#containerElement.insertAdjacentHTML('beforeend', this.#template);
  }

  init() {
    this.#render();
    this.#handleListeners();
  }
}
