import { ComponentCtrl } from "../../../../../js/controllers/ComponentCtrl.js";
import { LoanRequestModel } from "../models/LoanRequestModel.js";
import { OpenedRequestView } from "../views/OpenedRequestView.js";

export class OpenedRequestCtrl extends ComponentCtrl {
  get _ModelClass() {
    return LoanRequestModel;
  }

  get _ViewClass() {
    return OpenedRequestView;
  }
}
