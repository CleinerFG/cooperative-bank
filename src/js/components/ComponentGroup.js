import { ApiService } from "../service/ApiService.js";
import { PathManager } from "../utils/PathManager.js";
import { capitalize } from "../utils/stringUtils.js";
import { simulateWait } from "../utils/tests.js";

export class ComponentGroup {
  #containerElement;
  #componentsCtrls;
  #cardState;
  #apiData;
  #activeType;
  constructor(containerElement) {
    this.#containerElement = containerElement;
    this.#activeType = this._endpointConfig[0];
    this.#init();
  }

  get _ComponentCtrlClass() {
    throw new AbstractMethodError("_ComponentCtrl");
  }

  get _category() {
    throw new AbstractMethodError("_category");
  }

  get _endpointConfig() {
    throw new AbstractMethodError("_endpointsConfig");
  }

  get _emptyCardsTexts() {
    return ["Empty cards...", "There is nothing"];
  }

  get #cardsContainerElement() {
    return this.#containerElement.querySelector(".cards");
  }

  get #btnFilterElement1() {
    return this.#containerElement.querySelector("#component-type-1");
  }

  get #btnFilterElement2() {
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
            this._endpointConfig[0].name
          )}</div>
          <div id="component-type-2" class="component-type">${capitalize(
            this._endpointConfig[1].name
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
        this.#activeType.name
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

  #initCardState() {
    this.#cardState = new CardState(
      this.#cardsContainerElement,
      this._category
    );
    this.#cardState.defineTexts(...this._emptyCardsTexts);
  }

  #initControllers() {
    this.#componentsCtrls = this.#apiData.map((item) => {
      return new this._ComponentCtrlClass(this.#cardsContainerElement, item);
    });
  }

  async #fetchFromApi() {
    this.#cardState.type = "loading";
    await simulateWait(2);
    this.#apiData = await ApiService.fetchFrom(this.#activeType.endpoint);
  }

  async #build() {
    try {
      await this.#fetchFromApi();
      if (this.#apiData.length) {
        this.#cardsContainerElement.innerHTML = "";
        this.#initControllers();
      } else {
        this.#cardState.type = "empty";
        console.log("empty");
      }
    } catch (err) {
      this.#cardState.type = "error";
      console.log(err);
    }
  }

  #setupListeners() {
    const toggleClass = (ev, otherBtnFilterElement) => {
      ev.currentTarget.classList.add("component-type__active");
      otherBtnFilterElement.classList.remove("component-type__active");
    };

    const upActiveType = (currentType) => {
      this.#activeType = currentType;
      this.#activeTypeElement.textContent = capitalize(currentType.name);
    };

    this.#btnFilterElement1.addEventListener("click", (ev) => {
      toggleClass(ev, this.#btnFilterElement2);
      upActiveType(this._endpointConfig[0]);
      this.#build();
    });

    this.#btnFilterElement2.addEventListener("click", (ev) => {
      toggleClass(ev, this.#btnFilterElement1);
      upActiveType(this._endpointConfig[1]);
      this.#build();
    });
  }

  #init() {
    this.#render();
    this.#assetHandler();
    this.#setupListeners();
    this.#initCardState();
    this.#build();
  }
}
