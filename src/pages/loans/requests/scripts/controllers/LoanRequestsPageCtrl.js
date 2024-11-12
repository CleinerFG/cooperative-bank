import { PageCtrl } from "../../../../../js/controllers/PageCtrl.js";
import { LoanRequestsPageView } from "../views/LoanRequestsPageView.js";
import { NewLoanRequestFormCtrl } from "./NewLoanRequestFormCtrl.js";
import { LoanRequestGroup } from "../components/LoanRequestGroup.js";

/**
 * Page controller for Loans Requests.
 *
 * @class
 * @extends PageCtrl
 */
export class LoanRequestsPageCtrl extends PageCtrl {
  constructor() {
    super(LoanRequestsPageView);
  }

  _initControllers() {
    new NewLoanRequestFormCtrl();
    new LoanRequestGroup();
  }
}
