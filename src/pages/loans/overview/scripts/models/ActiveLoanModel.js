import { TransactionModel } from '../../../../../js/models/TransactionModel.js';
import {
  numberToCurrency,
  numberToPercent,
} from '../../../../../js/utils/formatters.js';

/**
 * Represents an active loan.
 * Includes details specific to active loans, such as amount due, installments, and remaining payments.
 *
 * @class
 * @extends TransactionModel
 */
export class ActiveLoanModel extends TransactionModel {
  /**
   * Description mappings for active loan statuses.
   *
   * @type {Object<number, string>}
   * @static
   */
  static descStatus = {
    1: 'active',
    2: 'finished',
  };

  /**
   * Description mappings for active loan types.
   *
   * @type {Object<number, string>}
   * @static
   */
  static descTypes = {
    1: 'payable',
    2: 'receivable',
  };

  /**
   * Creates a new instance of ActiveLoanModel.
   *
   * @param {Object} params
   * @param {number} params.amountDue
   * @param {number} params.installments
   * @param {number} params.rate
   * @param {number} params.installmentValue
   * @param {number} params.remainingInstallments
   */
  constructor(params) {
    super(params);
    this._amountDue = params.amountDue;
    this._installments = params.installments;
    this._rate = params.rate;
    this._installmentValue = params.installmentValue;
    this._remainingInstallments = params.remainingInstallments;
  }

  /**
   * Returns the type description.
   * 
   * @type {'payable' | 'receivable'}
   */
  get type() {
    return ActiveLoanModel.descTypes[this._type];
  }

  /**
   * Returns the status description.
   * 
   * @type {'active' | 'finished'}
   */
  get status() {
    return ActiveLoanModel.descStatus[this._status];
  }

  /**
   * Returns the formatted amount due.
   * 
   * @type {string}
   */
  get amountDue() {
    return numberToCurrency.format(this._amountDue);
  }

  /**
   * Returns the total number of installments.
   * 
   * @type {number}
   */
  get installments() {
    return this._installments;
  }

  /**
   * Returns the formatted interest rate.
   * @type {string}
   */
  get rate() {
    return numberToPercent.format(this._rate / 100);
  }

  /**
   * Returns the formatted value of each installment.
   * 
   * @type {string}
   */
  get installmentValue() {
    return numberToCurrency.format(this._installmentValue);
  }

  /**
   * Returns the number of remaining installments.
   * 
   * @type {number}
   */
  get remainingInstallments() {
    return this._remainingInstallments;
  }

  /**
   * Calculates and returns the total cost of the loan formatted as currency.
   * 
   * @type {string}
   */
  get totalLoanCost() {
    return numberToCurrency.format(this._installmentValue * this._installments);
  }
}
