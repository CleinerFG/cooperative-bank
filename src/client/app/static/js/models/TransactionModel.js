import { formatDate, numberToCurrency } from "../utils/formatters.js";

/**
 * Represents a transaction.
 * Provides formatted values for date and monetary amounts.
 * 
 * @class
 */
export class TransactionModel {
  /**
   * Creates a new instance.
   *
   * @param {Object} params - The transaction parameters.
   * @param {string} params.id 
   * @param {number} params.type
   * @param {string} params.status
   * @param {string} params.description
   * @param {string} params.debtor
   * @param {string} params.creditor
   * @param {string} params.date - The date of the transaction in ISO format.
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
   * Returns the transaction's unique identifier.
   * 
   * @public
   * @type {string} The transaction ID.
   */
  get id() {
    return this._id;
  }

  /**
   * Returns the transaction's description.
   * 
   * @public
   * @type {string} The transaction description.
   */
  get description() {
    return this._description;
  }

  /**
   * Returns the name of the debtor.
   * 
   * @public
   * @type {string} The debtor's name.
   */
  get debtor() {
    return this._debtor;
  }

  /**
   * Returns the name of the creditor.
   * 
   * @public
   * @type {string} The creditor's name.
   */
  get creditor() {
    return this._creditor;
  }

  /**
   * Returns the formatted transaction date.
   * 
   * @public
   * @type {string} The formatted date (e.g., "MM/DD/YYYY").
   */
  get date() {
    return formatDate.format(new Date(this._date));
  }

  /**
   * Returns the formatted monetary value of the transaction.
   * 
   * @public
   * @type {string} The value formatted as currency (e.g., "$1,234.56").
   */
  get value() {
    return numberToCurrency.format(this._value);
  }
}
