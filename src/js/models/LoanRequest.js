requestStatus = {
  1: "Pending",
  2: "Accepted",
  3: "Denied",
  4: "Canceled"
}

class LoanRequest {
  constructor(requestID, date) {
    this._requestID = requestID;
    this._date = date;
    this._status = 1;
    this._loan = null;
  }

  get status() {
    return this._status;
  }

  set status(value) {
    if (value in requestStatus) {
      this._status = value
      return true;
    }
    return false;
  }

  newRequest(loan) {
    this._loan = loan;
  }

  cancelRequest() {
    this._status = 4;
  }
}
