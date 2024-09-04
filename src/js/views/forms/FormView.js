import { AbstractMethodError } from "../../errors/AbstractMethodError.js";
export class FormView {
  #container;
  #id;
  #cssClass;
  #action;
  #method;
  #form;
  constructor(container, id, cssClass, action, method) {
    this.#container = container;
    this.#id = id;
    this.#cssClass = cssClass;
    this.#action = action;
    this.#method = method;
  }

  get _inputsData() {
    throw new AbstractMethodError("_inputsData");
  }

  _buildSubmitButton(text) {
    return `
    <button class="btn btn-action" type="submit">${text}</button>
    `;
  }

  #build() {
    this.#form = `
    <form id="${this.#id}" class="form ${this.#cssClass}" 
    action="${this.#action}" method="${this.#method}">
      <div class="form-group">       
      </div>
       ${this._buildSubmitButton()}
    </form>
    `;
  }

  #render() {
    this.#container.insertAdjacentHTML("beforeend", this.#form);
  }

  init() {
    this.#build();
    this.#render();
  }
}
