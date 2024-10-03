// import { LoadingCardView } from "../views/LoadingCardView.js";
// import { NoComponentsView } from "../views/NoComponentsView.js";
import { simulateWait } from "../utils/tests.js";
import { StateCardView } from "../views/StateCardView.js";
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

  async #fetchFromApi() {
    const url = `http://localhost:3000/${this._endpoint}`;
    const response = await fetch(url);
    return await response.json();
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
      const data = await this.#fetchFromApi();
      if (data.length) {
        this.#containerElement.innerHTML = "";
        data.forEach((params) => this.#addComponent(params));
        this.#componentsViews.forEach((view) => view.init());
      } else {
        this.#StateCardView.type = "empty";
      }
    } catch (error) {
      // Implement: card server error.
      console.log("Server error:", error);
    }
  }

  #init() {
    this.#initCardState();
    this.#createComponents();
  }
}
