import { FormCtrl } from "../../../../../js/controllers/forms/FormCtrl.js";
import { InvalidDataError } from "../../../../../js/errors/InvalidDataError.js";
import { LoanRequestModel } from "../models/LoanRequestModel.js";
import { NewLoanRequestFormView } from "../views/NewLoanRequestFormView.js";

export class NewLoanRequestFormCtrl extends FormCtrl {
  get _viewClass() {
    return NewLoanRequestFormView;
  }

  get _viewParams() {
    return {
      id: "new-request-form",
      containerElement: document.querySelector(".new-request"),
      cssClass: "new-request-form",
    };
  }

  get _endpoint() {
    return "opened-requests";
  }

  get _formData() {
    const fields = document.querySelectorAll(
      "#creditor, #description, #value, #installments, #rate"
    );

    const isValid = Array.from(fields).every(
      (field) => field.dataset.valid === "true"
    );

    if (!isValid) {
      throw new InvalidDataError();
    }

    const params = {};
    fields.forEach((field) => {
      params[field.id] = field.value;
    });

    const model = new LoanRequestModel(params);
    return model.dataToApi;
  }
}
