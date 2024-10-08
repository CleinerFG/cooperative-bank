import { ComponentGroupCtrl } from "../../../../../js/controllers/ComponentGroupCtrl.js";
import { LoanCtrl } from "./LoanCtrl.js";

export class LoanPaybleGroupCtrl extends ComponentGroupCtrl {
  constructor() {
    const container = document.querySelector(".payables__cards");
    super(container);
  }

  get _ComponentCtrlClass() {
    return LoanCtrl;
  }

  get _category() {
    return "loans-payables";
  }

  get _endpoint() {
    return "loans-payables";
  }

  get _emptyCardsTexts() {
    return ["There is nothing...", 
      "Waiting for new payables loans..."];
  }
}
