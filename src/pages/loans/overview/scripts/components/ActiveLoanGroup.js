import { ComponentGroup } from "../../../../../js/components/ComponentGroup.js";
import { CardActiveLoan } from "./CardActiveLoan.js";

export class ActiveLoanGroup extends ComponentGroup {
  constructor() {
    const container = document.querySelector(".section.active-loans");
    super(container);
  }

  get _CardComponentClass() {
    return CardActiveLoan;
  }

  get _category() {
    return "loans";
  }

  get _endpointConfig() {
    return [
      { name: "payables", endpoint: "loans-payables" },
      { name: "receivables", endpoint: "loans-receivables" },
    ];
  }

  get _emptyCardsTexts() {
    return [
      `There are no ${this._activeType} loans...`,
      "When there is news, we'll let you know ; )",
    ];
  }
}
