import { PageCtrl } from "./PageCtrl.js";
import { OverviewPageView } from "../../views/pages/OverviewPageView.js";
import { LoansCtrl } from "../LoansCtrl.js";
import { apiDataLoansPayables } from "../../testData.js";
// import { apiDataLoansPayables } from "../../testData.js";
// import { apiDataLoansReceivables } from "../../testData.js";

export class OverviewPageCtrl extends PageCtrl {
  constructor() {
    super(OverviewPageView);
  }

  _initLoansReceivablesCtrl() {
    const container = document.querySelector(".receivables__cards");
    const ctrl = new LoansCtrl(container, "receivable");
    // apiDataLoansReceivables.forEach((loan) => ctrl.addComponent(loan));
    ctrl.renderComponents();
  }

  _initLoansPayablesCtrl() {
    const container = document.querySelector(".payables__cards");
    const ctrl = new LoansCtrl(container, "payable");
    // apiDataLoansPayables.forEach((loan) => ctrl.addComponent(loan));
    ctrl.renderComponents();
  }

  _initControllers() {
    this._initLoansReceivablesCtrl();
    this._initLoansPayablesCtrl();
  }
}
