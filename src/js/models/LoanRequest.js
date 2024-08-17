const requestStatus = {
  1: "Pending",
  2: "Accepted",
  3: "Denied",
  4: "Canceled"
}

export class LoanRequest {
  constructor(requestID, date, loan) {
    this._requestID = requestID;
    this._date = date;
    this._status = 1;
    this._loan = loan;
  }

  get requestID() {
    return this._requestID;
  }

  get date() {
    return this._date;
  }

  get status() {
    return requestStatus[this._status];
  }

  // server must change
  set status(value) {
    if (value in requestStatus) {
      this._status = value
      return true;
    }
    return false;
  }

  get loan() {
    return this._loan;
  }

  cancelRequest() {
    this._status = 4;
  }
}
