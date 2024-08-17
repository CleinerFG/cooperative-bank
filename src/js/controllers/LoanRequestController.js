import { LoanRequestView } from "../views/LoanRequestView.js"

export class LoanRequestController {
  constructor(container) {
    this._container = container;
    this._requests = [];
  }

  _createLoanRequestView(loanRequest) {
    return new LoanRequestView(loanRequest, this._container);
  }

  _renderRequestView(loanRequestView) {
    loanRequestView.render();
  }

  addLoanRequest(loanRequest) {
    const loanRequestView = this._createLoanRequestView(loanRequest);
    this._requests.push(loanRequestView);
  }

  renderRequests() {
    this._requests.forEach((req) => this._renderRequestView(req));
  }
}



