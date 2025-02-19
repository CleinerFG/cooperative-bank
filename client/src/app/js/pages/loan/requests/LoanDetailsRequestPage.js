import LoanDetailsPage from '../LoanDetailsPage.js';
import loanService from '../../../services/LoanService.js';
import { capitalize } from '../../../../../global/js/utils/stringUtils.js';

export default class LoanDetailsRequestPage extends LoanDetailsPage {
  _fetchService(id) {
    return loanService.getLoanDetailsRequest(id);
  }

  _customInfoDataHandler() {
    if (this._queryParams.category === 'received') return;
    this._addInfoItemData(0, {
      label: 'status',
      getValue: () => capitalize(this._apiData.status),
      img: 'icon-status.svg',
    });
  }

  _setCustomConfig() {
    this._customInfoDataHandler();
  }
}
