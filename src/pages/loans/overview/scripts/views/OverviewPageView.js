import { PageView } from "../../../../../js/views/PageView.js";

export class OverviewPageView extends PageView {
  get _templateSectionInitial() {
    return `
    <section class="section active-loans">
      <h1 class="section__h1">Loans Overview</h1>
      <p class="info-text">On this page, you will find all active loans and their total value report.</p>
    </section>
    `;
  }

  get _templateSectionTotalReport() {
    return `
    <section class="section total-report">
      <h2 class="section__h2">Total Report</h2>
      <p class="info-text">Total to Pay: "Must be implemented"</p>
      <p class="info-text">Total to Receive: "Must be implemented"</p>
    </section>
    `;
  }

  _pageContent() {
    return `
    ${this._templateSectionInitial}
    ${this._templateSectionTotalReport}
    `;
  }
}
