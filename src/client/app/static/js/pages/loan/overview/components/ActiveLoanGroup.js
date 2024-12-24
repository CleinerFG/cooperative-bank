import { ComponentGroup } from '../../../../components/ComponentGroup.js';
import { CardActiveLoan } from './CardActiveLoan.js';

/**
 * Manages a group of active loans data components.
 */
export class ActiveLoanGroup extends ComponentGroup {
  get _containerElement() {
    return document.querySelector('.section.active-loans');
  }

  get _CardComponentClass() {
    return CardActiveLoan;
  }

  get _category() {
    return 'loans';
  }

  get _typeMappingConfig() {
    return [
      {
        name: 'payables',
        CardClass: CardActiveLoan,
        endpoint: 'loans-payables',
      },
      {
        name: 'receivables',
        CardClass: CardActiveLoan,
        endpoint: 'loans-receivables',
      },
    ];
  }

  get _emptyCardsTexts() {
    return [
      `There are no ${this._activeType} loans...`,
      "When there is news, we'll let you know ; )",
    ];
  }
}
