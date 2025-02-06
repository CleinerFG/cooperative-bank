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

  get #optionsTemplate() {
    return this.#options
      .map(({ value, text }) => `<option value="${value}">${text}</option>`)
      .join('');
  }

  get #template() {
    return `
      <div class="inp-group ">
        <label for="${this.#id}" class="label">${this.#labelText}</label>
        <select id="${this.#id}" class="select-box">
          <option value="" disabled selected>Select an option</option>
          ${this.#optionsTemplate}
        </select>
      </div>
      `;
  }

  #render() {
    this.#containerElement.insertAdjacentHTML('beforeend', this.#template);
  }

  init() {
    this.#render();
  }
}
