import { NoComponentsCtrl } from "./NoComponentsCtrl.js";

export class ComponentCtrl {
  #container;
  #viewClass;
  #componentsViews;
  #noComponentsCtrl;
  constructor(container, viewClass, category) {
    this.#container = container;
    this.#viewClass = viewClass;
    this._category = category;
    this.#componentsViews = [];
    this.#noComponentsCtrl = new NoComponentsCtrl(this.#container);
    this._defineNoComponentsSettings();
  }

  get noComponentsCtrl() {
    return this.#noComponentsCtrl;
  }

  #createView(component) {
    return new this.#viewClass(this.#container, component);
  }

  #noComponentsHandler() {
    if (!this.#componentsViews.length) {
      this.#noComponentsCtrl.init();
    }
  }

  _defineNoComponentsSettings() {
    const t1 = "There is nothing...";
    this.noComponentsCtrl.defineTexts(t1);
    this.noComponentsCtrl.defineImgId(`${this._category}-no-components-img`);
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
