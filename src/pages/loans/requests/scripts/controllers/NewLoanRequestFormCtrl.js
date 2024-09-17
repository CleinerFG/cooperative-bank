import { FormCtrl } from "../../../../../js/controllers/forms/FormCtrl.js";
import { NewLoanRequestFormView } from "../views/NewLoanRequestFormView.js";

export class NewLoanRequestFormCtrl extends FormCtrl {
  constructor() {
    const params = {
      view: NewLoanRequestFormView,
      container: document.querySelector(".new-request"),
      cssClass: "new-request-form",
      action: "/",
      method: "post",
    };
    super(params);
  }
}
