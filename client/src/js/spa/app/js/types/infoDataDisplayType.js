/**
 * @typedef {Object} Item
 * @property {string} label
 * @property {string} [iconPath]
 * @property {Object<string,string>} [iconState]
 * @property {string} apiDataProp
 * @property {{apiDataPropMax:number, apiDataPropCurrent:number}} [progressBar]
 * @property {'currency'|'date'|'percent'|'cpf'|'capitalize'} [valueFormatter]
 */

/**
 * @typedef {Object} InfoDataDisplayParams
 * @property {Element} containerElement
 * @property {Item[]} items
 */
