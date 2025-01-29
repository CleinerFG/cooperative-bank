import { PageView } from '../../../../../global/js/views/PageView.js';

export default class OverviewPageView extends PageView {
  get _introductionTemplate() {
    return `
    <section class="section active-loans">
      <h1 class="section__h1">Loans Overview</h1>
      <p class="info-text">On this page, you will find all active loans and their total value report.</p>
    </section>
    `;
  }

  /**
   * @note Total values - Must be implemented
   */
  get _totalReportTemplate() {
    return `
    <section class="section total-report">
      <h2 class="section__h2">Total Report</h2>
      <p class="info-text">Total to Pay: R$ 4.576,00</p>
      <p class="info-text">Total to Receive: R$ 15.454,68</p>
    </section>
    `;
  }

  get _pageTitle() {
    return 'overview';
  }

  get _template() {
    return `
    ${this._introductionTemplate}
    ${this._totalReportTemplate}
    `;
  }

  async _initComponents() {
    const ActiveLoanGroupModule = await import(
      './components/ActiveLoanGroup.js'
    );
    new ActiveLoanGroupModule.default();
  }
}
