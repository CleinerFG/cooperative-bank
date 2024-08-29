import { AbstractMethodError } from "../../errors/AbstractMethodError.js";

export class DisplayFormView {
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
    this.#build();
  }

  get _groupData() {
    throw new AbstractMethodError("_inputGroupValues");
  }

  _createInputGroup(labelText, id, type, placeholder, ariaLabel) {
    return `
    <div class="form-group__input-group">
      <label for="${id}" class="label form-group__label">${labelText}</label>
      <input id="${id}" type="${type}" name="value" placeholder="${placeholder}" aria-label="${ariaLabel}"
      class="input form-group__input">
    </div>
    `;
  }

  _createSubmitButton(text) {
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

  render() {
    this.#container.append(this.#form);
  }
}
