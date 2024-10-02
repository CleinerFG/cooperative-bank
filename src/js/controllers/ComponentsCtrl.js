import { LoadingCardView } from "../views/LoadingCardView.js";
import { NoComponentsView } from "../views/NoComponentsView.js";
import { simulateWait } from "../utils/tests.js";
export class ComponentsCtrl {
  #containerElement;
  #ComponentViewClass;
  #ComponentModelClass;
  #componentsViews = [];
  #loadCardView;
  constructor(
    containerElement,
    ComponentViewClass,
    ComponentModelClass,
    category
  ) {
    this.#containerElement = containerElement;
    this.#ComponentViewClass = ComponentViewClass;
    this.#ComponentModelClass = ComponentModelClass;
    this.#loadCardView = new LoadingCardView(this.containerElement);
    this._noComponentsView = new NoComponentsView(this.#containerElement);
    this._category = category;
    this.#init();
  }

  get _endpoint() {
    return "";
  }

  get containerElement() {
    return this.#containerElement;
  }

  async #fetchFromApi() {
    const url = `http://localhost:3000/${this._endpoint}`;
    const response = await fetch(url);
    return await response.json();
  }

  #addComponent(params) {
    const model = new this.#ComponentModelClass(params);
    const view = new this.#ComponentViewClass(this.#containerElement, model);
    this.#componentsViews.push(view);
  }

  _defineNoComponentsSettings() {
    const t1 = "There is nothing...";
    this._noComponentsView.defineTexts(t1);
    this._noComponentsView.imgId = `${this._category}-no-components-img`;
  }

  async #createComponents() {
    this.#loadCardView.render();
    // Simulate the wait time when loading data
    await simulateWait(2);
    try {
      const data = await this.#fetchFromApi();
      if (data.length) {
        data.forEach((params) => this.#addComponent(params));
        this.#componentsViews.forEach((view) => view.init());
      } else {
        this._noComponentsView.init();
      }
    } catch (error) {
      // Implement: card server error.
      console.log("Server error:", error);
    } finally {
      this.#loadCardView.remove();
    }
  }

  #init() {
    this._defineNoComponentsSettings();
    this.#createComponents();
  }
}
