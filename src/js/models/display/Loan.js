const loanStatus = {
  1: "active",
  2: "finished",
};

const loanTypes = {
  1: "payable",
  2: "receivable",
};

export class Loan {
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
    return loanTypes[this._type];
  }

  get status() {
    return loanStatus[this._status];
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
    return this.#amountDue;
  }

  get value() {
    return this.#value;
  }

  get installments() {
    return this.#installments;
  }

  get rate() {
    return this.#rate;
  }

  get installmentValue() {
    return this.#installmentValue;
  }

  get remainingInstallments() {
    return this.#remainingInstallments;
  }

  get totalLoanCost() {
    return this.#installmentValue * this.#installments;
  }
}
