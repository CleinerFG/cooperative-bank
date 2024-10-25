import { AbstractMethodError } from "../errors/AbstractMethodError.js";
import { ApiService } from "../service/ApiService.js";
import { simulateWait } from "../utils/tests.js";
import { CardState } from "../components/CardState.js";
import { ComponentGroupView } from "../views/ComponentGroupView.js";
export class ComponentGroupCtrl {
  #containerElement;
  #cardState;
  #apiData;
  #componentGroupView;
  #componentsCtrls;
  constructor(containerElement) {
    this.#containerElement = containerElement;
    this.#init();
  }

  get _ComponentCtrlClass() {
    throw new AbstractMethodError("_ComponentCtrl");
  }

  get _category() {
    throw new AbstractMethodError("_category");
  }

  get _endpoint() {
    return "";
  }

  get _emptyCardsTexts() {
    return ["Empty cards...", "There is nothing"];
  }

  get #cardsContainerElement() {
    return this.#containerElement.querySelector(".cards");
  }

  #initCardState() {
    this.#cardState = new CardState(
      this.#cardsContainerElement,
      this._category
    );
    this.#cardState.defineTexts(...this._emptyCardsTexts);
  }

  #initComponentGroupView() {
    this.#componentGroupView = new ComponentGroupView(this.#containerElement);
  }

  #initControllers() {
    this.#componentsCtrls = this.#apiData.map((item) => {
      return new this._ComponentCtrlClass(this.#cardsContainerElement, item);
    });
  }

  async #fetchFromApi() {
    this.#cardState.type = "loading";
    await simulateWait(2);
    this.#apiData = await ApiService.fetchFrom(this._endpoint);
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

  #init() {
    this.#initComponentGroupView();
    this.#initCardState();
    this.#build();
  }
}
