import { simulateWait } from "../utils/tests.js";
import { StateCardView } from "../views/StateCardView.js";
import { ApiService } from "../service/ApiService.js";
export class ComponentsCtrl {
  #ContainerElement;
  #ComponentView;
  #ComponentModel;
  #componentsViews = [];
  #StateCardView;
  constructor(
    ContainerElement,
    ComponentView,
    ComponentModel,
    category
  ) {
    this.#ContainerElement = ContainerElement;
    this.#ComponentView = ComponentView;
    this.#ComponentModel = ComponentModel;
    this._category = category;
    this.#init();
  }

  get _endpoint() {
    return "";
  }

  get ContainerElement() {
    return this.#ContainerElement;
  }

  get category() {
    return this._category;
  }

  #initCardState() {
    this.#StateCardView = new StateCardView(
      this.ContainerElement,
      this.category
    );
    this._defineEmptyCardsTexts();
  }

  #addComponent(params) {
    const model = new this.#ComponentModel(params);
    const view = new this.#ComponentView(this.#ContainerElement, model);
    this.#componentsViews.push(view);
  }

  _defineEmptyCardsTexts(...texts) {
    this.#StateCardView.defineTexts(...texts);
  }

  async #createComponents() {
    this.#StateCardView.type = "loading";
    await simulateWait(2);
    try {
      const data = await ApiService.fetchFrom(this._endpoint);
      if (data.length) {
        this.#ContainerElement.innerHTML = "";
        data.forEach((params) => this.#addComponent(params));
      } else {
        this.#StateCardView.type = "empty";
      }
    } catch (error) {
      console.log(error);
      
      this.#StateCardView.type = "error";
    }
  }

  #init() {
    this.#initCardState();
    this.#createComponents();
  }
}
