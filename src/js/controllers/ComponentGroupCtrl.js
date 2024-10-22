import { AbstractMethodError } from "../errors/AbstractMethodError.js";
import { ApiService } from "../service/ApiService.js";
import { simulateWait } from "../utils/tests.js";
import { CardState } from "../components/CardState.js";
import { ComponentGroupView } from "../views/ComponentGroupView.js";
export class ComponentGroupCtrl {
  #containerElement;
  #cardState;
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
    this.#cardState = new CardState(this.#containerElement, this._category);
    this.#cardState.defineTexts(...this._emptyCardsTexts);
  }

  #initControllers() {
    new ComponentGroupView(this.#containerElement);
    // this.#componentsCtrls = this.#apiData.map((item) => {
    //   return new this._ComponentCtrlClass(this.#containerElement, item);
    // });
  }

  async #fetchFromApi() {
    this.#cardState.type = "loading";
    await simulateWait(0);
    this.#apiData = await ApiService.fetchFrom(this._endpoint);
  }

  async #build() {
    try {
      await this.#fetchFromApi();
      if (this.#apiData.length) {
        this.#containerElement.innerHTML = "";
        this.#initControllers();
      } else {
        this.#cardState.type = "empty";
        console.log("empty");
      }
    } catch (err) {
      this.#cardState.type = "error";
      console.log(err);

      console.log("error");
    }
  }

  #init() {
    this.#initCardState();
    this.#build();
  }
}
