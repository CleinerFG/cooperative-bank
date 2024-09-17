import { PageCtrl } from "../../../../../js/controllers/pages/PageCtrl.js";
import { OverviewPageView } from "../views/OverviewPageView.js";
import { LoansCtrl } from "./LoansCtrl.js";
import {
  apiDataLoansReceivables,
  apiDataLoansPayables,
} from "../../../../../js/testData.js";
import { LoanModel } from "../models/LoanModel.js";

export class OverviewPageCtrl extends PageCtrl {
  constructor() {
    super(OverviewPageView);
  }

  _initLoansReceivablesCtrl() {
    const container = document.querySelector(".receivables__cards");
    const ctrl = new LoansCtrl(container, "receivable");
    apiDataLoansReceivables.forEach((params) =>
      ctrl.addComponent(new LoanModel(params))
    );
    ctrl.renderComponents();
  }

  _initLoansPayablesCtrl() {
    const container = document.querySelector(".payables__cards");
    const ctrl = new LoansCtrl(container, "payable");
    apiDataLoansPayables.forEach((params) =>
      ctrl.addComponent(new LoanModel(params))
    );
    ctrl.renderComponents();
  }

  _initControllers() {
    this._initLoansReceivablesCtrl();
    this._initLoansPayablesCtrl();
  }
}
