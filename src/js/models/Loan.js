export class Loan {
  constructor(loanID, status, description, debtor, creditor, date, value, installments, interesRate) {
    this._loanID = loanID;
    this._status = status;
    this._description = description;
    this._debtor = debtor;
    this._creditor = creditor;
    this._date = date;
    this._value = value;
    this._installments = installments;
    this._interestRate = interesRate;
    this._payments = [];
  }

  calculeInstallmentValue() {
    return null;
  }

  _calculeAmountDue() {
    return null;
  }

  addPayment(pay) {
    this._payments.push(pay);
  }

}