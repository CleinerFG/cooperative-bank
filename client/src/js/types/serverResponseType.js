/**
 * @typedef {Object} FormError
 * @property {string} componentId
 * @property {string} error
 */

/**
 * @typedef {Object} ServerFormResponse
 * @property {boolean} success
 * @property {FormError[]} errors
 * @property {string} [token]
 */

/**
 * @typedef {Object} ServerErrorFormResponse
 * @property {false} success
 * @property {'serverError'} reason
 */

/**
 * @typedef {Object} ServerGetErrorResponse
 * @property {string} error
 */
