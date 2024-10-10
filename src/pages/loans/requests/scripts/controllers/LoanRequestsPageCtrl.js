import { PageCtrl } from "../../../../../js/controllers/PageCtrl.js";
import { LoanRequestsPageView } from "../views/LoanRequestsPageView.js";
import { NewLoanRequestFormCtrlUp } from "./NewLoanRequestFormCtrlUp.js";
import { OpenedRequestGroupCtrl } from "./OpenedRequestGroupCtrl.js";
import { ReceivedRequestGroupCtrl } from "./ReceivedRequestGroupCtrl.js";

export class LoanRequestsPageCtrl extends PageCtrl {
  constructor() {
    super(LoanRequestsPageView);
  }

  _initControllers(){
    new NewLoanRequestFormCtrlUp();
    new OpenedRequestGroupCtrl();
    new ReceivedRequestGroupCtrl();
  }
}
