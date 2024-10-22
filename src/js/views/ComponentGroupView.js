export class ComponentGroupView {
  #containerElement;
  #type1;
  #type2;
  #activeType;
  constructor(containerElement, type1, type2) {
    this.#containerElement = containerElement;
    this.#type1 = type1;
    this.#type2 = type2;
    this.#init();
  }

  get _template() {
    return `
    <div class="cards-group">
      <div class="dashboard-container">
        <div class="dashboard__types">
        <div class="dashboard__type-1">${this.#type1}</div>
        <div class="dashboard__type-2">${this.#type2}</div>
      </div>
      <div class="dashboard__filter">
        <div class="input__container">
          <label for="start-date-filter">Start date</label>
          <input id="start-date-filter" type="date">
          <label for="end-date-filter">End date</label>
          <input id="end-date-filter" type="date">
      </div>
      <button>Filter</button>
      </div>
    </div>
    <h2>${this.#activeType}</h2>
    <div class="cards">
    
    </div>
  </div>`;
  }

  #render() {
    this.#containerElement.insertAdjacentHTML("beforeend", this._template());
  }

  #init() {
    this.#render();
  }
}
