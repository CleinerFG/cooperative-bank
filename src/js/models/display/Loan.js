const loanStatus = {
  1: "Request",
  2: "Active",
  3: "Finished",
};

export class Loan {
  #id;
  #type;
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
    this.#type = type;
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
    return this.#type;
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

  get totalLoanCost() {
    return this.#installmentValue * this.#installments;
  }
}
