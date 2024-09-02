import { monetaryValue, percentValue } from "../utils/formatters.js";

export class Loan {
  static descStatus = {
    1: "active",
    2: "finished",
  };

  static descTypes = {
    1: "payable",
    2: "receivable",
  }

  #id;
  #description;
  #debtor;
  #creditor;
  #date;
  #amountDue;
  #value;
  #installments;
  #rate;
  #installmentValue;
  #remainingInstallments;
  constructor(
    id,
    type,
    status,
    description,
    debtor,
    creditor,
    date,
    amountDue,
    value,
    installments,
    rate,
    installmentValue,
    remainingInstallments
  ) {
    this.#id = id;
    this._type = type;
    this._status = status;
    this.#description = description;
    this.#debtor = debtor;
    this.#creditor = creditor;
    this.#date = date;
    this.#amountDue = amountDue;
    this.#value = value;
    this.#installments = installments;
    this.#rate = rate;
    this.#installmentValue = installmentValue;
    this.#remainingInstallments = remainingInstallments;
  }

  get id() {
    return this.#id;
  }

  get type() {
    return Loan.descTypes[this._type];
  }

  get status() {
    return Loan.descStatus[this._status];
  }

  get description() {
    return this.#description;
  }

  get debtor() {
    return this.#debtor;
  }

  get creditor() {
    return this.#creditor;
  }

  get date() {
    return this.#date;
  }

  get amountDue() {
    return monetaryValue(this.#amountDue);
  }

  get value() {
    return monetaryValue(this.#value);
  }

  get installments() {
    return this.#installments;
  }

  get rate() {
    return percentValue(this.#rate);
  }

  get installmentValue() {
    return monetaryValue(this.#installmentValue);
  }

  get remainingInstallments() {
    return this.#remainingInstallments;
  }

  get totalLoanCost() {
    return monetaryValue(this.#installmentValue * this.#installments);
  }
}
