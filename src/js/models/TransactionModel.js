import { monetaryValue, percentValue } from "../utils/formatters.js";

export class TransactionModel {
  constructor(params) {
    this._id = params.id;
    this._type = params.type;
    this._status = params.status;
    this._description = params.description;
    this._debtor = params.debtor;
    this._creditor = params.creditor;
    this._date = params.date;
    this._value = params.value;
  }

  get id() {
    return this._id;
  }

  get description() {
    return this._description;
  }

  get debtor() {
    return this._debtor;
  }

  get creditor() {
    return this._creditor;
  }

  get date() {
    return this._date;
  }

  get value() {
    return monetaryValue(this._value);
  }
}
