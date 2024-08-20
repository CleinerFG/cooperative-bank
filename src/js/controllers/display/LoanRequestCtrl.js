import { DisplayCtrl } from "./DisplayCtrl.js";
import { LoanRequestView } from "../../views/display/LoanRequestView.js";

export class LoanRequestCtrl extends DisplayCtrl {
  constructor(container) {
    super(container, LoanRequestView);
  }

  _noComponentsHandler() {
    const t1 = "There are no opened requests...";
    const t2 = "Get a new loan :)";
    super._noComponentsHandler(t1, t2);
  }

  removeComponent(requestId) {
    super._removeComponent("request", requestId);
  }
}
