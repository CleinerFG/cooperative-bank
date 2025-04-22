import en from './en.js';
import pt from './pt.js';

class Translator {
  #translations = { en, pt };
  #lang;

  constructor() {
    this.#init();
  }

  #detectLanguage() {
    const browserLang = navigator.language.split('-')[0];
    this.#lang = this.#translations[browserLang] ? browserLang : 'en';
  }

  /**
   * @param {keyof en} key
   * @returns {string}
   */
  translate(key) {
    return this.#translations[this.#lang][key];
  }

  #init() {
    this.#detectLanguage();
  }
}

const translator = new Translator();

/**
 * @param {keyof en} key
 */
export const translate = translator.translate.bind(translator);
