/**
 * @typedef {object} LoanOverviewData
 * @property {string} id
 * @property {'personal'|'auto'|'mortgage'} modality
 * @property {string|undefined} creditor
 * @property {string|undefined} debtor
 * @property {string} date
 * @property {number} creditValue
 */

/**
 * @typedef {object} LoanRequestOpenedData
 * @property {string} id
 * @property {'personal'|'auto'|'mortgage'} modality
 * @property {string} creditor
 * @property {string} date
 * @property {number} creditValue
 * @property {number} totalAmount
 * @property {number} installments
 * @property {number} installmentValue
 * @property {number} rate
 * @property {'pending'|'rejected'|'approved'} status
 */

/**
 * @typedef {object} LoanRequestReceivedData
 * @property {string} id
 * @property {'personal'|'auto'|'mortgage'} modality
 * @property {string} debtor
 * @property {string} date
 * @property {number} creditValue
 * @property {number} totalAmount
 * @property {number} installments
 * @property {number} installmentValue
 * @property {number} rate
 */
