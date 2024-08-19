import { ComponentController } from "./ComponentController.js";
import { LoanView } from "../views/LoanView.js";

export class LoanController extends ComponentController {
  constructor(container, type) {
    super(container, LoanView);
    this._type = type;
  }

  _noComponentsHandler() {
    const t1 = "There is nothing...";
    const t2 = "Waiting for updates";
    super._noComponentsHandler(t1, t2);
  }

  renderComponent(view) {
    view.render(this._type);
  }

  removeComponent(loanID) {
    super._removeComponent("loan", loanID);
  }
}
