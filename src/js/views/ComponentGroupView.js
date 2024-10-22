export class ComponentGroupView {
  #containerElement;
  #type1;
  #type2;
  #activeType = "Type1";
  constructor(containerElement, type1 = "Type1", type2 = "Type2") {
    this.#containerElement = containerElement;
    this.#type1 = type1;
    this.#type2 = type2;
    this.#init();
  }

  get _template() {
    return `
    <div class="cards-group">
      <div class="dashboard-container">
        <div class="component-types">
          <div class="component-type component-type__active">${
            this.#type1
          }</div>
          <div class="component-type">${this.#type2}</div>
        </div>
        <div class="dashboard__filter">
          <div class="inputs__container">
            <div class="date-container">
              <label for="start-date-filter">Start date</label>
              <input id="start-date-filter" class="inp inp-date" type="date">
            </div>
            <div class="date-container">
              <label for="end-date-filter">End date</label>
              <input id="end-date-filter" class="inp inp-date" type="date">
            </div>
          </div>
          <button>Filter</button>
        </div>
      </div>
      <h2>${this.#activeType}</h2>
      <div class="cards">
      
      </div>
    </div>
`;
  }

  #render() {
    this.#containerElement.insertAdjacentHTML("beforeend", this._template);
  }

  #init() {
    this.#render();
  }
}
