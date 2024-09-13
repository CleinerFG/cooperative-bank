import { DefaultInputView } from "../../views/forms/DefaultInputView.js";

export class DefaultInputCtrl {
  _viewClass = DefaultInputView;
  constructor(params) {
    this._view = this._viewClass(params);
    this._init();
  }

  _init() {
    this._view.init();
  }
}
