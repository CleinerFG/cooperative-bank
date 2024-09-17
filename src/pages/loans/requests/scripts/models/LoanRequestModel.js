import { Loan } from "../../../../../js/models/Loan.js";

export class LoanRequestModel extends Loan {
  static descTypes = {
    1: "opened",
    2: "received",
  };

  static descStatus = {
    1: "Pending",
    2: "Accepted",
    3: "Denied",
    4: "Canceled",
  };

  get type() {
    return LoanRequestModel.descTypes[this._type];
  }

  get status() {
    return LoanRequestModel.descStatus[this._status];
  }
}
