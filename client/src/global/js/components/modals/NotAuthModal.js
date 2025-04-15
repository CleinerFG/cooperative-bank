import { Modal } from './Modal.js';
import { translate } from '../../i18n/Translator.js';

export default class NotAuthModal extends Modal {
  constructor() {
    super('not-auth');
    super._init();
  }

  get _headerTemplate() {
    return `<h2 class="modal-title">${translate('notAuthTitle')}</h2>`;
  }

  get _contentTemplate() {
    return `
      <img src="/app/static/assets/images/unauthorized.svg"/>
      <p class="info-text">${translate('notAuthMsg')}</p>
    `;
  }

  get _footerTemplate() {
    return '<button class="btn">OK</button>';
  }

  _setup() {}
}
