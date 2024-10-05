import { LookupInpView } from "../../views/forms/LookupInpView.js";
import { InputCtrl } from "./InputCtrl.js";

export class LookupInpCtrl extends InputCtrl {
  get defaultDataItem() {
    return {
      id: 1000,
      name: "Cooperative Bank Creditor",
    };
  }

  get _viewClass() {
    return LookupInpView;
  }

  _init() {
    this._view.defaultDataItem = this.defaultDataItem;
    this._view.init();
  }
}
