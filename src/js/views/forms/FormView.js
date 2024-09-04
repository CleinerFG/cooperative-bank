import { AbstractMethodError } from "../../errors/AbstractMethodError.js";
export class FormView {
  #container;
  #id;
  #cssClass;
  #action;
  #method;
  #form = null;
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

  _buildInputGroups() {
    throw new AbstractMethodError("_buildInputGroups");
  }

  #build() {
    this.#form = `
    <form id="${this.#id}" class="form ${this.#cssClass}" 
    action="${this.#action}" method="${this.#method}">
      <div class="form-group">
        ${this._buildInputGroups()}        
      </div>
       ${this._createSubmitButton()}
    </form>
    `;
  }

  _addInpValidations() {
    throw new AbstractMethodError("_addInpValidation");
  }

  render() {
    this.#build();
    this.#container.insertAdjacentHTML("beforeend", this.#form);
    this._addInpValidations();
  }
}
