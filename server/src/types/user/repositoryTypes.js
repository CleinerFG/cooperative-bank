/**
 * @typedef {Object} CreateProps
 * @property {string} fullName
 * @property {string} cpf
 * @property {string} birth
 * @property {string} email
 * @property {string} password
 */

/**
 * @typedef {Object} FindReturn
 * @property {string} id
 * @property {string} opaqueId
 * @property {string} fullName
 * @property {string} cpf
 * @property {string} birth
 * @property {string} email
 * @property {string} balance
 * @property {string} createdAt
 * @property {string} updatedAt
 */

/**
 * @typedef {Object} FindByEmailReturn
 * @property {string} opaqueId
 * @property {string} passwordHash
 */

/**
 * @typedef {Object} FindByCpfReturn
 * @property {string} cpf
 * @property {string} fullName
 */

/**
 * @typedef {Object} FindAccountDetailsReturn
 * @property {string} cpf
 * @property {string} fullName
 * @property {string} birth
 * @property {string} email
 * @property {string} registration
 */
