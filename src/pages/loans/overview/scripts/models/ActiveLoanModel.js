import { TransactionModel } from "../../../../../js/models/TransactionModel.js";
import {
  numberToCurrency,
  numberToPercent,
} from "../../../../../js/utils/formatters.js";

export class ActiveLoanModel extends TransactionModel {
  static descStatus = {
    1: "active",
    2: "finished",
  };

  static descTypes = {
    1: "payable",
    2: "receivable",
  };

  constructor(params) {
    super(params);
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
    return numberToCurrency.format(this._amountDue);
  }

  get installments() {
    return this._installments;
  }

  get rate() {
    return numberToPercent.format(this._rate / 100);
  }

  get installmentValue() {
    return numberToCurrency.format(this._installmentValue);
  }

  get remainingInstallments() {
    return this._remainingInstallments;
  }

  get totalLoanCost() {
    return numberToCurrency.format(this._installmentValue * this._installments);
  }
}
