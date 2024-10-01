import { PageCtrl } from "../../../../../js/controllers/PageCtrl.js";
import { OverviewPageView } from "../views/OverviewPageView.js";
import { LoansCtrl } from "./LoansCtrl.js";

export class OverviewPageCtrl extends PageCtrl {
  constructor() {
    super(OverviewPageView);
  }

  _initLoansReceivablesCtrl() {
    const container = document.querySelector(".receivables__cards");
    new LoansCtrl(container, "receivable");
  }

  _initLoansPayablesCtrl() {
    const container = document.querySelector(".payables__cards");
    new LoansCtrl(container, "payable");
  }

  _initControllers() {
    this._initLoansReceivablesCtrl();
    this._initLoansPayablesCtrl();
  }
}
