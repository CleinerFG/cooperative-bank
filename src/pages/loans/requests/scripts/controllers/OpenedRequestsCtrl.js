import { ComponentCtrl } from "../../../../../js/controllers/ComponentCtrl.js";
import { OpenedRequestView } from "../views/OpenedRequestView.js";

export class OpenedRequestsCtrl extends ComponentCtrl {
  constructor() {
    const container = document.querySelector(".open-requests__cards");
    super(container, OpenedRequestView, "opened");
  }

  _defineNoComponentsSettings() {
    super._defineNoComponentsSettings();
    const t1 = `There are no opened requests...`;
    this._noComponentsView.defineTexts(t1);
  }
}
