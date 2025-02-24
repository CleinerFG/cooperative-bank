import '../../../../types/loanType.js';
import { CardLoanOverview } from '../../overview/components/CardLoanOverview.js';
import { PAGE_ROUTES } from '../../../../constants/routes.js';
import { capitalize } from '../../../../../../global/js/utils/stringUtils.js';
import { formatDate } from '../../../../../../global/js/utils/formatters.js';
import { handleIconDark } from '../../../../../../global/js/utils/themeUtils.js';

export class CardLoanRequest extends CardLoanOverview {
  get _redirectPageRoute() {
    return `${PAGE_ROUTES.loan.requestDetails}?id=${this._apiData.id}&category=${this._category}`;
  }

  /**
   * @type {RequestData}
   */
  get _apiData() {
    return super._apiData;
  }

  get _headerTemplate() {
    let status = '';
    if (this._category === 'opened') {
      const statusCssMap = {
        pending: 'span-pending',
        rejected: 'span-fail',
        approved: 'span-success',
      };
      const cssClass = statusCssMap[this._apiData.status];
      status = `<span class="span-status ${cssClass}">${capitalize(this._apiData.status)}</span>`;
    }
    return `
        <div class="card-title">
          <img src="${this._modalityIcon[this._apiData.modality]}" alt="Modality"
           class="icon ${handleIconDark()}">
          <span class="span-title">${capitalize(this._apiData.modality)}</span>
        </div>
        ${status}
        <span class="span-date">Started on ${formatDate(this._apiData.date)}</span>
        `;
  }
}
