import { Input } from "../../components/form/Input.js";
import { PasswordInput } from "../../components/form/PasswordInput.js";
import { SearchInput } from "../../components/form/SearchInput.js";
import { SubmitButton } from "../../components/form/SubmitButton.js";

export class FormViewUp {
  #containerElement;
  #id;
  #cssClass;
  #inputParams;
  #submitParams;
  #inputs;
  constructor(viewParams, inputParams, submitParams) {
    this.#containerElement = viewParams.containerElement;
    this.#id = viewParams.id;
    this.#cssClass = viewParams.cssClass ?? "";
    this.#inputParams = inputParams;
    this.#submitParams = submitParams;
    this.#init();
  }

  get formElement() {
    return document.getElementById(this.#id);
  }

  get #formGroupElement() {
    return document.getElementById(`form-group-${this.#id}`);
  }

  get #template() {
    return `
    <form id="${this.#id}" class="form ${this.#cssClass}">
      <div id="form-group-${this.#id}" class="form-group">       
      </div>
    </form>
    `;
  }

  #render() {
    this.#containerElement.insertAdjacentHTML("beforeend", this.#template);
  }

  #buildInputs() {
    const setInp = (category) => {
      const categories = {
        default: Input,
        search: SearchInput,
        password: PasswordInput,
      };
      return categories[category];
    };

    this.#inputs = this.#inputParams.map((params) => {
      const InpClass = setInp(params.category);
      params.containerElement = this.#formGroupElement;
      return new InpClass(params);
    });
  }

  #createInputSubmit() {
    const params = this.#submitParams;
    params.containerElement = this.formElement;
    new SubmitButton(params);    
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

  #init() {
    this.#render();
    this.#buildInputs();
    this.#createInputSubmit();
    // this.#changeElementsFocus();
  }
}
