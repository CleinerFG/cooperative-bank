import { DefaultInpView } from "../../views/forms/DefaultInpView.js";

export class InputCtrl {
  constructor(params) {
    this._view = new this._viewClass(params);
    this._init();
  }

  get _viewClass() {
    return DefaultInpView;
  }

  executeValidators() {
    this._view.executeValidators();
  }

  _init() {
    this._view.init();
  }
}
