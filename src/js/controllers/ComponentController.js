import pathUtil from "../utils/PathManager.js";
import { NoEventsView } from "../views/NoEventsView.js";

export class ComponentController {
  constructor(container, viewClass, pathManager = pathUtil) {
    this._container = container;
    this._viewClass = viewClass;
    this._components = [];
    this._pathManager = pathManager;
  }

  get container() {
    return this._container;
  }

  get viewClass() {
    return this._viewClass;
  }

  get components() {
    return this._components;
  }

  get pathManager() {
    return this._pathManager;
  }

  createComponentView(component) {
    return new this._viewClass(this._container, component);
  }

  createNoEventsView() {
    return new NoEventsView(this._container, this._pathManager);
  }

  renderComponentView(componentView) {
    componentView.render();
  }

  noComponentsHandler(text1, text2) {
    if (!this._components.length) {
      const noEventView = this._createNoEventsView();
      noEventView.render(text1, text2);
    }
  }

  addComponent(component) {
    const componentView = this.createComponentView(component);
    this._components.push(componentView);
  }

  renderComponents() {
    this._components.forEach((view) => view.render());
  }

  removeComponent(componentName, componentID) {
    const element = document.getElementById(`${componentName}-${componentID}`);
    element.remove();
    this._components = this._components.filter(
      (view) => view.componentName.id !== componentID
    );
    this.noComponentsHandler();
  }

  clearComponents() {
    this._components = [];
    this._container.innerHTML = "";
    this.noComponentsHandler();
  }
}
