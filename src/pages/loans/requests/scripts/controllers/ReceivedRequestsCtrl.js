import { ComponentsCtrl } from "../../../../../js/controllers/ComponentsCtrl.js";
import { ReceivedRequestView } from "../views/ReceivedRequestsView.js";
import { LoanRequestModel } from "../models/LoanRequestModel.js";

export class ReceivedRequestsCtrl extends ComponentsCtrl {
  constructor() {
    const container = document.querySelector(".received-requests__cards");
    super(container, ReceivedRequestView, LoanRequestModel, "received");
  }

  get _endpoint() {
    return "received-requests";
  }

  _defineNoComponentsSettings() {
    super._defineNoComponentsSettings();
    const t1 = `There are no received requests...`;
    this._noComponentsView.defineTexts(t1);
  }
}
