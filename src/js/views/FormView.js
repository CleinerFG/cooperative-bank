import { AbstractMethodError } from "../errors/AbstractMethodError.js";

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

  get _groupData() {
    throw new AbstractMethodError("_inputGroupValues");
  }

  _createInputGroup(labelText, id, type, placeholder, ariaLabel) {
    return `
    <div class="form-group__input-group">
      <label for="${id}" class="label form-group__label">${labelText}</label>
      <input id="${id}" type="${type}" name="${id}" placeholder="${placeholder}" aria-label="${ariaLabel}"
      class="input form-group__input">
    </div>
    `;
  }

  _createInputSearch(labelText, id, placeholder, ariaLabel) {
    return `
    <div class="form-group__input-group">
      <label for="${id}" class="label form-group__label">${labelText}</label>
      <div class="input__container">
        <input id="${id}" type="text" name="${id}" placeholder="${placeholder}" aria-label="${ariaLabel}"
        class="input form-group__input">
        <ul class="research-list" id="research-list"></ul>
      </div>
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

  _validateInputMonetary(inp) {
    inp.addEventListener("input", (e) => {
      let value = e.target.value.replace(/\D/g, "");

      value = (value / 100).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });

      e.target.value = value;
    });

    inp.addEventListener("keydown", (e) => {
      if ([8, 9, 37, 39, 46].indexOf(e.keyCode) !== -1) {
        return;
      }
      if (
        (e.keyCode < 48 || e.keyCode > 57) &&
        (e.keyCode < 96 || e.keyCode > 105)
      ) {
        e.preventDefault();
      }
    });
  }

  addValidation() {
    throw new AbstractMethodError("addValidation");
  }

  render() {
    this.#build();
    this.#container.insertAdjacentHTML("beforeend", this.#form);
    this.addValidation();
  }
}
