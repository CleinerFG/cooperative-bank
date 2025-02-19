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
 * @typedef {Object} LoanOverviewDetailsData
 * @property {string} id
 * @property {'personal'|'auto'|'mortgage'} modality
 * @property {string|undefined} creditor
 * @property {string|undefined} debotr
 * @property {string} date
 * @property {number} creditValue
 * @property {number} totalAmount
 * @property {number} outstandingBalance
 * @property {number} installments
 * @property {number} installmentValue
 * @property {number} paidInstallments
 * @property {number} rate
 */

/**
 * @typedef {Object} LoanInstallmentData
 * @property {string} id
 * @property {string} dueDate
 * @property {number} value
 * @property {'pending'|'paid'} status
 */

/**
 * @typedef {object} LoanRequestData
 * @property {string} id
 * @property {'personal'|'auto'|'mortgage'} modality
 * @property {string|undefined} creditor
 * @property {string|undefined} debtor
 * @property {string} date
 * @property {number} creditValue
 * @property {'pending'|'rejected'|'approved'} status
 */

/**
 * @typedef {object} LoanRequestDetailsData
 * @property {string} id
 * @property {'personal'|'auto'|'mortgage'} modality
 * @property {string|undefined} creditor
 * @property {string|undefined} debtor
 * @property {string} date
 * @property {number} creditValue
 * @property {number} totalAmount
 * @property {number} installments
 * @property {number} installmentValue
 * @property {number} rate
 * @property {'pending'|'rejected'|'approved'|undefined} status
 */
