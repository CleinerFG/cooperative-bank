import { ComponentCtrl } from "../../../../../js/controllers/ComponentCtrl.js";
import { LoanRequestModel } from "../models/LoanRequestModel.js";
import { ReceivedRequestView } from "../views/ReceivedRequestsView.js";

export class ReceivedRequestCtrl extends ComponentCtrl {
  get _ModelClass() {
    return LoanRequestModel;
  }

  get _ViewClass() {
    return ReceivedRequestView;
  }
}
