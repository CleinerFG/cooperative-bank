import { DisplayCtrl } from "./DisplayCtrl.js";
import { LoanRequestView } from "../../views/display/LoanRequestView.js";

export class LoanRequestsCtrl extends DisplayCtrl {
  constructor(container, category) {
    super(container, LoanRequestView, category);
  }

  _defineNoComponentsSettings() {
    super._defineNoComponentsSettings()
    const t1 = `There are no ${this._category} requests...`;
    this.noComponentsCtrl.defineTexts(t1);
  }
}
