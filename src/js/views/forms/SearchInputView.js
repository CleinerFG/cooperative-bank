import { InputView } from "./InputView.js";
import { users } from "../../testData.js";

export class SearchInputView extends InputView {
  #researchData = users; //test data in view

  _build() {
    return `
      <div class="form-group__input-group">
        <label for="${this._id}" class="label form-group__label">${this._labelText}</label>
        <div class="input__container">
          <input id="${this._id}" data-value-id="" type="text" name="${this._id}" placeholder="${this._placeholder}" aria-label="${this._labelText}"
          class="input form-group__input">
          <ul class="research-list" id="research-list-${this._id}"></ul>
        </div>
        <span id="${this._id}-error"></span>
      </div>`;
  }

  set researchData(value) {
    this.#researchData = value;
  }

  get #researchListElement() {
    return document.getElementById(`research-list-${this._id}`);
  }

  #researchListVisibility(method) {
    this.#researchListElement.classList[method]("research-list__active");
  }

  #filterList(query) {
    const normalizedQuery = query.toLowerCase();
    return this.#researchData.filter(({ name }) =>
      name.toLowerCase().includes(normalizedQuery)
    );
  }

  #handleItemClick = (event) => {
    const selectedItem = event.target;
    this._inputElement.dataset.valueId = selectedItem.dataset.itemValueId;
    this._inputElement.value = selectedItem.textContent;
    this._clearItems();
  };

  #renderItems(listItems) {
    this.#researchListVisibility("add");
    this.#researchListElement.innerHTML = "";
    listItems.forEach(({ id, name }) => {
      const li = document.createElement("li");
      

      li.className = "research-item";
      li.dataset.itemValueId = id;
      li.textContent = name;

      li.addEventListener("click", this.#handleItemClick);
      li.addEventListener("mousedown", (ev) => {
        ev.preventDefault();
        this._inputElement.focus();
      });
      this.#researchListElement.insertAdjacentElement("beforeend", li);
    });
  }

  _handleInput(event) {
    const query = event.target.value;
    const filteredList = this.#filterList(query);
    this.#renderItems(filteredList);
  }

  _clearItems() {
    this.#researchListVisibility("remove");
    this.#researchListElement.innerHTML = "";
  }

  _init() {
    super._init();
    this._addValidator((ev) => {
      const valueId = ev.target.dataset.valueId;
      return !this.#researchData.some((item) => item.id === Number(valueId));
    });
    this._initValidators();
    this._inputElement.addEventListener("focus", () => {
      this.#renderItems(this.#researchData);
    });
    this._inputElement.addEventListener("input", this._handleInput.bind(this));
    this._inputElement.addEventListener("blur", this._clearItems.bind(this));
  }
}
