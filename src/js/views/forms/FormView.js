import { AbstractMethodError } from "../../errors/AbstractMethodError.js";
import { InputView } from "./InputView.js";
export class FormView {
  #container; // DOM element
  #formElement; // DOM element
  #formGroupElement; // DOM element
  #cssClass; // String
  #action; // String
  #method; // String
  #htmlStr; // String
  #inputViews = []; // Array [InputView,]
  #inputSubmitView; // InputView
  constructor(container, id, cssClass, action, method) {
    this.#container = container;
    this._id = id;
    this.#cssClass = cssClass;
    this.#action = action;
    this.#method = method;
  }

  get _formElement() {
    return this.#formElement;
  }

  get _formGroupElement() {
    return this.#formGroupElement;
  }

  get _inputsData() {
    throw new AbstractMethodError("_inputsData");
  }

  get _inputSubmitData() {
    throw new AbstractMethodError("_inputSubmitData");
  }

  get inputViews() {
    return this.#inputViews;
  }

  get inputSubmitView() {
    return this.#inputSubmitView;
  }

  #build() {
    this.#htmlStr = `
    <form id="${this._id}" class="form ${this.#cssClass}" 
    action="${this.#action}" method="${this.#method}">
      <div id="form-group-${this._id}" class="form-group">       
      </div>
    </form>
    `;
  }

  #render() {
    this.#container.insertAdjacentHTML("beforeend", this.#htmlStr);
  }

  #defineGettersDomElements() {
    this.#formElement = document.getElementById(this._id);
    this.#formGroupElement = document.getElementById(`form-group-${this._id}`);
  }

  #createInputs() {
    this.#inputViews = this._inputsData
      .slice(0, -1)
      .map(({ id, category, labelText, placeholder }) => {
        const view = new InputView(
          this._formGroupElement,
          category,
          id,
          labelText,
          placeholder
        );
        view.init();
        return view;
      });
  }

  #createInputSubmit() {
    const { id, labelText } = this._inputSubmitData;
    const view = new InputView(this._formElement, "submit", id, labelText);
    view.init();
    this.#inputSubmitView = view;
  }

  _defineInputControllers() {
    throw new AbstractMethodError("_defineInputControllers");
  }

  init() {
    this.#build();
    this.#render();
    this.#defineGettersDomElements();
    this.#createInputs();
    this.#createInputSubmit();
    this._defineInputControllers();
  }
}
