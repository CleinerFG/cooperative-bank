/**
 * @typedef {Object} InputError
 * @property {string} id
 * @property {string} cod
 */

/**
 * @typedef {Object} ServerFormResponse
 * @property {boolean} success
 * @property {InputError[]} inpErrors
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
