import { FormCtrl } from "../../../../../js/controllers/forms/FormCtrl.js";
import { NewLoanRequestFormView } from "../views/NewLoanRequestFormView.js";

export class NewLoanRequestFormCtrl extends FormCtrl {
  constructor() {
    const params = {
      view: NewLoanRequestFormView,
      id: "new-request-form",
      container: document.querySelector(".new-request"),
      cssClass: "new-request-form",
      action: "/",
      method: "post",
    };
    super(params);
  }

  get _endpoint() {
    new AbstractMethodError("http://localhost:3000/opened-requests");
  }

  get _formData() {
    const creditor = document.querySelector("#creditor").value;
    const description = document.querySelector("#description").value;
    const value = document.querySelector("#value").value;
    const installments = document.querySelector("#installments").value;
    const rate = document.querySelector("#rate").value;

    return { creditor, description, value, installments, rate };
  }
}
