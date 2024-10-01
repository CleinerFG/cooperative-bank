import { NoComponentsView } from "../views/NoComponentsView.js";

export class ComponentsCtrl {
  #container;
  #viewClass;
  #modelClass;
  #componentsViews;
  constructor(container, viewClass, modelClass, category) {
    this.#container = container;
    this.#viewClass = viewClass;
    this.#modelClass = modelClass;
    this._category = category;
    this.#componentsViews = [];
    this._noComponentsView = new NoComponentsView(this.#container);
    this._defineNoComponentsSettings();
    this.#init();
  }

  get _endpoint() {
    return "";
  }

  #createView(model) {
    return new this.#viewClass(this.#container, model);
  }

  #addComponent(params) {
    const model = new this.#modelClass(params);
    const view = this.#createView(model);
    this.#componentsViews.push(view);
  }

  async #fetchFromApi() {
    const response = await fetch(`http://localhost:3000/${this._endpoint}`);
    return await response.json();
  }

  async #createComponents() {
    const data = await this.#fetchFromApi();
    data.forEach((params) => this.#addComponent(params));
  }

  #noComponentsHandler() {
    if (!this.#componentsViews.length) {
      this._noComponentsView.init();
    }
  }

  _defineNoComponentsSettings() {
    const t1 = "There is nothing...";
    this._noComponentsView.defineTexts(t1);
    this._noComponentsView.imgId = `${this._category}-no-components-img`;
  }

  async #init() {
    await this.#createComponents();
    this.#componentsViews.forEach((view) => view.init());
    this.#noComponentsHandler();
  }
}
