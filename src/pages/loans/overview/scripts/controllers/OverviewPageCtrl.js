import { PageCtrl } from "../../../../../js/controllers/PageCtrl.js";
import { OverviewPageView } from "../views/OverviewPageView.js";
import { LoansPayablesCtrl } from "./LoansPayablesCtrl.js";
import { LoansReceivablesCtrl } from "./LoansReceivablesCtrl.js";

export class OverviewPageCtrl extends PageCtrl {
  constructor() {
    super(OverviewPageView);
  }

  _initLoansReceivablesCtrl() {
    new LoansReceivablesCtrl();
  }

  _initLoansPayablesCtrl() {
    new LoansPayablesCtrl();
  }

  _initControllers() {
    this._initLoansReceivablesCtrl();
    this._initLoansPayablesCtrl();
  }
}
