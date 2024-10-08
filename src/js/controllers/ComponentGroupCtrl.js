import { AbstractMethodError } from "../errors/AbstractMethodError.js";
import { StateCardView } from "../views/StateCardView.js";
import { ApiService } from "../service/ApiService.js";
import { simulateWait } from "../utils/tests.js";

export class ComponentGroupCtrl {
  #containerElement;
  #StateCardView;
  #apiData;
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

  #initCardState() {
    this.#StateCardView = new StateCardView(
      this.#containerElement,
      this._category
    );
    this.#StateCardView.defineTexts(...this._emptyCardsTexts);
  }

  #initControllers() {
    this.#componentsCtrls = this.#apiData.map((item) => {
      return new this._ComponentCtrlClass(this.#containerElement, item);
    });
  }

  async #fetchFromApi() {
    this.#StateCardView.type = "loading";
    await simulateWait(2);
    this.#apiData = await ApiService.fetchFrom(this._endpoint);
  }

  async #build() {
    try {
      await this.#fetchFromApi();
      if (this.#apiData.length) {
        this.#containerElement.innerHTML = "";
        this.#initControllers();
      } else {
        this.#StateCardView.type = "empty";
      }
    } catch (err) {
      this.#StateCardView.type = "error";
    }
  }

  #init() {
    this.#initCardState();
    this.#build();
  }
}
