import { AbstractMethodError } from "../errors/AbstractMethodError.js";

export class ComponentCtrl {
  #containerElement;
  #modelParams;
  #modelInstance;
  #viewInstance;
  constructor(containerElement, modelParams) {
    this.#containerElement = containerElement;
    this.#modelParams = modelParams;
    this.#init();
  }

  get _ModelClass() {
    throw new AbstractMethodError("_ModelClass");
  }

  get _ViewClass() {
    throw new AbstractMethodError("_ViewClass");
  }

  get _containerElement() {
    return this.#containerElement;
  }

  get _modelInstance() {
    return this.#modelInstance;
  }

  get _viewInstance() {
    return this.#viewInstance;
  }

  #init() {
    this.#modelInstance = new this._ModelClass(this.#modelParams);
    this.#viewInstance = new this._ViewClass(
      this.#containerElement,
      this.#modelInstance
    );
  }
}
