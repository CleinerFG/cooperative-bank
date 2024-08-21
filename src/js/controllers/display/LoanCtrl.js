import { DisplayCtrl } from "./DisplayCtrl.js";
import { LoanView } from "../../views/display/LoanView.js";

export class LoanCtrl extends DisplayCtrl {
  constructor(container) {
    super(container, LoanView);
  }

  _defineNoComponentsSettings() {
    const t1 = "There is nothing...";
    const t2 = "Waiting for new loans...";
    this.noComponentsCtrl.defineTexts(t1, t2);
  }
}
