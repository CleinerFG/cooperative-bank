import LoanDetailsPage from '../LoanDetailsPage.js';
import loanService from '../../../services/LoanService.js';
import { ProgressBar } from './components/progressBar.js';
import { numberToCurrency } from '../../../../../global/js/utils/formatters.js';
import LoanInstallmentManager from './components/LoanInstallmentManager.js';

export default class LoanDetaislOverviewPage extends LoanDetailsPage {
  get _pageTitle() {
    return 'Loan Details';
  }

  get _customTemplate() {
    return '<div id="loan-installments"></div>';
  }

  _fetchService(id) {
    return loanService.getLoanOverviewDetails(id);
  }

  _customInfoDataHandler() {
    this._addInfoItemData(6, {
      label: 'outstanding balance',
      getValue: () => numberToCurrency(this._apiData?.outstandingBalance),
      img: 'icon-outstanding.svg',
    });
  }

  _paymentProgressHandler() {
    const container = document.querySelector('.payment-progress');
    new ProgressBar(
      container,
      'payment progress',
      this._apiData.installments,
      this._apiData.paidInstallments
    );
  }

  _initComponents() {
    this._paymentProgressHandler();
    new LoanInstallmentManager(this._apiData.id);
  }

  _setCustomConfig() {
    this._customInfoDataHandler();
  }
}
