import { ComponentController } from "./ComponentController.js";
import { LoanView } from "../views/LoanView.js";

class LoanController extends ComponentController {
  constructor(container) {
    super(container, LoanView);
  }

  _noComponentsHandler() {
    const t1 = "There is nothing...";
    const t2 = "Waiting for updates";
    super._noComponentsHandler(t1, t2);
  }

  renderComponent(view, type) {
    view.render(type);
  }

  removeComponent(loanID) {
    super._removeComponent("loan", loanID);
  }
}
