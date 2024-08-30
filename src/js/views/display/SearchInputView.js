export class SearchInputView {
  #researchData;
  #dataset;
  constructor(input, resultList, dataset, researchData) {
    this.input = input;
    this.resultList = resultList;
    this.#dataset = dataset;
    this.#researchData = researchData;
    this.init();
  }

  #getElementDataset(element) {
    return element.dataset[`${this.#dataset}Id`];
  }

  #setElementDataset(element, value) {
    element.dataset[`${this.#dataset}Id`] = value;
  }

  #filterList(query) {
    const normalizedQuery = query.toLowerCase();
    return this.#researchData.filter(({ name }) =>
      name.toLowerCase().includes(normalizedQuery)
    );
  }

  #handleItemClick = (event) => {
    const selectedItem = event.target;
    this.#setElementDataset(this.input, this.#getElementDataset(selectedItem));
    this.input.value = selectedItem.textContent;
    this.resultList.innerHTML = "";
  };

  #renderItems(listItems) {
    this.resultList.innerHTML = "";
    listItems.forEach(({ id, name }) => {
      const li = document.createElement("li");

      li.className = "query-item";
      this.#setElementDataset(li, id);
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
      this.resultList.innerHTML = "";
    }, 200);
  };

  init() {
    this.input.addEventListener("click", () =>
      this.#renderItems(this.#researchData)
    );
    this.input.addEventListener("input", this.#handleInput);
    this.input.addEventListener("blur", this.#clearItemsOnBlur);
  }
}
