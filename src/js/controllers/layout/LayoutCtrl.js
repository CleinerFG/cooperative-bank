import { AbstractMethodError } from "../../errors/AbstractMethodError.js";
import pathUtil from "../../utils/PathManager.js";

export class LayoutCtrl {
  #layoutView;
  #pathManager;
  constructor(layoutView, pathManager = pathUtil) {
    this.#layoutView = layoutView;
    this.#pathManager = pathManager;
    this.#initLayoutComponent();
  }

  get layoutView() {
    return this.#layoutView;
  }

  get pathManager() {
    return this.#pathManager;
  }

  _listenersHandler() {
    throw new AbstractMethodError("_listenetHandler");
  }

  _assetsHandler(theme) {
    throw new AbstractMethodError("_assetsHandler")
  }

  _pathHandler() {
    throw new AbstractMethodError("_pathHandler");
  }

  #initLayoutComponent() {
    this.#layoutView.render();
    this._listenersHandler();
    this._pathHandler();
  }
}
