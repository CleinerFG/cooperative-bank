import { monetaryValue, percentValue } from "../utils/formatters.js";

export class TransactionModel {
  #id;
  #description;
  #debtor;
  #creditor;
  #date;
  #value;
  constructor(params) {
    this.#id = params.id;
    this._type = params.type;
    this._status = params.status;
    this.#description = params.description;
    this.#debtor = params.debtor;
    this.#creditor = params.creditor;
    this.#date = params.date;
    this.#value = params.value;
  }

  get id() {
    return this.#id;
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

  get value() {
    return monetaryValue(this.#value);
  }
}
