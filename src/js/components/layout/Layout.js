import { AbstractMethodError } from "../../errors/AbstractMethodError.js";

export class Layout {
  constructor() {
    this.#init();
  }

  get _template() {
    throw new AbstractMethodError("_template");
  }

  _render(position) {
    document.body.insertAdjacentHTML(position, this._template);
  }

  _pathHandler() {
    throw new AbstractMethodError("_pathHandler");
  }

  _setupListeners() {
    throw new AbstractMethodError("_setupListeners");
  }

  #init() {
    this._render();
    this._pathHandler();
    this._setupListeners();
  }
}
