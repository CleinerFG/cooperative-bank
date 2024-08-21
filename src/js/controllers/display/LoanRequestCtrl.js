import { DisplayCtrl } from "./DisplayCtrl.js";
import { LoanRequestView } from "../../views/display/LoanRequestView.js";

export class LoanRequestCtrl extends DisplayCtrl {
  constructor(container) {
    super(container, LoanRequestView);
  }

  _defineNoComponentsSettings() {
    const t1 = "There are no requests...";
    this.noComponentsCtrl.defineTexts(t1);
  }
}
