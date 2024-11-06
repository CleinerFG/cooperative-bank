import { ComponentGroup } from "../../../../../js/components/ComponentGroup.js";
import { CardLoanRequest } from "./CardLoanRequest.js";

export class LoanRequestGroup extends ComponentGroup {
  constructor() {
    const container = document.querySelector(".section.loan-requests");
    super(container);
  }

  get _CardComponentClass() {
    return CardLoanRequest;
  }

  get _category() {
    return "requests";
  }

  get _endpointConfig() {
    return [
      { name: "received", endpoint: "requests-received" },
      { name: "opened", endpoint: "requests-opened" },
    ];
  }

  get _emptyCardsTexts() {
    return [
      `There are no ${this._activeType} requests...`,
      "When there is news, we'll let you know ; )",
    ];
  }
}
