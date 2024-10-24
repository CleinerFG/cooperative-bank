import { PathManager } from "../utils/PathManager.js";

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
    <div class="component-group">
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
          <button class="btn-unset btn-filter">
            <img id="filter-icon" class="icon filter-icon" alt="Filter Icon">
         </button>
        </div>
      </div>
      <h2 class="component-group__h2">Payments</h2>
      <div class="cards">
      </div>
    </div>
`;
  }

  #render() {
    this.#containerElement.insertAdjacentHTML("beforeend", this._template);
  }

  #assetHandler() {
    PathManager.updateIcon(`#filter-icon`, "icon-filter.svg");
  }

  #init() {
    this.#render();
    this.#assetHandler()
  }
}
