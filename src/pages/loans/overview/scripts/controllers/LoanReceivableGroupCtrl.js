import { ComponentGroupCtrl } from "../../../../../js/controllers/ComponentGroupCtrl.js";
import { LoanCtrl } from "./LoanCtrl.js";

export class LoanReceivableGroupCtrl extends ComponentGroupCtrl {
  constructor() {
    const container = document.querySelector(".receivables__cards");
    super(container);
  }

  get _ComponentCtrlClass() {
    return LoanCtrl;
  }

  get _category() {
    return "loans-receivables";
  }

  get _endpoint() {
    return "loans-receivables";
  }

  get _emptyCardsTexts() {
    return ["There is nothing...", "Waiting for new receivables loans..."];
  }
}
