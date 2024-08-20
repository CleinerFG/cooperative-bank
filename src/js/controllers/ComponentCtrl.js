import pathUtil from "../utils/PathManager.js";
import { NoEventsView } from "../views/NoEventsView.js";

export class ComponentCtrl {
  #container;
  #viewClass;
  #componentsView;
  #pathManager;
  constructor(container, viewClass, pathManager = pathUtil) {
    this.#container = container;
    this.#viewClass = viewClass;
    this.#componentsView = [];
    this.#pathManager = pathManager;
  }

  #createComponentView(component) {
    return new this.#viewClass(this.#container, component);
  }

  #createNoEventsView() {
    return new NoEventsView(this.#container, this.#pathManager);
  }

  // This method must be overwriting in the subclass
  _noComponentsHandler(text1, text2) {
    if (!this.#componentsView.length) {
      const noEventsView = this.#createNoEventsView();
      noEventsView.render(text1, text2);
    }
  }

  _removeComponent(componentName, componentID) {
    // Changer his visibility in the subclass, and defined componentName
    const element = document.getElementById(`${componentName}-${componentID}`);
    element.remove();
    this.#componentsView = this.#componentsView.filter(
      (view) => view.componentName.id !== componentID
    );
    this._noComponentsHandler();
  }

  addComponent(component) {
    const view = this.#createComponentView(component);
    this.#componentsView.push(view);
  }

  renderComponent(view) {
    view.render();
  }

  renderComponents() {
    this._noComponentsHandler();
    this.#componentsView.forEach((view) => this.renderComponent(view));
  }

  clearComponents() {
    this.#componentsView = [];
    this.#container.innerHTML = "";
    this._noComponentsHandler();
  }
}
