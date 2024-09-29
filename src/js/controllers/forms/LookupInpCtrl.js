import { users } from "../../testData.js";
import { LookupInpView } from "../../views/forms/LookupInpView.js";
import { InputCtrl } from "./InputCtrl.js";

export class LookupInpCtrl extends InputCtrl {
  get defaultDataItem() {
    // From API
    return {
      id: 1000,
      name: "Cooperative Bank Creditor",
    };
  }

  get _viewClass() {
    return LookupInpView;
  }

  get _dataFromApi() {
    return users;
  }

  _init() {
    this._view.dataList = this._dataFromApi;
    this._view.defaultDataItem = this.defaultDataItem;
    this._view.init();
  }
}
