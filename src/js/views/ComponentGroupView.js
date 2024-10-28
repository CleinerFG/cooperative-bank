import { PathManager } from "../utils/PathManager.js";
import { capitalize } from "../utils/stringUtils.js";

export class ComponentGroupView {
  #containerElement;
  #type1;
  #type2;
  #activeType;
  constructor(containerElement, type1, type2) {
    this.#containerElement = containerElement;
    this.#type1 = type1;
    this.#type2 = type2;
    this.#activeType = type1;
    this.#init();
  }

  get btnFilterElement1() {
    return this.#containerElement.querySelector("#component-type-1");
  }

  get btnFilterElement2() {
    return this.#containerElement.querySelector("#component-type-2");
  }

  get #activeTypeElement() {
    return this.#containerElement.querySelector("#active-type");
  }

  get _template() {
    return `
    <div class="component-group">
      <div class="dashboard-container">
        <div class="component-types">
          <div id="component-type-1" class="component-type component-type__active">${capitalize(
            this.#type1
          )}</div>
          <div id="component-type-2" class="component-type">${capitalize(
            this.#type2
          )}</div>
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
      <h2 id="active-type" class="component-group__h2">${capitalize(
        this.#activeType
      )}</h2>
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

  #setupListeners() {
    const toggleClass = (ev, otherBtnFilterElement) => {
      ev.currentTarget.classList.add("component-type__active");
      otherBtnFilterElement.classList.remove("component-type__active");
    };

    const upActiveType = (type) => {
      this.#activeType = type;
      this.#activeTypeElement.textContent = capitalize(type);
    };

    this.btnFilterElement1.addEventListener("click", (ev) => {
      toggleClass(ev, this.btnFilterElement2);
      upActiveType(this.#type1)
    });

    this.btnFilterElement2.addEventListener("click", (ev) => {
      toggleClass(ev, this.btnFilterElement1);
      upActiveType(this.#type2)
    });
  }

  #init() {
    this.#render();
    this.#assetHandler();
    this.#setupListeners();
  }
}
