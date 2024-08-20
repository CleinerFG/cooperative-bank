import pathUtil from "../../utils/PathManager.js";

export class LayoutCtrl {
  #layoutView;
  #pathManager;
  constructor(layoutView, pathManager = pathUtil) {
    this.#layoutView = layoutView;
    this.#pathManager = pathManager;
  }

  get layoutView() {
    return this.#layoutView;
  }

  get pathManager() {
    return this.#pathManager;
  }

  _pathHandler() {
    throw new Error("Must be implemented in the subclass");
  }

  initLayoutComponent() {
    this.#layoutView.render();
    this._pathHandler();
  }
}
