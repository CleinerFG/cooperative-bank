import { FormCtrl } from "../../../../../js/controllers/forms/FormCtrl.js";
import { LoanRequestModel } from "../models/LoanRequestModel.js";
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
    return "opened-requests";
  }

  get _formData() {
    const params = {
      creditor: document.querySelector("#creditor").value,
      description: document.querySelector("#description").value,
      value: document.querySelector("#value").value,
      installments: document.querySelector("#installments").value,
      rate: document.querySelector("#rate").value,
    };
    const model = new LoanRequestModel(params);
    return model.dataToApi;
  }
}
