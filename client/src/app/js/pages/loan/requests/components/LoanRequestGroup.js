import { ComponentGroup } from '../../../../../js/components/ComponentGroup.js';
import { CardLoanRequestReceived } from './CardLoanRequestReceived.js';
import { CardLoanRequestOpened } from './CardLoanRequestOpened.js';

/**
 * Manages a group of loan requests data components.
 */
export default class LoanRequestGroup extends ComponentGroup {
  get _containerElement() {
    return document.querySelector('.section.loan-requests');
  }

  get _category() {
    return 'requests';
  }

  get _typeMappingConfig() {
    return [
      {
        name: 'received',
        CardClass: CardLoanRequestReceived,
        endpoint: 'loan/request/received',
      },
      {
        name: 'opened',
        CardClass: CardLoanRequestOpened,
        endpoint: 'loan/request/opened',
      },
    ];
  }

  get _emptyCardsTexts() {
    return [
      `There are no requests...`,
      "When there is news, we'll let you know ; )",
    ];
  }
}
