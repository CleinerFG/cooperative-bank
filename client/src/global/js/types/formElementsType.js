/**
 * @typedef {"currency" | "percent" | "cpf" | "strictNumber"} InputFormatters
 */

/**
 * @typedef {object} FormViewParams
 * @property {HTMLElement} containerElement
 * @property {string} id
 * @property {{title:string,icon:string}} [header]
 */

// --- Form components and subclasses types

/**
 * @typedef {object} CustomListener
 * @property {keyof HTMLElementEventMap} eventType
 * @property {EventListener} listener
 */

/**
 * @typedef {object} FormComponentParams
 * @property {string} id
 * @property {HTMLElement} containerElement
 * @property {string} labelText
 * @property {string} placeholder
 * @property {"text" | "numeric" | "email" | "date"} inputmode
 * @property {"text" | "numeric" | "email" | "date"} type
 * @property {InputFormatters} [formatter]
 * @property {import('../utils/validators.js').Validator} [customValidator]
 */

/**
 * @typedef {object} InputParams
 * @property {string} id
 * @property {HTMLElement} containerElement
 * @property {string} labelText
 * @property {string} [placeholder]
 * @property {"email" | "date"} [type]
 * @property {InputFormatters} [formatter]
 * @property {import('../utils/validators.js').Validator} [customValidator]
 */

/**
 * @typedef {object} PasswordInputParams
 * @property {string} id
 * @property {HTMLElement} containerElement
 * @property {string} labelText
 * @property {string} [placeholder]
 * @property {"strictNumber"} [formatter]
 * @property {import('../utils/validators.js').Validator} [customValidator]
 */

/**
 * @typedef {object} SearchInputParams
 * @property {string} id
 * @property {HTMLElement} containerElement
 * @property {string} labelText
 */

/**
 * @typedef {object} SelectParams
 * @property {string} id
 * @property {HTMLElement} containerElement
 * @property {string} labelText
 * @property {{value:string, text: string}[]} options
 */

/**
 * @typedef {object} SubmitButtonParams
 * @property {string} id
 * @property {HTMLElement} containerElement
 * @property {string} labelText
 * @property {string} [cssClass]
 */

// --- --- ---

/**
 * @typedef {object} FormElementDefault
 * @property {'default'} category
 * @property {string} id
 * @property {string} labelText
 * @property {string|undefined} [placeholder]
 * @property {InputFormatters} [formatter]
 * @property {'date'|'email'|undefined} type
 * @property {import('../utils/validators.js').Validator|undefined} [customValidator]
 */

/**
 * @typedef {object} FormElementPassword
 * @property {'password'} category
 * @property {string} id
 * @property {string} labelText
 * @property {'strictNumber'} [formatter]
 * @property {string|undefined} [placeholder]
 *
 * @property {import('../utils/validators.js').Validator|undefined} [customValidator]
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
