import { DefaultInputView } from "../../views/forms/DefaultInputView.js";

export class InputCtrl {
  constructor(params) {
    this._view = new this._viewClass(params);
    this._init();
  }

  get _viewClass() {
    return DefaultInputView;
  }

  _init() {
    this._view.init();
  }

}
