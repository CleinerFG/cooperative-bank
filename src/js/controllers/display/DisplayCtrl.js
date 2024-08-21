import { NoComponentsCtrl } from "./NoComponentsCtrl.js";

export class DisplayCtrl {
  #container;
  #viewClass;
  #componentsViews;
  #noComponentsCtrl;
  constructor(container, viewClass) {
    this.#container = container;
    this.#viewClass = viewClass;
    this.#componentsViews = [];
    this.#noComponentsCtrl = new NoComponentsCtrl(this.#container);
    this._defineNoComponentsSettings();
  }

  get noComponentsCtrl() {
    return this.#noComponentsCtrl;
  }

  #createComponentView(component) {
    return new this.#viewClass(this.#container, component);
  }

  #noComponentsHandler() {
    if (!this.#componentsViews.length) {
      this.#noComponentsCtrl.init();
    }
  }

  _defineNoComponentsSettings(t1 = "There is nothing...") {
    console.log("inside settings")
    this.noComponentsCtrl.defineTexts(t1);
  }

  removeComponent(id) {
    this.#componentsViews = this.#componentsViews.filter((view) => {
      if (view.component.id === id) view.selfRemove();
      return view.component.id !== id;
    });
    this.#noComponentsHandler();
  }

  addComponent(component) {
    const view = this.#createComponentView(component);
    this.#componentsViews.push(view);
  }

  renderComponent(view) {
    view.render();
  }

  renderComponents() {
    this.#noComponentsHandler();
    this.#componentsViews.forEach((view) => this.renderComponent(view));
  }

  clearComponents() {
    this.#componentsViews = [];
    this.#container.innerHTML = "";
    this.#noComponentsHandler();
  }
}
