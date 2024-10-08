import { ComponentCtrl } from "../../../../../js/controllers/ComponentCtrl.js";
import { LoanModel } from "../models/LoanModel.js";
import { LoanView } from "../views/LoanView.js";

export class LoanCtrl extends ComponentCtrl{
  get _ModelClass() {
    return LoanModel;
  }

  get _ViewClass() {
    return LoanView;
  }
}
