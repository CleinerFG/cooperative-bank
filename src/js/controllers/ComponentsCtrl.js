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
  }

  #addComponent(params) {
    const model = new this.#ComponentModelClass(params);
    const view = new this.#ComponentViewClass(this.#containerElement, model);
    this.#componentsViews.push(view);
  }

  _defineNoComponentsSettings() {
    // const t1 = "There is nothing...";
    // this._noComponentsView.defineTexts(t1);
    // this._noComponentsView.imgId = `${this._category}-no-components-img`;
  }

  async #createComponents() {
    this.#StateCardView.type = "loading";
    this.#StateCardView.init();
    await simulateWait(2);
    try {
      const data = await this.#fetchFromApi();
      // if (data.length)
      if (false) {
        data.forEach((params) => this.#addComponent(params));
        this.#componentsViews.forEach((view) => view.init());
      } else {
        this.#StateCardView.remove();
        this.#StateCardView.type = "empty";
        this.#StateCardView.init();
      }
    } catch (error) {
      // Implement: card server error.
      console.log("Server error:", error);
    } finally {
      // this.#StateCardView.remove();
    }
  }

  #init() {
    this.#initCardState();
    this._defineNoComponentsSettings();
    this.#createComponents();
  }
}
