import { ComponentCtrl } from "./ComponentCtrl.js";
import { LoanRequestView } from "../views/LoanRequestView.js";

export class LoanRequestsCtrl extends ComponentCtrl {
  constructor(container, category) {
    super(container, LoanRequestView, category);
  }

  _defineNoComponentsSettings() {
    super._defineNoComponentsSettings()
    const t1 = `There are no ${this._category} requests...`;
    this.noComponentsCtrl.defineTexts(t1);
  }
}
