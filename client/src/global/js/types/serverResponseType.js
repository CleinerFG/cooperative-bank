/**
 * @typedef {Object} InputError
 * @property {string} id
 * @property {'AUTH_001'|'AUTH_002'|'AUTH_003'|'AUTH_004'|'VALID_001'|'VALID_002'|'VALID_003'|'VALID_004'|'VALID_005'} cod
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