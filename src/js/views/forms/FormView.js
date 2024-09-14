import { DefaultInputCtrl } from "../../controllers/forms/DefaultInputCtrl.js";
import { LookupInputCtrl } from "../../controllers/forms/LookupInputCtrl.js";
import { SubmitInputCtrl } from "../../controllers/forms/SubmitInputCtrl.js";
import { AbstractMethodError } from "../../errors/AbstractMethodError.js";
import { DefaultInputView } from "./DefaultInputView.js";
import { LookupInputView } from "./LookupInputView.js";
import { SubmitInputView } from "./SubmitInputView.js";
export class FormView {
  #container; // DOM element
  #formElement; // DOM element
  #formGroupElement; // DOM element
  #cssClass; // String
  #action; // String
  #method; // String
  #htmlStr; // String
  #inputCtrls = []; // Array
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

  get _inputsParams() {
    throw new AbstractMethodError("_inputsData");
  }

  get _inputSubmitParams() {
    throw new AbstractMethodError("_inputSubmitData");
  }

  get inputControllers() {
    return this.#inputCtrls;
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
    const setInpCtrl = (category) => {
      const categoryCtlr = {
        default: DefaultInputCtrl,
        search: LookupInputCtrl,
      };
      return categoryCtlr[category];
    };

    this.#inputCtrls = this._inputsParams.map((params) => {
      const InpCtrlClass = setInpCtrl(params.category);
      params.container = this._formGroupElement;
      return new InpCtrlClass(params);
    });
  }

  #createInputSubmit() {
    const params = this._inputSubmitParams;
    params.container = this._formElement;
    this.#inputSubmitView = new SubmitInputCtrl(params);
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

  init() {
    this.#build();
    this.#render();
    this.#defineGettersDomElements();
    this.#createInputs();
    this.#createInputSubmit();
    this.#changeElementsFocus();
  }
}
