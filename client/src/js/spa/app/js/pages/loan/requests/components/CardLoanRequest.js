import '../../../../types/loanType.js';
import { CardLoanOverview } from '../../overview/components/CardLoanOverview.js';
import { PAGE_ROUTES } from '../../../../constants/routes.js';
import { formatDate } from '../../../../../../global/js/utils/formatters.js';
import { handleIconDark } from '../../../../../../global/js/utils/themeUtils.js';
import { translate } from '../../../../../../global/js/i18n/Translator.js';

export class CardLoanRequest extends CardLoanOverview {
  get _redirectPageRoute() {
    return `${PAGE_ROUTES.loan.requestDetails.path}?id=${this._apiData.id}&category=${this._category}`;
  }

  /**
   * @type {RequestData}
   */
  get _apiData() {
    return super._apiData;
  }

  get _headerTemplate() {
    let status = '';
    if (this._category === 'open') {
      const statusCssMap = {
        pending: 'span-pending',
        rejected: 'span-fail',
        accepted: 'span-success',
      };
      const cssClass = statusCssMap[this._apiData.status];
      status = `<span class="span-status ${cssClass}">${translate(this._apiData.status)}</span>`;
    }
    return `
        <div class="card-title">
          <img src="${this._modalityIcon[this._apiData.modality]}" alt="Modality"
           class="icon ${handleIconDark()}">
          <span class="span-title">${translate(this._apiData.modality)}</span>
        </div>
        ${status}
        <span class="span-date">${translate('startOn')} ${formatDate(this._apiData.date)}</span>
        `;
  }
}
