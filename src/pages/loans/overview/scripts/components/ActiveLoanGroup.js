import { ComponentGroup } from '../../../../../js/components/ComponentGroup.js';
import { CardActiveLoan } from './CardActiveLoan.js';

/**
 * Manages a group of active loans data components.
 * This class configures specific card types, categories, and default messages.
 *
 * @class
 * @extends ComponentGroup
 */
export class ActiveLoanGroup extends ComponentGroup {
  constructor() {
    const container = document.querySelector('.section.active-loans');
    super(container);
  }

  get _CardComponentClass() {
    return CardActiveLoan;
  }

  get _category() {
    return 'loans';
  }

  get _typeMappingConfig() {
    return [
      { name: 'payables', endpoint: 'loans-payables' },
      { name: 'receivables', endpoint: 'loans-receivables' },
    ];
  }

  get _emptyCardsTexts() {
    return [
      `There are no ${this._activeType} loans...`,
      "When there is news, we'll let you know ; )",
    ];
  }
}
