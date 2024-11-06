import { PageCtrl } from "../../../../../js/controllers/PageCtrl.js";
import { OverviewPageView } from "../views/OverviewPageView.js";
import { ActiveLoanGroup } from "../components/ActiveLoanGroup.js";

export class OverviewPageCtrl extends PageCtrl {
  constructor() {
    super(OverviewPageView);
  }

  _initControllers() {
    new ActiveLoanGroup();
  }
}
