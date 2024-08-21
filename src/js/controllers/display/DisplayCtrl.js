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
  }

  get noComponentsCtrl() {
    return this.#noComponentsCtrl;
  }

  #createComponentView(component) {
    return new this.#viewClass(this.#container, component);
  }

  // This method must be overwriting in the subclass
  _noComponentsHandler() {
    if (!this.#componentsViews.length) {
      this.#noComponentsCtrl.init()
    }
  }

  _removeComponent(componentName, componentID) {
    // Changer his visibility in the subclass, and defined componentName
    const element = document.getElementById(`${componentName}-${componentID}`);
    element.remove();
    this.#componentsViews = this.#componentsViews.filter(
      (view) => view.componentName.id !== componentID
    );
    this._noComponentsHandler();
  }

  addComponent(component) {
    const view = this.#createComponentView(component);
    this.#componentsViews.push(view);
  }

  renderComponent(view) {
    view.render();
  }

  renderComponents() {
    this._noComponentsHandler();
    this.#componentsViews.forEach((view) => this.renderComponent(view));
  }

  clearComponents() {
    this.#componentsViews = [];
    this.#container.innerHTML = "";
    this._noComponentsHandler();
  }
}
