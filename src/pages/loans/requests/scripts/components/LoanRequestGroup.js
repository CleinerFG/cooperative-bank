import { ComponentGroup } from '../../../../../js/components/ComponentGroup.js';
import { CardLoanRequest } from './CardLoanRequest.js';

/**
 * Manages a group of loan requests data components.
 * This class configures specific card types, categories, and default messages.
 *
 * @class
 * @extends ComponentGroup
 */
export class LoanRequestGroup extends ComponentGroup {
  get _containerElement() {
    return document.querySelector('.section.loan-requests');
  }

  get _CardComponentClass() {
    return CardLoanRequest;
  }

  get _category() {
    return 'requests';
  }

  get _typeMappingConfig() {
    return [
      { name: 'received', endpoint: 'requests-received' },
      { name: 'opened', endpoint: 'requests-opened' },
    ];
  }

  get _emptyCardsTexts() {
    return [
      `There are no ${this._activeType} requests...`,
      "When there is news, we'll let you know ; )",
    ];
  }
}
