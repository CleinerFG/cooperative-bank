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

  _createComponentView(component) {
    return new _viewClass(this._container, component);
  }

  _createNoEventsView() {
    return new NoEventsView(this._container, this._pathManager);
  }

  _renderComponentView(componentView) {
    componentView.render();
  }

  _noComponentsHandler(text1, text2) {
    if (!this._components.length) {
      const noEventView = this._createNoEventsView();
      noEventView.render(text1, text2);
    }
  }

  addComponent(component) {
    const componentView = this._createComponentView(component);
    this._components.push(componentView);
  }

  removeComponent(componentName, componentID) {
    const element = document.getElementById(`${componentName}-${componentID}`);
    element.remove();
    this._components = this._components.filter(
      (componentView) => componentView.componentName.id !== componentID
    );
    this._noEventsHandler();
  }

  clearComponents() {
    this._components = [];
    this._container.innerHTML = "";
    this._noEventsHandler();
  }
}
