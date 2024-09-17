import { TransactionModel } from "../../../../../js/models/TransactionModel.js";
// import { monetaryValue, percentValue } from "../utils/formatters.js";

export class LoanModel extends TransactionModel {
  static descStatus = {
    1: "active",
    2: "finished",
  };

  static descTypes = {
    1: "payable",
    2: "receivable",
  };

  constructor(params) {
    super(params)
    this._amountDue = params.amountDue;
    this._installments = params.installments;
    this._rate = params.rate;
    this._installmentValue = params.installmentValue;
    this._remainingInstallments = params.remainingInstallments;
  }


  get type() {
    return LoanModel.descTypes[this._type];
  }

  get status() {
    return LoanModel.descStatus[this._status];
  }

  get amountDue() {
    return monetaryValue(this._amountDue);
  }

  get installments() {
    return this._installments;
  }

  get rate() {
    return percentValue(this._rate);
  }

  get installmentValue() {
    return monetaryValue(this._installmentValue);
  }

  get remainingInstallments() {
    return this._remainingInstallments;
  }

  get totalLoanCost() {
    return monetaryValue(this._installmentValue * this._installments);
  }
}
