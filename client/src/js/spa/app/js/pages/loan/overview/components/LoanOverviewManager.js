import LoanService from '../../../../services/LoanService.js';
import { LoanManager } from '../../LoanManager.js';
import { CardLoanOverview } from './CardLoanOverview.js';

export default class LoanOverviewManager extends LoanManager {
  get _entityMap() {
    return {
      entity: 'active-loans',
      categories: [
        {
          name: 'payable',
          CardClass: CardLoanOverview,
        },
        {
          name: 'receivable',
          CardClass: CardLoanOverview,
        },
      ],
    };
  }

  async _fetchService(category) {
    return category === 'payable'
      ? LoanService.getLoansOverview('payable')
      : LoanService.getLoansOverview('receivable');
  }

  get _cardSkelonRows() {
    return 2;
  }
}
