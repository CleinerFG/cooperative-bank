import { LookupInpView } from "../../views/forms/LookupInpView.js";
import { InputCtrl } from "./InputCtrl.js";
import { ApiService } from "../../service/ApiService.js";
import { NoSuchItemError } from "../../errors/InputValidationError.js";

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

  async fetchFromApi(id) {
    try {
      return await ApiService.fetchFrom(`users/${id}`);
    } catch (error) {
      throw new NoSuchItemError(this._view._id);
    }
  }

  _init() {
    this._view.defaultDataItem = this.defaultDataItem;
    this._view.fetchHandler = this.fetchFromApi.bind(this);
    this._view.init();
  }
}
