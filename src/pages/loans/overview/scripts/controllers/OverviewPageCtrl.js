import { PageCtrl } from "../../../../../js/controllers/PageCtrl.js";
import { OverviewPageView } from "../views/OverviewPageView.js";
import { LoanPaybleGroupCtrl } from "./LoanPayableGroupCtrl.js";
import { LoanReceivableGroupCtrl } from "./LoanReceivableGroupCtrl.js";

export class OverviewPageCtrl extends PageCtrl {
  constructor() {
    super(OverviewPageView);
  }

  _initControllers() {
    new LoanPaybleGroupCtrl();
    new LoanReceivableGroupCtrl();
  }
}
