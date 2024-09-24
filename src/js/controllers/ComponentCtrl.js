import { NoComponentsView } from "../views/NoComponentsView.js";

export class ComponentCtrl {
  #container;
  #viewClass;
  #componentsViews;
  constructor(container, viewClass, category) {
    this.#container = container;
    this.#viewClass = viewClass;
    this._category = category;
    this.#componentsViews = [];
    this._noComponentsView = new NoComponentsView(this.#container);
    this._defineNoComponentsSettings();
  }

  #createView(component) {
    return new this.#viewClass(this.#container, component);
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

  addComponent(component) {
    const view = this.#createView(component);
    this.#componentsViews.push(view);
  }

  removeComponent(id) {
    this.#componentsViews = this.#componentsViews.filter((view) => {
      if (view.componentModel.id === id) view.selfRemove();
      return view.componentModel.id !== id;
    });
    this.#noComponentsHandler();
  }

  clearComponents() {
    this.#componentsViews = [];
    this.#container.innerHTML = "";
    this.#noComponentsHandler();
  }

  initComponents() {
    this.#noComponentsHandler();
    this.#componentsViews.forEach((view) => view.init());
  }
}
