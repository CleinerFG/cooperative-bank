import { TransactionModel } from "../../../../../js/models/TransactionModel.js";
import {
  numberToCurrency,
 numberToPercent,
} from "../../../../../js/utils/formatters.js";

export class LoanRequestModel extends TransactionModel {
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

  constructor(params) {
    super(params);
    this._installments = params.installments;
    this._rate = params.rate;
    this._installmentValue = params.installmentValue;
  }

  get type() {
    return LoanRequestModel.descTypes[this._type];
  }

  get status() {
    return LoanRequestModel.descStatus[this._status];
  }

  get installments() {
    return this._installments;
  }

  get rate() {
    return numberToPercent(this._rate);
  }

  get installmentValue() {
    const rate = this._rate / 100;
    const value = this._value;
    const installments = this._installments; 
    const installmentValue =
      value * (rate / (1 - Math.pow(1 + rate, -installments)));

    return numberToCurrency(installmentValue);
  }
}
