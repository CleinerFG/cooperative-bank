import { formatDate, numberToCurrency } from "../../../global/js/utils/formatters.js";

/**
 * Represents a transaction.
 * Provides formatted values for date and monetary amounts.
 */
export class TransactionModel {
  /**
   * @param {Object} params
   * @param {string} params.id 
   * @param {number} params.type
   * @param {string} params.status
   * @param {string} params.description
   * @param {string} params.debtor
   * @param {string} params.creditor
   * @param {string} params.date - The date in ISO format.
   * @param {number} params.value
   */
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

  /**
   * @type {string}
   */
  get id() {
    return this._id;
  }

  /**
   * @type {string}
   */
  get description() {
    return this._description;
  }

  /**
   * @type {string}
   */
  get debtor() {
    return this._debtor;
  }

  /**
   * @type {string}
   */
  get creditor() {
    return this._creditor;
  }

  /**
   * @type {string} Formatted date "MM/DD/YYYY".
   */
  get date() {
    return formatDate.format(new Date(this._date));
  }

  /**
   * @public
   * @type {string} Formatted as currency "R$1.234,56".
   */
  get value() {
    return numberToCurrency.format(this._value);
  }
}
