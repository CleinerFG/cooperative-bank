import { DisplayCtrl } from "./DisplayCtrl.js";
import { LoanView } from "../../views/display/LoanView.js";

export class LoanCtrl extends DisplayCtrl {
  constructor(container) {
    super(container, LoanView);
  }

  _noComponentsHandler() {
    const t1 = "There is nothing...";
    const t2 = "Waiting for updates";
    super._noComponentsHandler(t1, t2);
  }

  removeComponent(loanID) {
    super._removeComponent("loan", loanID);
  }
}
