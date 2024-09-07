export class InputView {
  #container; // DOM element
  #inputmode; //String
  #category; // String
  #strictRules; // Array
  #formatter; // String
  #labelText; // String
  #placeholder; // String
  #htmlStr; // String
  #strictMethods = {
    number: () => {
      this._inputElement.addEventListener("input", (ev) => {
        let value = ev.target.value.replace(/\D/g, "");
        ev.target.value = value;
      });
    },
  };
  #formatterMethods = {
    monetary: () => {
      this._inputElement.addEventListener("input", (e) => {
        console.log(e.target.value);
        let value = e.target.value;
        value = (value / 100).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
        e.target.value = value;
      });
    },
    percentage: () => {
      // Format in percentage -> 0,00%
    },
  };
  constructor(
    container,
    id,
    inputmode,
    category,
    strictRules,
    formatter,
    labelText,
    placeholder
  ) {
    this.#container = container;
    this._id = id;
    this.#inputmode = inputmode ?? "text";
    this.#category = category;
    this.#strictRules = strictRules;
    this.#formatter = formatter;
    this.#labelText = labelText;
    this.#placeholder = placeholder;
  }

  get inputElement() {
    return this._inputElement;
  }

  get #inputCategory() {
    return {
      default: `
        <div class="form-group__input-group">
          <label for="${this._id}" class="label form-group__label">${this.#labelText
        }</label>
          <input id="${this._id}" type="text" inputmode="${this.#inputmode}" name="${this._id
        }" placeholder="${this.#placeholder}" aria-label="${this.#labelText}"
            class="input form-group__input">
          <span id="${this._id}-error"></span>
        </div>`,

      submit: `
        <input id="${this._id}" class="btn btn-action" type="submit" value="${this.#labelText
        }">`,

      search: `
        <div class="form-group__input-group">
          <label for="${this._id}" class="label form-group__label">${this.#labelText
        }</label>
          <div class="input__container">
            <input id="${this._id}" data-value-id="" type="text" name="${this._id
        }" placeholder="${this.#placeholder}" aria-label="${this.#labelText}"
              class="input form-group__input">
            <ul class="research-list" id="research-list-${this._id}"></ul>
          </div>
          <span id="${this._id}-error"></span>
        </div>`,
    };
  }

  #build() {
    this.#htmlStr = this.#inputCategory[this.#category];
  }

  #render() {
    this.#container.insertAdjacentHTML("beforeend", this.#htmlStr);
  }

  #defineGetterDomElement() {
    this._inputElement = document.getElementById(this._id);
  }

  #failValidationHandler(method) {
    const actions = {
      add: () => this._inputElement.classList.add("inp-error"),
      remove: () => this._inputElement.classList.remove("inp-error"),
    };

    actions[method]();
  }

  #validate(customRule = () => { }) {
    this._inputElement.addEventListener("blur", (ev) => {
      const value = ev.target.value;
      if (value === "" || customRule(value)) {
        console.log(`Value in ${this._id} - inside: ${value}`);
        this.#failValidationHandler("add");
        return;
      }
      this.#failValidationHandler("remove");
    });
  }

  #defineStrictRules() {
    if (this.#strictRules) {
      this.#strictRules.forEach((rule) => {
        this.#strictMethods[rule]();
      });
    }
  }

  #defineFormatter() {
    if (this.#formatter) {
      this.#formatterMethods[this.#formatter]();
    }
  }

  init() {
    this.#build();
    this.#render();
    this.#defineGetterDomElement();
    this.#validate();
    this.#defineStrictRules();
    this.#defineFormatter();
  }
}
