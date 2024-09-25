import { ComponentCtrl } from "../../../../../js/controllers/ComponentCtrl.js";
import { ReceivedRequestView } from "../views/ReceivedRequestsView.js";

export class ReceivedRequestsCtrl extends ComponentCtrl {
  constructor() {
    const container = document.querySelector(".received-requests__cards");
    super(container, ReceivedRequestView, "received");
  }

  _defineNoComponentsSettings() {
    super._defineNoComponentsSettings();
    const t1 = `There are no received requests...`;
    this._noComponentsView.defineTexts(t1);
  }
}