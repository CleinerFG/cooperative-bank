/**
 * @typedef {Object} CreateProps
 * @property {string} fullName
 * @property {string} cpf
 * @property {string} birth
 * @property {string} email
 * @property {string} password
 */

/**
 * @typedef {SuccessReturn|ClientErrorReturn} CreateReturn
 */

/**
 * @typedef {Object} GetByEmailReturn
 * @property {string} opaqueId
 * @property {string} passwordHash
 */

/**
 * @typedef {Object} GetByCpfReturn
 * @property {string} cpf
 * @property {string} fullName
 */

/**
 * @typedef {Object} GetAccountDetailsReturn
 * @property {string} cpf
 * @property {string} fullName
 * @property {string} birth
 * @property {string} email
 * @property {string} registration
 */
