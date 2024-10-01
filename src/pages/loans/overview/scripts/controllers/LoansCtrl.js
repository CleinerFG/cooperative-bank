import { ComponentsCtrl } from "../../../../../js/controllers/ComponentsCtrl.js";
import { LoanModel } from "../models/LoanModel.js";
import { LoanView } from "../views/LoanView.js";

export class LoansCtrl extends ComponentsCtrl {
  constructor(container, category) {
    super(container, LoanView, LoanModel, category);
  }

  get _endpoint() {
    return "loans-payables";
  }

  _defineNoComponentsSettings() {
    super._defineNoComponentsSettings();
    const t1 = "There is nothing...";
    const t2 = `Waiting for new ${this._category} loans...`;
    this._noComponentsView.defineTexts(t1, t2);
  }
}
