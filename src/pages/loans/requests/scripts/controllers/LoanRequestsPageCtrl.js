import { PageCtrl } from "../../../../../js/controllers/PageCtrl.js";
import { LoanRequestsPageView } from "../views/LoanRequestsPageView.js";
import { NewLoanRequestFormCtrl } from "./NewLoanRequestFormCtrl.js";
import { OpenedRequestGroupCtrl } from "./OpenedRequestGroupCtrl.js";
import { ReceivedRequestGroupCtrl } from "./ReceivedRequestGroupCtrl.js";

export class LoanRequestsPageCtrl extends PageCtrl {
  constructor() {
    super(LoanRequestsPageView);
  }

  _initControllers(){
    new NewLoanRequestFormCtrl();
    new OpenedRequestGroupCtrl();
    new ReceivedRequestGroupCtrl();
  }
}
