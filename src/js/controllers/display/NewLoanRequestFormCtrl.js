import { DisplayFormCtrl } from "./DisplayFormCtrl.js";
import { NewLoanRequestFormView } from "../../views/display/NewLoanRequestFormView.js";

export class NewLoanRequestFormCtrl extends DisplayFormCtrl {
  constructor(container) {
    super(container, NewLoanRequestFormView);
  }
}
