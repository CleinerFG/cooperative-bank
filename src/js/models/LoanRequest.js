import { Loan } from "./Loan.js";

const requestTypes = {
  1: "opened",
  2: "received",
};

const requestStatus = {
  1: "Pending",
  2: "Accepted",
  3: "Denied",
  4: "Canceled",
};

export class LoanRequest extends Loan {
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
    return requestTypes[this._type];
  }

  get status() {
    return requestStatus[this._status];
  }
}
