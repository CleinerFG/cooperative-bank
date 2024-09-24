import { AbstractMethodError } from "../../errors/AbstractMethodError.js";

export class LayoutView {
  constructor() {
    this._body = document.body;
    this._init();
  }

  _render() {
    throw new AbstractMethodError("render");
  }

  _pathHandler() {
    throw new AbstractMethodError("_pathHandler");
  }

  _initListeners() {
    throw new AbstractMethodError("_initListeners");
  }

  _init() {
    this._render();
    this._pathHandler();
    this._initListeners();
  }
}
