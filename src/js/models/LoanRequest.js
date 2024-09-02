import { Loan } from "./Loan.js";

export class LoanRequest extends Loan {
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
  constructor(
    id,
    type,
    status,
    debtor,
    creditor,
    date,
    value,
    installments,
    rate,
    installmentValue
  ) {
    super(
      id,
      type,
      status,
      null,
      debtor,
      creditor,
      date,
      null,
      value,
      installments,
      rate,
      installmentValue,
      null
    );
  }

  get type() {
    return LoanRequest.descTypes[this._type];
  }

  get status() {
    return LoanRequest.descStatus[this._status];
  }
}
