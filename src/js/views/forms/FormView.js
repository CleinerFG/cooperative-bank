import { AbstractMethodError } from "../../errors/AbstractMethodError.js";
export class FormView {
  #container;
  #element;
  #formGroupElement;
  #cssClass;
  #action;
  #method;
  #form;
  constructor(container, id, cssClass, action, method) {
    this.#container = container;
    this._id = id;
    this.#cssClass = cssClass;
    this.#action = action;
    this.#method = method;
  }

  get _element() {
    return this.#element;
  }

  get _formGroupElement() {
    return this.#formGroupElement;
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
    <form id="${this._id}" class="form ${this.#cssClass}" 
    action="${this.#action}" method="${this.#method}">
      <div class="form-group-${this._id}">       
      </div>
       ${this._buildSubmitButton()}
    </form>
    `;
  }

  #render() {
    this.#container.insertAdjacentHTML("beforeend", this.#form);
  }

  #setElements() {
    this.#element = document.getElementById(this._id);
    this.#formGroupElement = document.getElementById(`form-group-${this._id}`);
  }

  init() {
    this.#build();
    this.#render();
    this.#setElements();
  }
}
