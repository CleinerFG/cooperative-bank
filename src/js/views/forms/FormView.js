import { InputCtrl } from "../../controllers/forms/InputCtrl.js";
import { LookupInpCtrl } from "../../controllers/forms/LookupInpCtrl.js";
import { PasswordInpCtrl } from "../../controllers/forms/PasswordInpCtrl.js";
import { SubmitInpCtrl } from "../../controllers/forms/SubmitInpCtrl.js";
import { AbstractMethodError } from "../../errors/AbstractMethodError.js";

export class FormView {
  #containerElement;
  #formElement;
  #formGroupElement;
  #cssClass;
  #inputCtrls = [];
  constructor(params) {
    this.#containerElement = params.containerElement;
    this._id = params.id;
    this.#cssClass = params.cssClass ?? "";
  }

  get formElement() {
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

  get #template() {
    return `
    <form id="${this._id}" class="form ${this.#cssClass}">
      <div id="form-group-${this._id}" class="form-group">       
      </div>
    </form>
    `;
  }

  #render() {
    this.#containerElement.insertAdjacentHTML("beforeend", this.#template);
  }

  #defineGettersDomElements() {
    this.#formElement = document.getElementById(this._id);
    this.#formGroupElement = document.getElementById(`form-group-${this._id}`);
  }

  #createInputs() {
    const setInpCtrl = (category) => {
      const categoryCtrl = {
        default: InputCtrl,
        lookup: LookupInpCtrl,
        password: PasswordInpCtrl,
      };
      return categoryCtrl[category];
    };

    this.#inputCtrls = this._inputsParams.map((params) => {
      const InpCtrlClass = setInpCtrl(params.category);
      params.container = this._formGroupElement;
      return new InpCtrlClass(params);
    });
  }

  #createInputSubmit() {
    const params = this._inputSubmitParams;
    params.container = this.formElement;
    new SubmitInpCtrl(params);
  }

  #changeElementsFocus() {
    this.formElement.addEventListener("keydown", (ev) => {
      if (ev.key === "Enter") {
        ev.preventDefault();
        const inputs = Array.from(this.formElement.querySelectorAll("input"));
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
    this.#render();
    this.#defineGettersDomElements();
    this.#createInputs();
    this.#createInputSubmit();
    this.#changeElementsFocus();
  }
}
