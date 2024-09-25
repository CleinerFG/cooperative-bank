import { users } from "../../testData.js";
import { LookupInputView } from "../../views/forms/LookupInputView.js";
import { DefaultInputCtrl } from "./DefaultInputCtrl.js";

export class LookupInputCtrl extends DefaultInputCtrl {
  get defaultDataItem() {
    // From API
    return {
      id: 1000,
      name: "Cooperative Bank Creditor",
    };
  }

  get _viewClass() {
    return LookupInputView;
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
