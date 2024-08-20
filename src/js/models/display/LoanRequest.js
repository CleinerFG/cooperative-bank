import { Loan } from "./Loan.js";

const requestStatus = {
  1: "Pending",
  2: "Accepted",
  3: "Denied",
  4: "Canceled",
};

export class LoanRequest extends Loan {
  #status;
  constructor(
    id,
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
      null,
      null,
      debtor,
      creditor,
      date,
      null,
      value,
      installments,
      rate,
      installmentValue
    );
    this.#status = status;
  }

  get status() {
    return requestStatus[this.#status];
  }
}
