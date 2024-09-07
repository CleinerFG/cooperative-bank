import { InputView } from "./InputView.js";
import { users } from "../../testData.js";

export class SearchInputView extends InputView {
  #researchData = users; //test data in view

  set researchData(value) {
    this.#researchData = value
  }

  get #researchListElement() {
    return document.getElementById(`research-list-${this._id}`)
  }

  get #dataset() {
    return this._inputElement.dataset.valueId;
  }

  set #dataset(value) {
    this._inputElement.dataset.valueId = value;
  }

  #researchListVisibility() {
    this.#researchListElement.classList.toggle("research-list__active");
  }

  #filterList(query) {
    const normalizedQuery = query.toLowerCase();
    return this.#researchData.filter(({ name }) =>
      name.toLowerCase().includes(normalizedQuery)
    );
  }

  #handleItemClick = (event) => {
    const selectedItem = event.target;
    this._inputElement.dataset.valueId = selectedItem.dataset.itemValueId
    this.input.value = selectedItem.textContent;
    this.resultList.innerHTML = "";
  };

  #renderItems(listItems) {
    this.#researchListElement.innerHTML = "";
    listItems.forEach(({ id, name }) => {
      const li = document.createElement("li");

      li.className = "research-item";
      li.dataset.itemValueId = id
      li.textContent = name;

      li.addEventListener("click", this.#handleItemClick);
      this.resultList.appendChild(li);
    });
  }

  #handleInput = (event) => {
    const query = event.target.value;
    const filteredList = this.#filterList(query);
    this.#renderItems(filteredList);
  };

  #clearItemsOnBlur = () => {
    setTimeout(() => {
      this.#researchListVisibility();
      this.resultList.innerHTML = "";
    }, 200);
  };

  init() {
    this._inputElement.addEventListener("focus", () => {
      this.#renderItems(this.#researchData);
      this.#researchListVisibility();
    });
    this._inputElement.addEventListener("input", this.#handleInput);
    this._inputElement.addEventListener("blur", this.#clearItemsOnBlur);
  }
}
