import { ComponentsCtrl } from "../../../../../js/controllers/ComponentsCtrl.js";
import { LoanModel } from "../models/LoanModel.js";
import { LoanView } from "../views/LoanView.js";

export class LoansReceivablesCtrl extends ComponentsCtrl {
  constructor() {
    const container = document.querySelector(".receivables__cards");
    super(container, LoanView, LoanModel, "receivables");
  }

  get _endpoint() {
    return "loans-receivables";
  }

  _defineNoComponentsSettings() {
    super._defineNoComponentsSettings();
    const t1 = "There is nothing...";
    const t2 = `Waiting for new receivables loans...`;
    this._noComponentsView.defineTexts(t1, t2);
  }
}