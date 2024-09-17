import { ComponentCtrl } from "./ComponentCtrl.js";
import { LoanView } from "../views/LoanView.js";

export class LoansCtrl extends ComponentCtrl {
  constructor(container, category) {
    super(container, LoanView, category);
  }

  _defineNoComponentsSettings() {
    super._defineNoComponentsSettings();
    const t1 = "There is nothing...";
    const t2 = `Waiting for new ${this._category} loans...`;
    this.noComponentsCtrl.defineTexts(t1, t2);
  }
}
