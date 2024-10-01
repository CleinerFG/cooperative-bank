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

  async _fetchFromApi() {
    const response = await fetch("http://localhost:3000/users");
    const users = await response.json();
    this._view.dataList = users;
  }

  _init() {
    this._fetchFromApi();
    this._view.defaultDataItem = this.defaultDataItem;
    this._view.init();
  }
}
