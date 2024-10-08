import { PageCtrl } from "../../../../../js/controllers/PageCtrl.js";
import { OverviewPageView } from "../views/OverviewPageView.js";
import { LoansPayablesCtrl } from "./LoansPayablesCtrl.js";
import { LoansReceivablesCtrl } from "./LoansReceivablesCtrl.js";

export class OverviewPageCtrl extends PageCtrl {
  constructor() {
    super(OverviewPageView);
  }

  _setupControllers() {
    new LoansPayablesCtrl();
    new LoansReceivablesCtrl();
  }
}
