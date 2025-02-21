/**
 * @typedef {object} FormViewParams
 * @property {HTMLElement} containerElement
 * @property {string} id
 * @property {string} title
 */

/**
 * @typedef {object} InputParams
 * @property {HTMLElement} containerElement
 * @property {string} id
 * @property {string} labelText
 * @property {string} placeholder
 * @property {boolean} strictToNumber
 * @property {"text" | "numeric" | "email" | "date"} inputmode
 * @property {"text" | "numeric" | "email" | "date"} type
 * @property {"currency" | "percent" | "cpf"} formatter
 * @property {import('../../utils/validators.js').Validator|undefined} customValidator
 */

/**
 * @typedef {object} SearchInputParams
 * @property {HTMLElement} containerElement
 * @property {string} id
 * @property {string} labelText
 * @property {string} endpoint
 */

/**
 * @typedef {object} SelectParams
 * @property {HTMLElement} containerElement
 * @property {string} id
 * @property {string} labelText
 * @property {{value:string, text: string}[]} options
 */

/**
 * @typedef {object} SubmitButtonParams
 * @property {HTMLElement} containerElement
 * @property {string} id
 * @property {string} [cssClass]
 * @property {string} labelText
 */

/**
 * @typedef {object} FormElementDefault
 * @property {'default'} category
 * @property {string} id
 * @property {string} labelText
 * @property {string|undefined} placeholder
 * @property {boolean|undefined} strictToNumber
 * @property {'currency'|'cpf'|'percent'|undefined} formatter
 * @property {'text'|'numeric'|'email'|'date'|undefined} inputmode
 * @property {'date'|'email'|undefined} type
 * @property {import('../utils/validators.js').Validator|undefined} customValidator
 */

/**
 * @typedef {object} FormElementPassword
 * @property {'password'} category
 * @property {string} id
 * @property {string} labelText
 * @property {string|undefined} placeholder
 * @property {boolean|undefined} strictToNumber
 * @property {'text'|'numeric'|undefined} inputmode
 * @property {import('../utils/validators.js').Validator|undefined} customValidator
 */

/**
 * @typedef {object} FormElementSearch
 * @property {'search'} category
 * @property {string} id
 * @property {string} labelText
 * @property {string} endpoint
 */

/**
 * @typedef {object} FormElementSelect
 * @property {'select'} category
 * @property {string} id
 * @property {string} labelText
 * @property {[{value:string, text:string}]} options
 */

/**
 * @typedef {object} SubmitButtonFormElementParams
 * @property {string} id
 * @property {string} labelText
 */
