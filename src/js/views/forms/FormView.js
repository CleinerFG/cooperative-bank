import { AbstractMethodError } from "../../errors/AbstractMethodError.js";
import { DefaultInputView } from "./DefaultInputView.js";
import { LookupInputView } from "./LookupInputView.js";
import { SearchInputView } from "./SearchInputView.js";
import { SubmitInputView } from "./SubmitInputView.js";
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
    const setInpView = (category) => {
      const categoryView = {
        default: DefaultInputView,
        search: LookupInputView,
      };
      return categoryView[category];
    };

    this.#inputViews = this._inputsData.map(
      ({
        id,
        inputmode,
        category,
        strictToNumber,
        formatter,
        labelText,
        placeholder,
      }) => {
        const InpViewClass = setInpView(category);
        return new InpViewClass(
          this._formGroupElement,
          id,
          inputmode,
          strictToNumber,
          formatter,
          labelText,
          placeholder
        );
      }
    );
  }

  #createInputSubmit() {
    const { id, labelText } = this._inputSubmitData;
    this.#inputSubmitView = new SubmitInputView(
      this._formElement,
      id,
      labelText
    );
  }

  #changeElementsFocus() {
    this._formElement.addEventListener("keydown", (ev) => {
      if (ev.key === "Enter") {
        ev.preventDefault();
        const inputs = Array.from(this._formElement.querySelectorAll("input"));
        const index = inputs.indexOf(document.activeElement);

        if (index < inputs.length - 1) {
          const nextInput = inputs[index + 1];
          if (nextInput.disabled) {
            const secondNextInput = inputs[index + 2];
            secondNextInput.focus();
          } else {
            nextInput.focus();
          }
        } else {
          inputs[0].focus();
        }
      }
    });
  }

  // _defineInputControllers() {
  //   throw new AbstractMethodError("_defineInputControllers");
  // }

  init() {
    this.#build();
    this.#render();
    this.#defineGettersDomElements();
    this.#createInputs();
    this.#createInputSubmit();
    this.#changeElementsFocus();
    // this._defineInputControllers();
  }
}
