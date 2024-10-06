import { simulateWait } from "../utils/tests.js";
import { StateCardView } from "../views/StateCardView.js";
import { ApiService } from "../service/ApiService.js";
export class ComponentsCtrl {
  #containerElement;
  #ComponentViewClass;
  #ComponentModelClass;
  #componentsViews = [];
  #StateCardView;
  constructor(
    containerElement,
    ComponentViewClass,
    ComponentModelClass,
    category
  ) {
    this.#containerElement = containerElement;
    this.#ComponentViewClass = ComponentViewClass;
    this.#ComponentModelClass = ComponentModelClass;
    this._category = category;
    this.#init();
  }

  get _endpoint() {
    return "";
  }

  get containerElement() {
    return this.#containerElement;
  }

  get category() {
    return this._category;
  }

  #initCardState() {
    this.#StateCardView = new StateCardView(
      this.containerElement,
      this.category
    );
    this._defineEmptyCardsTexts();
  }

  #addComponent(params) {
    const model = new this.#ComponentModelClass(params);
    const view = new this.#ComponentViewClass(this.#containerElement, model);
    this.#componentsViews.push(view);
  }

  _defineEmptyCardsTexts(...texts) {
    this.#StateCardView.defineTexts(...texts);
  }

  async #createComponents() {
    this.#StateCardView.type = "loading";
    await simulateWait(3);
    try {
      const data = await ApiService.fetchFrom(this._endpoint);
      if (data.length) {
        this.#containerElement.innerHTML = "";
        data.forEach((params) => this.#addComponent(params));
        this.#componentsViews.forEach((view) => view.init());
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
