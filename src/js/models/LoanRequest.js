import { Loan } from "./Loan.js";

const requestStatus = {
  1: "Pending",
  2: "Accepted",
  3: "Denied",
  4: "Canceled",
};

export class LoanRequest extends Loan {
  #status;
  constructor(id, creditor, value, installments, rate, status) {
    super(id, null, null, creditor, value, installments, rate);
    this.#status = status;
  }

  get status() {
    return requestStatus[this.#status];
  }

  cancelRequest() {
    // this._status = 4;
  }
}
