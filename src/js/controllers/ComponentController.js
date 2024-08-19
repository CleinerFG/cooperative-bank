import pathUtil from "../utils/PathManager.js";
import { NoEventsView } from "../views/NoEventsView.js";

export class ComponentController {
  constructor(container, viewClass, pathManager = pathUtil) {
    this._container = container;
    this._viewClass = viewClass;
    this._components = [];
    this._pathManager = pathManager;
  }

  _createComponentView(component) {
    return new this._viewClass(this._container, component);
  }

  _createNoEventsView() {
    return new NoEventsView(this._container, this._pathManager);
  }

  _renderComponentView(componentView) {
    componentView.render();
  }

  _noComponentsHandler(text1, text2) {
    if (!this._components.length) {
      const noEventsView = this._createNoEventsView();
      noEventsView.render(text1, text2);
    }
  }

  _addComponent(component) {
    const componentView = this._createComponentView(component);
    this._components.push(componentView);
  }

  _renderComponents() {
    this._noComponentsHandler();
    this._components.forEach((view) => view.render());
  }

  _removeComponent(componentName, componentID) {
    const element = document.getElementById(`${componentName}-${componentID}`);
    element.remove();
    this._components = this._components.filter(
      (view) => view.componentName.id !== componentID
    );
    this._noComponentsHandler();
  }

  _clearComponents() {
    this._components = [];
    this._container.innerHTML = "";
    this._noComponentsHandler();
  }
}
