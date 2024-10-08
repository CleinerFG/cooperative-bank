import { DefaultInpView } from "../../views/forms/DefaultInpView.js";

export class InputCtrl {
  constructor(params) {
    this._view = new this._viewClass(params);
    this._init();
  }

  get _viewClass() {
    return DefaultInpView;
  }

  _init() {
    this._view.init();
  }
}
