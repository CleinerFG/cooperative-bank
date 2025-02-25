import '../../../../types/loanType.js';

import { CardInstallmentPayable } from './CardInstallmentPayable.js';

export class CardInstallmentReceivable extends CardInstallmentPayable {

  get _footerTemplate() {
    return `
     <button id="btn-${this._id}" class="btn">See</button>
    `;
  }
}
