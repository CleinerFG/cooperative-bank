import { TransactionModel } from '../../../../../js/models/TransactionModel.js';
import {
  currencyToNumber,
  numberToCurrency,
  numberToPercent,
  percentToNumber,
} from '../../../../../../global/js/utils/formatters.js';

/**
 * Represents a loan request model
 * Includes additional properties for loan-specific details such as installments, interest rate, and installment value.
 */
export class LoanRequestModel extends TransactionModel {
  static descTypes = {
    1: 'opened',
    2: 'received',
  };

  static descStatus = {
    1: 'pending',
    2: 'accepted',
    3: 'denied',
    4: 'canceled',
  };

  /**
   * @param {Object} params
   * @param {number} params.installments
   * @param {number} params.rate
   * @param {number} params.installmentValue
   */
  constructor(params) {
    super(params);
    this._installments = params.installments;
    this._rate = params.rate;
    this._installmentValue = params.installmentValue;
  }

  /**
   * @type {'opened' | 'received'}
   */
  get type() {
    return LoanRequestModel.descTypes[this._type];
  }

  /**
   * @type {'pending' | 'accepted' | 'denied' 'canceled'}
   */
  get status() {
    return LoanRequestModel.descStatus[this._status];
  }

  /**
   * @type {number}
   */
  get installments() {
    return this._installments;
  }

  /**
   * @type {string}
   */
  get rate() {
    return numberToPercent.format(this._rate / 100);
  }

  /**
   * Calculates and gets the formatted installment value.
   * Uses the formula for annuity payments:
   * `value * (rate / (1 - (1 + rate) ^ -installments))`.
   *
   * @type {string}
   */
  get installmentValue() {
    const rate = this._rate / 100;
    const value = this._value;
    const installments = this._installments;
    const installmentValue =
      value * (rate / (1 - Math.pow(1 + rate, -installments)));

    return numberToCurrency.format(installmentValue);
  }

  /**
   * Gets the loan request data formatted for API submission.
   *
   * @returns {Object}
   * @property {Date} date
   * @property {string} creditor
   * @property {string} description
   * @property {number} value
   * @property {number} installments
   * @property {number} rate
   */
  get dataToApi() {
    return {
      date: new Date(),
      creditor: this._creditor,
      description: this._description,
      value: currencyToNumber(this._value),
      installments: this._installments,
      rate: percentToNumber(this._rate),
    };
  }
}
