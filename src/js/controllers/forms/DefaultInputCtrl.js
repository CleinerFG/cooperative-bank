import { DefaultInputView } from "../../views/forms/DefaultInputView.js";

export class DefaultInputCtrl {
  constructor(params) {
    this._view = new this._viewClass(params);
    this._init();
  }

  _init() {
    this._view.init();
  }

  get _viewClass() {
    return DefaultInputView;
  }
}
