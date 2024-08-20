const loanStatus = {
  1: "Request",
  2: "Active",
  3: "Finished",
};

export class Loan {
  #id;
  #type;
  #status;
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

  get totalLoanCost() {
    return this.#installmentValue * this.#installments;
  }
}
