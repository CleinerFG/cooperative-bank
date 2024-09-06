export class InputView {
  #inputElement; // DOM element
  #htmlStr; // String
  #strictRules; // Array
  #formatter; // String
  constructor(
    container,
    id,
    category,
    strictRules,
    formatter,
    labelText,
    placeholder
  ) {
    this.container = container;
    this.id = id;
    this.category = category;
    this.#strictRules = strictRules;
    this.#formatter = formatter;
    this.labelText = labelText;
    this.placeholder = placeholder;
  }

  get inputElement() {
    return this.#inputElement;
  }

  get #inputCategory() {
    return {
      default: `
        <div class="form-group__input-group">
          <label for="${this.id}" class="label form-group__label">${this.labelText}</label>
          <input id="${this.id}" type="${this.type}" name="${this.id}" placeholder="${this.placeholder}" aria-label="${this.labelText}"
            class="input form-group__input">
          <span id="${this.id}-error"></span>
        </div>`,

      submit: `
        <input id="${this.id}" class="btn btn-action" type="submit" value="${this.labelText}">`,

      search: `
        <div class="form-group__input-group">
          <label for="${this.id}" class="label form-group__label">${this.labelText}</label>
          <div class="input__container">
            <input id="${this.id}" type="text" name="${this.id}" placeholder="${this.placeholder}" aria-label="${this.labelText}"
              class="input form-group__input">
            <ul class="research-list" id="research-list-${this.id}"></ul>
          </div>
          <span id="${this.id}-error"></span>
        </div>`,
    };
  }

  #build() {
    this.#htmlStr = this.#inputCategory[this.category];
  }

  #render() {
    this.container.insertAdjacentHTML("beforeend", this.#htmlStr);
  }

  #defineGetterDomElement() {
    this.#inputElement = document.getElementById(this.id);
  }

  #failValidationHandler(method) {
    const actions = {
      add: () => this.#inputElement.classList.add("inp-error"),
      remove: () => this.#inputElement.classList.remove("inp-error"),
    };

    actions[method]();
  }

  #validate(customRule) {
    this.#inputElement.addEventListener("blur", (ev) => {
      const value = ev.target.value;
      if (value === "" || customRule(value)) {
        this.#failValidationHandler("add");
        return;
      }
      this.#failValidationHandler("remove");
    });
  }

  #strictNumber() {
    this.#inputElement.addEventListener("input", (ev) => {
      let value = ev.target.value.replace(/\D/g, "");
      ev.target.value = value;
    });
  }

  #formatMonetary() {
    this.#inputElement.addEventListener("input", (e) => {
      console.log(e.target.value);
      let value = e.target.value;
      value = (value / 100).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      e.target.value = value;
    });
  }

  init() {
    this.#build();
    this.#render();
    this.#defineGetterDomElement();
    this.#validate();
  }
}
